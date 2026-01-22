"use client";

import { useRef, useEffect } from "react";
import {
  Clock,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  SRGBColorSpace,
  MathUtils,
  Vector2,
  Vector3,
  MeshPhysicalMaterial,
  ShaderChunk,
  Color,
  Object3D,
  InstancedMesh,
  PMREMGenerator,
  SphereGeometry,
  AmbientLight,
  PointLight,
  ACESFilmicToneMapping,
  Raycaster,
  Plane,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

interface BallpitProps {
  className?: string;
  followCursor?: boolean;
  count?: number;
  gravity?: number;
  friction?: number;
  wallBounce?: number;
  colors?: string[];
  ambientColor?: number;
  ambientIntensity?: number;
  lightIntensity?: number;
  minSize?: number;
  maxSize?: number;
  size0?: number;
  maxVelocity?: number;
  maxX?: number;
  maxY?: number;
  maxZ?: number;
  materialParams?: {
    metalness?: number;
    roughness?: number;
    clearcoat?: number;
    clearcoatRoughness?: number;
  };
}

interface SizeInfo {
  width: number;
  height: number;
  wWidth: number;
  wHeight: number;
  ratio: number;
  pixelRatio: number;
}

interface TimeInfo {
  elapsed: number;
  delta: number;
}

interface ThreeConfig {
  canvas?: HTMLCanvasElement;
  id?: string;
  size?: { width: number; height: number } | "parent" | "window";
  rendererOptions?: Record<string, unknown>;
}

interface PointerState {
  position: Vector2;
  nPosition: Vector2;
  hover: boolean;
  touching: boolean;
  onEnter: (state: PointerState) => void;
  onMove: (state: PointerState) => void;
  onClick: (state: PointerState) => void;
  onLeave: (state: PointerState) => void;
  dispose: () => void;
}

interface PhysicsConfig {
  count: number;
  minSize: number;
  maxSize: number;
  size0: number;
  gravity: number;
  friction: number;
  wallBounce: number;
  maxVelocity: number;
  maxX: number;
  maxY: number;
  maxZ: number;
  controlSphere0: boolean;
}

interface BallpitConfig extends PhysicsConfig {
  colors: string[];
  ambientColor: number;
  ambientIntensity: number;
  lightIntensity: number;
  followCursor: boolean;
  materialParams?: {
    metalness?: number;
    roughness?: number;
    clearcoat?: number;
    clearcoatRoughness?: number;
  };
}

const { randFloat, randFloatSpread } = MathUtils;

class ThreeApp {
  canvas!: HTMLCanvasElement;
  camera!: PerspectiveCamera;
  cameraMinAspect?: number;
  cameraMaxAspect?: number;
  cameraFov!: number;
  maxPixelRatio?: number;
  minPixelRatio?: number;
  scene!: Scene;
  renderer!: WebGLRenderer;
  size: SizeInfo = {
    width: 0,
    height: 0,
    wWidth: 0,
    wHeight: 0,
    ratio: 0,
    pixelRatio: 0,
  };
  onBeforeRender: (time: TimeInfo) => void = () => {};
  onAfterRender: (time: TimeInfo) => void = () => {};
  onAfterResize: (size: SizeInfo) => void = () => {};
  isDisposed = false;

  private config: ThreeConfig;
  private postprocessingInstance?: { render: () => void; dispose: () => void; setSize: (w: number, h: number) => void };
  private isVisible = false;
  private isRunning = false;
  private resizeObserver?: ResizeObserver;
  private intersectionObserver?: IntersectionObserver;
  private resizeTimeout?: ReturnType<typeof setTimeout>;
  private clock = new Clock();
  private time: TimeInfo = { elapsed: 0, delta: 0 };
  private animationFrame?: number;

  constructor(config: ThreeConfig) {
    this.config = { ...config };
    this.initCamera();
    this.initScene();
    this.initRenderer();
    this.resize();
    this.initListeners();
  }

  private initCamera() {
    this.camera = new PerspectiveCamera();
    this.cameraFov = this.camera.fov;
  }

  private initScene() {
    this.scene = new Scene();
  }

  private initRenderer() {
    if (this.config.canvas) {
      this.canvas = this.config.canvas;
    } else if (this.config.id) {
      this.canvas = document.getElementById(this.config.id) as HTMLCanvasElement;
    } else {
      console.error("Three: Missing canvas or id parameter");
      return;
    }
    this.canvas.style.display = "block";
    const options = {
      canvas: this.canvas,
      powerPreference: "high-performance" as const,
      ...(this.config.rendererOptions ?? {}),
    };
    this.renderer = new WebGLRenderer(options);
    this.renderer.outputColorSpace = SRGBColorSpace;
  }

  private initListeners() {
    if (!(this.config.size instanceof Object)) {
      window.addEventListener("resize", this.handleResize.bind(this));
      if (this.config.size === "parent" && this.canvas.parentNode) {
        this.resizeObserver = new ResizeObserver(this.handleResize.bind(this));
        this.resizeObserver.observe(this.canvas.parentNode as Element);
      }
    }
    this.intersectionObserver = new IntersectionObserver(
      this.handleIntersection.bind(this),
      { root: null, rootMargin: "0px", threshold: 0 }
    );
    this.intersectionObserver.observe(this.canvas);
    document.addEventListener("visibilitychange", this.handleVisibility.bind(this));
  }

  private removeListeners() {
    window.removeEventListener("resize", this.handleResize.bind(this));
    this.resizeObserver?.disconnect();
    this.intersectionObserver?.disconnect();
    document.removeEventListener("visibilitychange", this.handleVisibility.bind(this));
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    this.isVisible = entries[0].isIntersecting;
    if (this.isVisible) {
      this.start();
    } else {
      this.stop();
    }
  }

  private handleVisibility() {
    if (this.isVisible) {
      if (document.hidden) {
        this.stop();
      } else {
        this.start();
      }
    }
  }

  private handleResize() {
    if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(this.resize.bind(this), 100);
  }

  resize() {
    let width: number, height: number;
    if (this.config.size instanceof Object) {
      width = this.config.size.width;
      height = this.config.size.height;
    } else if (this.config.size === "parent" && this.canvas.parentNode) {
      width = (this.canvas.parentNode as HTMLElement).offsetWidth;
      height = (this.canvas.parentNode as HTMLElement).offsetHeight;
    } else {
      width = window.innerWidth;
      height = window.innerHeight;
    }
    this.size.width = width;
    this.size.height = height;
    this.size.ratio = width / height;
    this.updateCamera();
    this.updateRenderer();
    this.onAfterResize(this.size);
  }

  private updateCamera() {
    this.camera.aspect = this.size.width / this.size.height;
    if (this.camera.isPerspectiveCamera && this.cameraFov) {
      if (this.cameraMinAspect && this.camera.aspect < this.cameraMinAspect) {
        this.adjustFov(this.cameraMinAspect);
      } else if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) {
        this.adjustFov(this.cameraMaxAspect);
      } else {
        this.camera.fov = this.cameraFov;
      }
    }
    this.camera.updateProjectionMatrix();
    this.updateWorldSize();
  }

  private adjustFov(aspect: number) {
    const t = Math.tan(MathUtils.degToRad(this.cameraFov / 2)) / (this.camera.aspect / aspect);
    this.camera.fov = 2 * MathUtils.radToDeg(Math.atan(t));
  }

  updateWorldSize() {
    if (this.camera.isPerspectiveCamera) {
      const fov = (this.camera.fov * Math.PI) / 180;
      this.size.wHeight = 2 * Math.tan(fov / 2) * this.camera.position.length();
      this.size.wWidth = this.size.wHeight * this.camera.aspect;
    }
  }

  private updateRenderer() {
    this.renderer.setSize(this.size.width, this.size.height);
    this.postprocessingInstance?.setSize(this.size.width, this.size.height);
    let pixelRatio = window.devicePixelRatio;
    if (this.maxPixelRatio && pixelRatio > this.maxPixelRatio) {
      pixelRatio = this.maxPixelRatio;
    } else if (this.minPixelRatio && pixelRatio < this.minPixelRatio) {
      pixelRatio = this.minPixelRatio;
    }
    this.renderer.setPixelRatio(pixelRatio);
    this.size.pixelRatio = pixelRatio;
  }

  get postprocessing() {
    return this.postprocessingInstance;
  }

  set postprocessing(pp) {
    this.postprocessingInstance = pp;
    if (pp) this.render = pp.render.bind(pp);
  }

  private start() {
    if (this.isRunning) return;
    const animate = () => {
      this.animationFrame = requestAnimationFrame(animate);
      this.time.delta = this.clock.getDelta();
      this.time.elapsed += this.time.delta;
      this.onBeforeRender(this.time);
      this.render();
      this.onAfterRender(this.time);
    };
    this.isRunning = true;
    this.clock.start();
    animate();
  }

  private stop() {
    if (this.isRunning && this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.isRunning = false;
      this.clock.stop();
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  clear() {
    this.scene.traverse((obj) => {
      const mesh = obj as InstancedMesh;
      if (mesh.isMesh && mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => m.dispose());
        } else {
          mesh.material.dispose();
        }
        mesh.geometry.dispose();
      }
    });
    this.scene.clear();
  }

  dispose() {
    this.removeListeners();
    this.stop();
    this.clear();
    this.postprocessingInstance?.dispose();
    this.renderer.dispose();
    this.isDisposed = true;
  }
}

