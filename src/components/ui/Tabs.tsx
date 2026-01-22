"use client";

import { useState, ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  children: (activeTab: string) => ReactNode;
  defaultTab?: string;
}

export function Tabs({ tabs, children, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div>
      <div
        className="flex flex-col sm:flex-row gap-2 sm:gap-1 p-1 bg-purpura/5 rounded-full mb-8 max-w-md mx-auto"
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-naranja text-purpura shadow-md"
                : "text-purpura/70 hover:text-purpura hover:bg-purpura/5"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="transition-opacity duration-150">
        {children(activeTab)}
      </div>
    </div>
  );
}
