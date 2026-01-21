"use client";

import { useState, FormEvent } from "react";
import { WORKSHOPS } from "@/lib/constants";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  taller: string;
  mensaje: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

interface CustomContactFormProps {
  id?: string;
  webAppUrl: string;
}

export function CustomContactForm({ id, webAppUrl }: CustomContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    taller: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Enviando..." });

    try {
      // Crear FormData para enviar como URL encoded
      const urlParams = new URLSearchParams();
      urlParams.append("nombre", formData.nombre);
      urlParams.append("email", formData.email);
      urlParams.append("telefono", formData.telefono);
      urlParams.append("taller", formData.taller);
      urlParams.append("mensaje", formData.mensaje);

      await fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlParams.toString(),
      });

      // Con no-cors no podemos leer la respuesta, asumimos éxito
      setStatus({
        type: "success",
        message: "¡Mensaje enviado! Te contactaremos pronto.",
      });
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        taller: "",
        mensaje: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Hubo un error. Por favor intenta de nuevo.",
      });
    }
  };

  const inputClasses = `
    w-full px-4 py-3 rounded-xl
    bg-white/80 backdrop-blur-sm
    border-2 border-purpura/20
    text-purpura placeholder:text-purpura/40
    focus:outline-none focus:border-naranja focus:ring-2 focus:ring-naranja/20
    transition-all duration-300
  `;

  const labelClasses = "block text-sm font-medium text-purpura mb-2";

  return (
    <form id={id} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className={labelClasses}>
            Nombre completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={inputClasses}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClasses}>
            Correo electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Teléfono */}
        <div>
          <label htmlFor="telefono" className={labelClasses}>
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+52 555 123 4567"
            className={inputClasses}
          />
        </div>

        {/* Taller */}
        <div>
          <label htmlFor="taller" className={labelClasses}>
            Taller de interés *
          </label>
          <select
            id="taller"
            name="taller"
            required
            value={formData.taller}
            onChange={handleChange}
            className={`${inputClasses} cursor-pointer`}
          >
            <option value="">Selecciona un taller</option>
            {WORKSHOPS.map((workshop) => (
              <option key={workshop.id} value={workshop.title}>
                {workshop.title}
              </option>
            ))}
            <option value="Otro">Otro / Información general</option>
          </select>
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className={labelClasses}>
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Cuéntanos qué te interesa saber o cualquier pregunta que tengas..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Status Message */}
      {status.type !== "idle" && (
        <div
          className={`p-4 rounded-xl text-center font-medium transition-all duration-300 ${
            status.type === "loading"
              ? "bg-cyan/20 text-purpura"
              : status.type === "success"
              ? "bg-verde/30 text-purpura"
              : "bg-naranja/30 text-purpura"
          }`}
        >
          {status.type === "loading" && (
            <span className="inline-block animate-pulse">⏳ </span>
          )}
          {status.type === "success" && <span>✓ </span>}
          {status.type === "error" && <span>⚠ </span>}
          {status.message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status.type === "loading"}
        className={`
          w-full py-4 px-8 rounded-xl
          bg-gradient-to-r from-naranja to-naranja/90
          text-purpura font-semibold text-lg
          shadow-lg shadow-naranja/30
          hover:shadow-xl hover:shadow-naranja/40
          hover:-translate-y-0.5
          focus:outline-none focus:ring-4 focus:ring-naranja/30
          transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
        `}
      >
        {status.type === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>

      <p className="text-center text-sm text-purpura/60">
        * Campos obligatorios
      </p>
    </form>
  );
}