const pointerMap = new Map<HTMLElement, PointerState>();
const globalPointer = new Vector2();
let isListening = false;

function createPointerState(config: {
  domElement: HTMLElement;
  onMove?: (state: PointerState) => void;
  onLeave?: (state: PointerState) => void;
  onEnter?: (state: PointerState) => void;
  onClick?: (state: PointerState) => void;
}): PointerState {
  const state: PointerState = {
    position: new Vector2(),
    nPosition: new Vector2(),
    hover: false,
    touching: false,
    onEnter: config.onEnter || (() => {}),
    onMove: config.onMove || (() => {}),
    onClick: config.onClick || (() => {}),
    onLeave: config.onLeave || (() => {}),
    dispose: () => {},
  };

  if (!pointerMap.has(config.domElement)) {
    pointerMap.set(config.domElement, state);
    if (!isListening) {
      document.body.addEventListener("pointermove", handlePointerMove);
      document.body.addEventListener("pointerleave", handlePointerLeave);
      document.body.addEventListener("click", handleClick);
      document.body.addEventListener("touchstart", handleTouchStart, { passive: true });
      document.body.addEventListener("touchmove", handleTouchMove, { passive: true });
      document.body.addEventListener("touchend", handleTouchEnd, { passive: true });
      document.body.addEventListener("touchcancel", handleTouchEnd, { passive: true });
      isListening = true;
    }
  }

  state.dispose = () => {
    pointerMap.delete(config.domElement);
    if (pointerMap.size === 0) {
      document.body.removeEventListener("pointermove", handlePointerMove);
      document.body.removeEventListener("pointerleave", handlePointerLeave);
      document.body.removeEventListener("click", handleClick);
      document.body.removeEventListener("touchstart", handleTouchStart);
      document.body.removeEventListener("touchmove", handleTouchMove);
      document.body.removeEventListener("touchend", handleTouchEnd);
      document.body.removeEventListener("touchcancel", handleTouchEnd);
      isListening = false;
    }
  };

  return state;
}

