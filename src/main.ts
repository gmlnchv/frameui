import "./style.css";
// Import the web component
import "../registry/new-york/ui/frame-ui";

function init() {
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
        glassKnob.classList.replace("translate-x-7", "translate-x-1");
      } else {
        frame.setAttribute("glass", "");
        glassToggle.classList.replace("bg-neutral-800", "bg-white");
        glassKnob.classList.replace("translate-x-1", "translate-x-7");
      }
    };
  }
}

// Start logic when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
