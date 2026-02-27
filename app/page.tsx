"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Dynamic import to ensure it only runs on client
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
          matButtons.forEach((b) =>
            b.classList.remove(
              "bg-neutral-900",
              "text-white",
              "shadow-2xl",
              "scale-105",
              "border-neutral-900",
            ),
          );
          matButtons.forEach((b) =>
            b.classList.add(
              "bg-transparent",
              "text-neutral-400",
              "border-neutral-100",
            ),
          );
          btn.classList.add(
            "bg-neutral-900",
            "text-white",
            "shadow-2xl",
            "scale-105",
            "border-neutral-900",
          );
          btn.classList.remove(
            "bg-transparent",
            "text-neutral-400",
            "border-neutral-100",
          );
        }
      };
    });

    if (glassToggle && glassKnob) {
      glassToggle.onclick = () => {
        const isGlass = frame.hasAttribute("glass");
        if (isGlass) {
          frame.removeAttribute("glass");
          glassToggle.classList.replace("bg-neutral-900", "bg-neutral-200");
          glassKnob.classList.replace("translate-x-8", "translate-x-1");
        } else {
          frame.setAttribute("glass", "");
          glassToggle.classList.replace("bg-neutral-200", "bg-neutral-900");
          glassKnob.classList.replace("translate-x-1", "translate-x-8");
        }
      };
    }
  }

  // Prevent flash by having a very basic SSR skeleton or nothing
  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 pb-24">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[750px] flex items-center justify-start overflow-hidden bg-black shadow-2xl">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-[1.02]"
          style={{ backgroundImage: 'url("/museum_backdrop.png")' }}
        >
          <div className="absolute inset-0 bg-black/5"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1700px] mx-auto px-10 lg:px-24 h-full flex items-center">
          <div className="w-full max-w-[520px] lg:ml-[2%] xl:ml-[5%]">
            <div className="flex justify-center items-center rounded-sm perspective-1000">
              <frame-ui
                id="hero-frame"
                material="satin"
                mat-size="standard"
                glass=""
                className="shadow-[0_50px_120px_rgba(0,0,0,0.6)] transition-all duration-700 transform -rotate-1 hover:rotate-0 hover:scale-[1.04] origin-center"
              >
                <img
                  src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200"
                  alt="Abstract Artwork"
                  className="w-full max-w-[440px]"
                />
              </frame-ui>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 z-20 flex flex-col items-end opacity-30 select-none text-white uppercase">
          <div className="font-black tracking-[0.6em] text-[10px]">
            Frame UI
          </div>
          <div className="text-[8px] font-bold">Museum Artifact v2.0</div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-10 mt-24 space-y-32">
        <section className="space-y-20">
          <header className="space-y-10 text-center">
            <h1 className="text-7xl font-black tracking-tighter text-neutral-900 leading-none uppercase">
              Frame <span className="text-neutral-200">System</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-medium leading-relaxed italic">
              "Photorealistic framing that honors the art within."
            </p>
          </header>

          <div className="bg-white p-14 rounded-[4rem] shadow-[0_60px_150px_rgba(0,0,0,0.04)] border border-neutral-100/60 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="space-y-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-300 block text-left">
                    Collection Parameters
                  </label>
                  <h3 className="text-2xl font-black text-neutral-900 text-left">
                    Museum Matting
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["none", "small", "standard", "large", "xlarge"].map(
                    (sz) => (
                      <button
                        key={sz}
                        data-mat-size={sz}
                        className={`px-8 py-5 rounded-[1.25rem] text-[11px] font-black tracking-widest transition-all capitalize border-2 ${
                          sz === "standard"
                            ? "bg-neutral-900 border-neutral-900 text-white shadow-2xl scale-105"
                            : "bg-transparent border-neutral-100 text-neutral-400 hover:border-neutral-200"
                        }`}
                      >
                        {sz}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div className="space-y-10 md:border-l border-neutral-100 md:pl-20 pt-10 md:pt-0">
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-300 block">
                    Optical Grade
                  </label>
                  <h3 className="text-2xl font-black text-neutral-900">
                    Glass Simulation
                  </h3>
                </div>
                <div className="flex items-center justify-between p-8 bg-neutral-50/70 rounded-[2rem] border border-neutral-100/80 group">
                  <div className="space-y-1 text-left">
                    <span className="font-black text-neutral-900 block text-xs tracking-wider uppercase">
                      Anti-Reflective
                    </span>
                    <span className="text-[11px] text-neutral-400 font-bold tracking-tight">
                      Neutralize physical glare
                    </span>
                  </div>
                  <button
                    id="glass-toggle"
                    className="relative inline-flex h-9 w-16 items-center rounded-full transition-all focus:outline-none bg-neutral-900 shadow-2xl"
                  >
                    <span
                      id="glass-knob"
                      className="inline-block h-7 w-7 transform rounded-full bg-white shadow-xl transition-transform translate-x-8"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-20">
          <div className="flex items-center gap-10">
            <h2 className="text-[11px] font-black text-neutral-300 tracking-[0.5em] uppercase whitespace-nowrap">
              Deployment
            </h2>
            <div className="h-px flex-1 bg-neutral-100" />
            <div className="text-[10px] font-black text-neutral-200 tracking-widest uppercase">
              v2.3 stable
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12">
            <div className="bg-white p-12 rounded-[4rem] shadow-[0_30px_80px_rgba(0,0,0,0.02)] border border-neutral-50 space-y-10">
              <div className="flex items-start gap-8">
                <span className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-[1.5rem] bg-neutral-900 text-white font-black text-xl shadow-2xl uppercase">
                  01
                </span>
                <div className="space-y-8 flex-1 text-left">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black tracking-tight">
                      Initialization
                    </h3>
                    <p className="text-neutral-400 font-bold text-sm tracking-tight text-left">
                      Deploy via shadcn/ui command interface.
                    </p>
                  </div>
                  <div className="bg-neutral-900 text-neutral-100 p-7 rounded-[1.5rem] font-mono text-sm shadow-2xl flex justify-between items-center group relative overflow-hidden border border-white/5">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600/40" />
                    <code className="relative z-10">
                      npx shadcn@latest add
                      "https://frameui.com/r/frame-ui.json"
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[4rem] shadow-[0_30px_80px_rgba(0,0,0,0.02)] border border-neutral-50 space-y-10">
              <div className="flex items-start gap-8 text-left">
                <span className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-[1.5rem] bg-neutral-900 text-white font-black text-xl shadow-2xl">
                  02
                </span>
                <div className="space-y-8 flex-1">
                  <div className="space-y-2 text-left">
                    <h3 className="text-3xl font-black tracking-tight">
                      Implementation
                    </h3>
                    <p className="text-neutral-400 font-bold text-sm tracking-tight">
                      Integrate the component into your composition.
                    </p>
                  </div>
                  <div className="bg-neutral-900 text-neutral-100 p-10 rounded-[2rem] font-mono text-[13px] leading-relaxed overflow-x-auto shadow-2xl border border-white/5">
                    <pre>
                      <code>{`import "@/components/ui/frame-ui";

export default function Gallery() {
  return (
    <frame-ui material="satin" mat-size="large" glass={true}>
      <img src="/artwork.jpg" alt="Artwork" className="w-[600px] grayscale" />
    </frame-ui>
  );
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="pt-32 pb-16 border-t border-neutral-100 flex flex-col items-center gap-10">
          <div className="text-neutral-200 font-black tracking-[0.8em] text-[10px] uppercase">
            Architecture • Precision • Pixels
          </div>
          <div className="flex gap-12">
            <span className="text-[10px] font-black text-neutral-300 uppercase tracking-widest">
              Whitney
            </span>
            <span className="text-[10px] font-black text-neutral-300 uppercase tracking-widest">
              MoMA
            </span>
            <span className="text-[10px] font-black text-neutral-300 uppercase tracking-widest">
              LACMA
            </span>
          </div>
          <p className="text-center text-neutral-300 text-[10px] font-bold uppercase tracking-[0.2em] pt-8">
            Designed for high-density luxury.
          </p>
        </footer>
      </main>
    </div>
  );
}