function handlePointerMove(e: PointerEvent) {
  globalPointer.x = e.clientX;
  globalPointer.y = e.clientY;
  processInteraction();
}

function processInteraction() {
  for (const [elem, state] of pointerMap) {
    const rect = elem.getBoundingClientRect();
    if (isInsideRect(rect)) {
      updatePointerPosition(state, rect);
      if (!state.hover) {
        state.hover = true;
        state.onEnter(state);
      }
      state.onMove(state);
    } else if (state.hover && !state.touching) {
      state.hover = false;
      state.onLeave(state);
    }
  }
}

function handleClick(e: MouseEvent) {
  globalPointer.x = e.clientX;
  globalPointer.y = e.clientY;
  for (const [elem, state] of pointerMap) {
    const rect = elem.getBoundingClientRect();
    updatePointerPosition(state, rect);
    if (isInsideRect(rect)) state.onClick(state);
  }
}

function handlePointerLeave() {
  for (const state of pointerMap.values()) {
    if (state.hover) {
      state.hover = false;
      state.onLeave(state);
    }
  }
}

function handleTouchStart(e: TouchEvent) {
  if (e.touches.length > 0) {
    globalPointer.x = e.touches[0].clientX;
    globalPointer.y = e.touches[0].clientY;
    for (const [elem, state] of pointerMap) {
      const rect = elem.getBoundingClientRect();
      if (isInsideRect(rect)) {
        state.touching = true;
        updatePointerPosition(state, rect);
        if (!state.hover) {
          state.hover = true;
          state.onEnter(state);
        }
        state.onMove(state);
      }
    }
  }
}

