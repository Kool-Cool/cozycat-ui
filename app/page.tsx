"use client"; // Required for interactivity

import { useEffect, useState } from "react";

export default function ThemePage() {
  const [theme, setTheme] = useState("cupcake");

  // Update the document attribute whenever the state changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const themes = ["light", "dark", "cupcake", "bumblebee", "testTheme"];

  return (
    <div className="min-h-screen p-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header & Selector */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">DaisyUI Theme Tester</h1>
            <p className="opacity-70">Current Theme: <span className="badge badge-primary">{theme}</span></p>
          </div>

          <select 
            className="select select-bordered w-full max-w-xs"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            {themes.map((t) => (
              <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
            ))}
          </select>
        </div>

        <div className="divider">Preview Components</div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card Component */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card Component</h2>
              <p>This card automatically adapts its colors based on the theme.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
              </div>
            </div>
          </div>

          {/* Form Elements */}
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            <div className="flex gap-2">
              <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
              <input type="checkbox" defaultChecked className="checkbox checkbox-warning" />
              <input type="checkbox" defaultChecked className="checkbox checkbox-error" />
            </div>
            <progress className="progress progress-primary w-full" value="70" max="100"></progress>
          </div>

        </div>

        {/* Alert Component */}
        <div className="alert alert-info shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Tip: The `data-theme` attribute can be applied to any div, not just the html tag!</span>
          </div>
        </div>

      </div>


      <div className="space-y-6">
  <h2 className="text-2xl font-bold">Physical Property Test</h2>
  
  <div className="flex flex-wrap gap-4">
    {/* This button will use your --animation-btn and --btn-focus-scale */}
    <button className="btn btn-primary">Click Me (Animation Test)</button>
    
    {/* This will show your --border width */}
    <button className="btn btn-outline">Outline (Border Test)</button>
    
    {/* This will show your --radius-field */}
    <input type="text" className="input input-bordered" placeholder="Radius test" />
  </div>

  <div className="card w-96 bg-base-200 shadow-xl">
    <div className="card-body">
      <p className="text-sm">Small text following theme scale</p>
      <p className="text-xl">Large text following theme scale</p>
    </div>
  </div>
</div>
    </div>
  );
}