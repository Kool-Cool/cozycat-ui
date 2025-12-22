"use client"; 

import { useState, useEffect } from "react";
import CatButton from "@/components/CatButton";
import CatCard from "@/components/CatCard";
import CatIcon from "@/components/CatIcon";

type CatTheme = "tuxedo" | "ginger" | "tabby" | "calico" | "blackcat";

export default function App() {
  const [theme, setTheme] = useState<CatTheme>("tuxedo");

  // Apply CSS variables to <body> whenever theme changes
  useEffect(() => {
    const root = document.documentElement;

    const themeColors: Record<CatTheme, { background: string; foreground: string; primary: string }> = {
      tuxedo: { background: "#f5f5f5", foreground: "#1a1a1a", primary: "#000000" },
      ginger: { background: "#fff3e0", foreground: "#4b2e05", primary: "#f97316" },
      tabby: { background: "#fff7e6", foreground: "#4a2e1e", primary: "#facc15" },
      calico: { background: "#fffaf0", foreground: "#663300", primary: "#f97316" },
      blackcat: { background: "#1a1a1a", foreground: "#f5f5f5", primary: "#000000" },
    };

    const colors = themeColors[theme];
    root.style.setProperty("--background", colors.background);
    root.style.setProperty("--foreground", colors.foreground);
    root.style.setProperty("--primary", colors.primary);
  }, [theme]);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Cat-Themed UI</h1>

      {/* Theme Buttons */}
      <div className="space-x-4">
        {(["tuxedo", "ginger", "tabby", "calico", "blackcat"] as CatTheme[]).map((cat) => (
          <CatButton key={cat} type={cat} onClick={() => setTheme(cat)}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </CatButton>
        ))}
      </div>

      {/* Example Card */}
      <CatCard type={theme} title={`${theme.charAt(0).toUpperCase() + theme.slice(1)} Card`}>
        This card changes color based on the selected cat theme.
      </CatCard>

      {/* Example Icons */}
      <div className="flex space-x-4 text-3xl">
        <CatIcon type="tuxedo" />
        <CatIcon type="ginger" />
        <CatIcon type="tabby" />
        <CatIcon type="calico" />
        <CatIcon type="blackcat" />
      </div>
    </div>
  );
}