function handleTouchMove(e: TouchEvent) {
  if (e.touches.length > 0) {
    globalPointer.x = e.touches[0].clientX;
    globalPointer.y = e.touches[0].clientY;
    for (const [elem, state] of pointerMap) {
      const rect = elem.getBoundingClientRect();
      updatePointerPosition(state, rect);
      if (isInsideRect(rect)) {
        if (!state.hover) {
          state.hover = true;
          state.touching = true;
          state.onEnter(state);
        }
        state.onMove(state);
      } else if (state.hover && state.touching) {
        state.onMove(state);
      }
    }
  }
}

function handleTouchEnd() {
  for (const state of pointerMap.values()) {
    if (state.touching) {
      state.touching = false;
      if (state.hover) {
        state.hover = false;
        state.onLeave(state);
      }
    }
  }
}

function updatePointerPosition(state: PointerState, rect: DOMRect) {
  state.position.x = globalPointer.x - rect.left;
  state.position.y = globalPointer.y - rect.top;
  state.nPosition.x = (state.position.x / rect.width) * 2 - 1;
  state.nPosition.y = (-state.position.y / rect.height) * 2 + 1;
}

function isInsideRect(rect: DOMRect) {
  const { x, y } = globalPointer;
  const { left, top, width, height } = rect;
  return x >= left && x <= left + width && y >= top && y <= top + height;
}

const tempPos1 = new Vector3();
const tempPos2 = new Vector3();
const tempVel1 = new Vector3();
const tempVel2 = new Vector3();
const tempDiff = new Vector3();
const tempPush = new Vector3();
const tempBounce1 = new Vector3();
const tempBounce2 = new Vector3();
const sphere0Pos = new Vector3();

class BallPhysics {
  config: PhysicsConfig;
  positionData: Float32Array;
  velocityData: Float32Array;
  sizeData: Float32Array;
  center: Vector3;

  constructor(config: PhysicsConfig) {
    this.config = config;
    this.positionData = new Float32Array(3 * config.count).fill(0);
    this.velocityData = new Float32Array(3 * config.count).fill(0);
    this.sizeData = new Float32Array(config.count).fill(1);
    this.center = new Vector3();
    this.initPositions();
    this.setSizes();
  }

