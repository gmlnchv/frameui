"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Dynamic import for Web Component
    import("@/registry/new-york/ui/frame-ui").then(() => {
      initVanillaLogic();
    });
  }, []);

  function initVanillaLogic() {
    const frame = document.getElementById("hero-frame") as any;
    const matButtons = document.querySelectorAll("[data-mat-size]");
    const glassToggle = document.getElementById("glass-toggle");
    const glassKnob = document.getElementById("glass-knob");

    if (!frame) return;

    matButtons.forEach((btnNode) => {
      const btn = btnNode as HTMLElement;
      btn.onclick = () => {
        const size = btn.getAttribute("data-mat-size");
        if (size) {
          frame.setAttribute("mat-size", size);
          matButtons.forEach((b) => {
            const el = b as HTMLElement;
            el.classList.remove("bg-white", "text-black");
            el.classList.add("bg-neutral-900", "text-neutral-400");
          });
          btn.classList.add("bg-white", "text-black");
          btn.classList.remove("bg-neutral-900", "text-neutral-400");
        }
      };
    });

    if (glassToggle && glassKnob) {
      glassToggle.onclick = () => {
        const isGlass = frame.hasAttribute("glass");
        if (isGlass) {
          frame.removeAttribute("glass");
          glassToggle.classList.replace("bg-white", "bg-neutral-800");
          glassKnob.classList.replace("translate-x-6", "translate-x-1");
        } else {
          frame.setAttribute("glass", "");
          glassToggle.classList.replace("bg-neutral-800", "bg-white");
          glassKnob.classList.replace("translate-x-1", "translate-x-6");
        }
      };
    }
  }

  if (!mounted) return <div className="min-h-screen bg-[#0a0a0a]" />;

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-serif text-neutral-300 selection:bg-white selection:text-black tracking-tight">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-start overflow-hidden border-b border-neutral-400/80">
        {/* Background Image with Dark Vignette */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: 'url("/museum_backdrop.png")' }}
        />

        {/* Demo Frame */}
        <div className="relative z-10 w-full max-w-[1700px] mx-auto px-10 lg:px-24 h-full flex items-center">
          <div className="w-full max-w-[380px] ml-[2%] lg:ml-[5%] xl:ml-[8%] 2xl:ml-[12%] flex justify-center">
            <frame-ui
              id="hero-frame"
              material="satin"
              mat-size="standard"
              glass=""
              className="shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
            >
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200"
                alt="Abstract Artwork"
                className="w-full max-w-[240px]"
              />
            </frame-ui>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-10 py-32 space-y-40">
        {/* Intro */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-neutral-900 pb-20">
          <div className="md:col-span-4">
            <h1 className="font-heading text-6xl text-white tracking-tight leading-none mt-2">
              Frame UI
            </h1>
          </div>
          <div className="md:col-span-6 md:col-start-6">
            <p className="text-2xl font-normal leading-relaxed text-neutral-300">
              A web component for adding photorealistic frames to images,
              artworks, and digital collections. Built with Lit to be
              framework-agnostic.
            </p>
          </div>
        </section>

        {/* Installation */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-neutral-900 pb-20">
          <div className="md:col-span-4">
            <h2 className="font-heading text-4xl text-white tracking-tight">
              Installation
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-6 space-y-8">
            <p className="text-lg text-neutral-400">
              Install the component using the shadcn CLI. This downloads the Web
              Component to your project.
            </p>
            <div className="bg-[#111] p-6 font-mono text-sm border border-neutral-800">
              <code className="text-neutral-400">
                npx shadcn@latest add "https://frameui.com/r/frame-ui.json"
              </code>
            </div>

            <p className="text-lg text-neutral-400">
              Then import it into your application and use it like a regular
              HTML element via the custom elements registry.
            </p>
            <div className="bg-[#111] text-neutral-400 p-6 font-mono text-sm leading-relaxed border border-neutral-800 overflow-x-auto">
              <pre>
                <code>{`import "@/components/ui/frame-ui";

export default function Page() {
  return (
    <frame-ui material="satin" mat-size="large" glass>
      <img src="/artwork.jpg" alt="Art" />
    </frame-ui>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="font-heading text-4xl text-white tracking-tight">
              Usage
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-6 space-y-16">
            <div className="space-y-6">
              <h3 className="font-sans font-bold text-white uppercase text-xs tracking-widest">
                Mat Size
              </h3>
              <p className="text-lg text-neutral-400">
                You can specify the size of the museum matting. The sizes range
                from "none" up to "xlarge". Click below to test the effect on
                the hero unit.
              </p>
              <div className="flex flex-wrap gap-2">
                {["none", "small", "standard", "large", "xlarge"].map((sz) => (
                  <button
                    key={sz}
                    data-mat-size={sz}
                    className={`px-4 py-2 font-sans font-medium text-xs tracking-wider uppercase transition-colors ${
                      sz === "standard"
                        ? "bg-white text-black"
                        : "bg-neutral-900 text-neutral-400 hover:text-white"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-sans font-bold text-white uppercase text-xs tracking-widest">
                Glass Simulation
              </h3>
              <p className="text-lg text-neutral-400">
                Provides a protective glass layer that simulates physical glare.
              </p>
              <div className="flex items-center justify-between p-4 bg-neutral-900 border border-neutral-800">
                <span className="font-sans font-medium text-xs uppercase tracking-wider text-neutral-300">
                  Glass Glare
                </span>
                <button
                  id="glass-toggle"
                  className="relative inline-flex h-6 w-12 items-center bg-white transition-all focus:outline-none"
                >
                  <span
                    id="glass-knob"
                    className="inline-block h-4 w-4 transform bg-black transition-transform translate-x-7"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-10 py-12 mt-20 border-t border-neutral-900">
        <p className="text-sm text-neutral-500">Georgy Malanichev — Frame UI</p>
      </footer>
    </div>
  );
}
