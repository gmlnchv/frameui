"use client";

import React, { useState } from "react";
import "@/registry/new-york/ui/frame-ui"; // Import the web component

interface StyleOption {
  label: string;
  color: string;
  material: string;
}

export default function FrameUIDemo() {
  const [currentStyle, setCurrentStyle] = useState<StyleOption>({
    label: "Black",
    color: "#1a1a1a",
    material: "satin",
  });
  const [matSize, setMatSize] = useState<
    "none" | "small" | "standard" | "large" | "xlarge"
  >("standard");
  const [glass, setGlass] = useState(true);

  const styleOptions: StyleOption[] = [
    { label: "Satin Black", color: "#1a1a1a", material: "satin" },
    { label: "Oak Wood", color: "#8B5E3C", material: "oak" },
    { label: "Antique Gold", color: "#BF953F", material: "metal" },
    { label: "Brushed Silver", color: "#A0A0A0", material: "metal" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans text-neutral-900">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="space-y-4 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Frame UI <span className="text-neutral-400">v2.0</span>
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
            Experience photographic realism with mitred corners, physical
            materials, and organic reflections.
          </p>
        </header>

        <main className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          {/* Preview Area */}
          <div className="xl:col-span-7 flex justify-center items-center bg-white rounded-[2.5rem] p-8 md:p-20 shadow-[0_0_100px_rgba(0,0,0,0.05)] border border-neutral-100 aspect-square overflow-hidden">
            <frame-ui
              frameColor={currentStyle.color}
              material={currentStyle.material}
              mat-size={matSize}
              glass={glass ? true : undefined}
            >
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200"
                alt="Tactile Artwork"
                className="w-full max-w-[500px] shadow-2xl"
              />
            </frame-ui>
          </div>

          {/* Controls */}
          <section className="xl:col-span-5 bg-white p-10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-neutral-50 space-y-10">
            <div className="space-y-6">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                Frame Material & Finish
              </label>
              <div className="grid grid-cols-2 gap-4">
                {styleOptions.map((style) => (
                  <button
                    key={style.label}
                    onClick={() => setCurrentStyle(style)}
                    className={`group relative flex items-center gap-3 p-4 rounded-2xl border-2 transition-all text-left ${
                      currentStyle.label === style.label
                        ? "border-neutral-900 bg-neutral-900 text-white shadow-xl scale-[1.02]"
                        : "border-neutral-100 bg-neutral-50 text-neutral-600 hover:border-neutral-200"
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-full border border-black/10 shadow-inner"
                      style={{ backgroundColor: style.color }}
                    />
                    <span className="text-sm font-bold tracking-tight">
                      {style.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                Matting (Borders)
              </label>
              <div className="flex flex-wrap gap-3">
                {["none", "small", "standard", "large", "xlarge"].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setMatSize(sz as any)}
                    className={`px-6 py-3 rounded-xl text-sm font-bold transition-all capitalize ${
                      matSize === sz
                        ? "bg-neutral-900 text-white shadow-lg"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100">
              <div className="flex items-center justify-between p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
                <div className="space-y-1">
                  <span className="font-bold text-neutral-900 block">
                    Anti-Reflective Glass
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">
                    Simulate museum-grade physical reflections
                  </span>
                </div>
                <button
                  onClick={() => setGlass(!glass)}
                  className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none ${
                    glass ? "bg-neutral-900" : "bg-neutral-300"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                      glass ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </section>
        </main>

        <section className="space-y-10">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
              Physical Collections
            </h2>
            <div className="h-px flex-1 bg-neutral-100" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6 group">
              <div className="bg-neutral-100 rounded-3xl p-10 flex justify-center items-center overflow-hidden transition-transform group-hover:scale-[1.02]">
                <frame-ui
                  material="metal"
                  frameColor="#BF953F"
                  mat-size="large"
                  glass
                >
                  <img
                    src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=400"
                    className="w-full grayscale brightness-90 shadow-2xl"
                  />
                </frame-ui>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg">The Gallery Collection</h3>
                <p className="text-sm text-neutral-400 font-medium">
                  Antique Gold • Museum Mat • Protected Glass
                </p>
              </div>
            </div>

            <div className="space-y-6 group">
              <div className="bg-neutral-100 rounded-3xl p-10 flex justify-center items-center overflow-hidden transition-transform group-hover:scale-[1.02]">
                <frame-ui material="oak" frameColor="#8B5E3C" mat-size="small">
                  <img
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=400"
                    className="w-full shadow-2xl"
                  />
                </frame-ui>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg">The Artisan Series</h3>
                <p className="text-sm text-neutral-400 font-medium">
                  Natural Oak • Tight Crop • No Refraction
                </p>
              </div>
            </div>

            <div className="space-y-6 group">
              <div className="bg-neutral-100 rounded-3xl p-10 flex justify-center items-center overflow-hidden transition-transform group-hover:scale-[1.02]">
                <frame-ui
                  material="metal"
                  frameColor="#A0A0A0"
                  mat-size="none"
                  glass
                >
                  <img
                    src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=400"
                    className="w-full shadow-2xl"
                  />
                </frame-ui>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg">Modern Minimalist</h3>
                <p className="text-sm text-neutral-400 font-medium">
                  Brushed Silver • Edge-to-Edge • Reflective
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