  private initPositions() {
    const { config, positionData } = this;
    this.center.toArray(positionData, 0);
    for (let i = 1; i < config.count; i++) {
      const idx = 3 * i;
      positionData[idx] = randFloatSpread(2 * config.maxX);
      positionData[idx + 1] = randFloatSpread(2 * config.maxY);
      positionData[idx + 2] = randFloatSpread(2 * config.maxZ);
    }
  }

  setSizes() {
    const { config, sizeData } = this;
    sizeData[0] = config.size0;
    for (let i = 1; i < config.count; i++) {
      sizeData[i] = randFloat(config.minSize, config.maxSize);
    }
  }

  update(time: TimeInfo) {
    const { config, center, positionData, sizeData, velocityData } = this;
    let startIdx = 0;

    if (config.controlSphere0) {
      startIdx = 1;
      sphere0Pos.fromArray(positionData, 0);
      sphere0Pos.lerp(center, 0.1).toArray(positionData, 0);
      tempVel1.set(0, 0, 0).toArray(velocityData, 0);
    }

    for (let i = startIdx; i < config.count; i++) {
      const base = 3 * i;
      tempPos1.fromArray(positionData, base);
      tempVel1.fromArray(velocityData, base);
      tempVel1.y -= time.delta * config.gravity * sizeData[i];
      tempVel1.multiplyScalar(config.friction);
      tempVel1.clampLength(0, config.maxVelocity);
      tempPos1.add(tempVel1);
      tempPos1.toArray(positionData, base);
      tempVel1.toArray(velocityData, base);
    }

    for (let i = startIdx; i < config.count; i++) {
      const base = 3 * i;
      tempPos1.fromArray(positionData, base);
      tempVel1.fromArray(velocityData, base);
      const radius = sizeData[i];

      for (let j = i + 1; j < config.count; j++) {
        const otherBase = 3 * j;
        tempPos2.fromArray(positionData, otherBase);
        tempVel2.fromArray(velocityData, otherBase);
        const otherRadius = sizeData[j];

        tempDiff.copy(tempPos2).sub(tempPos1);
        const dist = tempDiff.length();
        const sumRadius = radius + otherRadius;

        if (dist < sumRadius) {
          const overlap = sumRadius - dist;
          tempPush.copy(tempDiff).normalize().multiplyScalar(0.5 * overlap);
          tempBounce1.copy(tempPush).multiplyScalar(Math.max(tempVel1.length(), 1));
          tempBounce2.copy(tempPush).multiplyScalar(Math.max(tempVel2.length(), 1));

          tempPos1.sub(tempPush);
          tempVel1.sub(tempBounce1);
          tempPos1.toArray(positionData, base);
          tempVel1.toArray(velocityData, base);

          tempPos2.add(tempPush);
          tempVel2.add(tempBounce2);
          tempPos2.toArray(positionData, otherBase);
          tempVel2.toArray(velocityData, otherBase);
        }
      }

      if (config.controlSphere0) {
        tempDiff.copy(sphere0Pos).sub(tempPos1);
        const dist = tempDiff.length();
        const sumRadius0 = radius + sizeData[0];
        if (dist < sumRadius0) {
          const diff = sumRadius0 - dist;
          tempPush.copy(tempDiff.normalize()).multiplyScalar(diff);
          tempBounce1.copy(tempPush).multiplyScalar(Math.max(tempVel1.length(), 2));
          tempPos1.sub(tempPush);
          tempVel1.sub(tempBounce1);
        }
      }

      if (Math.abs(tempPos1.x) + radius > config.maxX) {
        tempPos1.x = Math.sign(tempPos1.x) * (config.maxX - radius);
        tempVel1.x = -tempVel1.x * config.wallBounce;
      }

      if (config.gravity === 0) {
        if (Math.abs(tempPos1.y) + radius > config.maxY) {
          tempPos1.y = Math.sign(tempPos1.y) * (config.maxY - radius);
          tempVel1.y = -tempVel1.y * config.wallBounce;
        }
      } else if (tempPos1.y - radius < -config.maxY) {
        tempPos1.y = -config.maxY + radius;
        tempVel1.y = -tempVel1.y * config.wallBounce;
      }

      const maxBoundary = Math.max(config.maxZ, config.maxSize);
      if (Math.abs(tempPos1.z) + radius > maxBoundary) {
        tempPos1.z = Math.sign(tempPos1.z) * (config.maxZ - radius);
        tempVel1.z = -tempVel1.z * config.wallBounce;
      }

      tempPos1.toArray(positionData, base);
      tempVel1.toArray(velocityData, base);
    }
  }
}

class SubsurfaceMaterial extends MeshPhysicalMaterial {
  uniforms = {
    thicknessDistortion: { value: 0.1 },
    thicknessAmbient: { value: 0 },
    thicknessAttenuation: { value: 0.1 },
    thicknessPower: { value: 2 },
    thicknessScale: { value: 10 },
  };
  onBeforeCompile2?: (shader: unknown) => void;

  constructor(params: ConstructorParameters<typeof MeshPhysicalMaterial>[0]) {
    super(params);
    this.defines = { ...this.defines, USE_UV: "" };
    this.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, this.uniforms);
      shader.fragmentShader =
        `
        uniform float thicknessPower;
        uniform float thicknessScale;
        uniform float thicknessDistortion;
        uniform float thicknessAmbient;
        uniform float thicknessAttenuation;
      ` + shader.fragmentShader;

      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        `
        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {
          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
          #ifdef USE_COLOR
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;
          #else
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;
          #endif
          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
        }

        void main() {
      `
      );

      const lightsFragment = ShaderChunk.lights_fragment_begin.replaceAll(
        "RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",
        `
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `
      );
      shader.fragmentShader = shader.fragmentShader.replace("#include <lights_fragment_begin>", lightsFragment);
      if (this.onBeforeCompile2) this.onBeforeCompile2(shader);
    };
  }
}

const defaultConfig: BallpitConfig = {
  count: 200,
  colors: ["#000000"],
  ambientColor: 0xffffff,
  ambientIntensity: 1,
  lightIntensity: 200,
  materialParams: {
    metalness: 0.5,
    roughness: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.15,
  },
  minSize: 0.5,
  maxSize: 1,
  size0: 1,
  gravity: 0.5,
  friction: 0.9975,
  wallBounce: 0.95,
  maxVelocity: 0.15,
  maxX: 5,
  maxY: 5,
  maxZ: 2,
  controlSphere0: false,
  followCursor: true,
};

const tempObject = new Object3D();

class SpheresInstancedMesh extends InstancedMesh {
  config: BallpitConfig;
  physics: BallPhysics;
  ambientLight!: AmbientLight;
  light!: PointLight;

  constructor(renderer: WebGLRenderer, options: Partial<BallpitConfig> = {}) {
    const config = { ...defaultConfig, ...options };
    const roomEnv = new RoomEnvironment();
    const envMap = new PMREMGenerator(renderer).fromScene(roomEnv).texture;
    const geometry = new SphereGeometry();
    const material = new SubsurfaceMaterial({ envMap, ...config.materialParams });
    material.envMapRotation.x = -Math.PI / 2;
    super(geometry, material, config.count);
    this.config = config;
    this.physics = new BallPhysics(config);
    this.initLights();
    this.setColors(config.colors);
  }

  private initLights() {
    this.ambientLight = new AmbientLight(this.config.ambientColor, this.config.ambientIntensity);
    this.add(this.ambientLight);
    this.light = new PointLight(this.config.colors[0], this.config.lightIntensity);
    this.add(this.light);
  }

  setColors(colors: string[]) {
    if (Array.isArray(colors) && colors.length > 0) {
      const colorObjects = colors.map((c) => new Color(c));
      for (let i = 0; i < this.count; i++) {
        const ratio = i / this.count;
        const scaled = ratio * (colors.length - 1);
        const idx = Math.floor(scaled);
        const start = colorObjects[idx];
        if (idx >= colors.length - 1) {
          this.setColorAt(i, start);
        } else {
          const alpha = scaled - idx;
          const end = colorObjects[idx + 1];
          const mixed = new Color();
          mixed.r = start.r + alpha * (end.r - start.r);
          mixed.g = start.g + alpha * (end.g - start.g);
          mixed.b = start.b + alpha * (end.b - start.b);
          this.setColorAt(i, mixed);
        }
        if (i === 0) {
          this.light.color.copy(colorObjects[0]);
        }
      }
      if (this.instanceColor) this.instanceColor.needsUpdate = true;
    }
  }

  update(time: TimeInfo) {
    this.physics.update(time);
    for (let i = 0; i < this.count; i++) {
      tempObject.position.fromArray(this.physics.positionData, 3 * i);
      if (i === 0 && this.config.followCursor === false) {
        tempObject.scale.setScalar(0);
      } else {
        tempObject.scale.setScalar(this.physics.sizeData[i]);
      }
      tempObject.updateMatrix();
      this.setMatrixAt(i, tempObject.matrix);
      if (i === 0) this.light.position.copy(tempObject.position);
    }
    this.instanceMatrix.needsUpdate = true;
  }
}

function createBallpit(canvas: HTMLCanvasElement, options: Partial<BallpitConfig> = {}) {
  const three = new ThreeApp({
    canvas,
    size: "parent",
    rendererOptions: { antialias: true, alpha: true },
  });

  let spheres: SpheresInstancedMesh;
  three.renderer.toneMapping = ACESFilmicToneMapping;
  three.camera.position.set(0, 0, 20);
  three.camera.lookAt(0, 0, 0);
  three.cameraMaxAspect = 1.5;
  three.resize();

  initialize(options);

  const raycaster = new Raycaster();
  const plane = new Plane(new Vector3(0, 0, 1), 0);
  const intersectPoint = new Vector3();
  let isPaused = false;

  canvas.style.touchAction = "none";
  canvas.style.userSelect = "none";
  (canvas.style as unknown as Record<string, string>).webkitUserSelect = "none";

  const pointer = createPointerState({
    domElement: canvas,
    onMove() {
      raycaster.setFromCamera(pointer.nPosition, three.camera);
      three.camera.getWorldDirection(plane.normal);
      raycaster.ray.intersectPlane(plane, intersectPoint);
      spheres.physics.center.copy(intersectPoint);
      spheres.config.controlSphere0 = true;
    },
    onLeave() {
      spheres.config.controlSphere0 = false;
    },
  });

  function initialize(opts: Partial<BallpitConfig>) {
    if (spheres) {
      three.clear();
      three.scene.remove(spheres);
    }
    spheres = new SpheresInstancedMesh(three.renderer, opts);
    three.scene.add(spheres);
  }

  three.onBeforeRender = (time) => {
    if (!isPaused) spheres.update(time);
  };

  three.onAfterResize = (size) => {
    spheres.config.maxX = size.wWidth / 2;
    spheres.config.maxY = size.wHeight / 2;
  };

  return {
    three,
    get spheres() {
      return spheres;
    },
    setCount(count: number) {
      initialize({ ...spheres.config, count });
    },
    togglePause() {
      isPaused = !isPaused;
    },
    dispose() {
      pointer.dispose();
      three.dispose();
    },
  };
}

const Ballpit = ({ className = "", followCursor = true, ...props }: BallpitProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const instanceRef = useRef<ReturnType<typeof createBallpit> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    instanceRef.current = createBallpit(canvas, { followCursor, ...props });

    return () => {
      if (instanceRef.current) {
        instanceRef.current.dispose();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas className={className} ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default Ballpit;
