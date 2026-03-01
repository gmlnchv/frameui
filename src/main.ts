import "./style.css";
import "../registry/new-york/ui/frame-ui";

function init() {
  const pgFrame = document.getElementById("playground-frame") as HTMLElement;
  const matButtons = document.querySelectorAll("[data-mat-size]");
  const glassToggle = document.getElementById("glass-toggle") as HTMLElement;

  if (!pgFrame) return;

  const setActiveMat = (selectedBtn: HTMLElement) => {
    matButtons.forEach((b) => {
      const el = b as HTMLElement;
      el.classList.remove(
        "bg-neutral-900",
        "text-white",
        "border-neutral-900",
        "shadow-lg",
      );
      el.classList.add(
        "bg-transparent",
        "text-neutral-900",
        "border-neutral-300",
      );
    });
    selectedBtn.classList.remove(
      "bg-transparent",
      "text-neutral-900",
      "border-neutral-300",
    );
    selectedBtn.classList.add(
      "bg-neutral-900",
      "text-white",
      "border-neutral-900",
      "shadow-lg",
    );
  };

  matButtons.forEach((btnNode) => {
    const btn = btnNode as HTMLElement;
    btn.onclick = () => {
      const size = btn.getAttribute("data-mat-size");
      if (size) {
        pgFrame.setAttribute("mat-size", size);
        setActiveMat(btn);
      }
    };
  });

  if (glassToggle) {
    glassToggle.onclick = () => {
      const isGlass = pgFrame.hasAttribute("glass");
      if (isGlass) {
        pgFrame.removeAttribute("glass");
        glassToggle.classList.remove(
          "bg-neutral-900",
          "text-white",
          "border-neutral-900",
          "shadow-lg",
        );
        glassToggle.classList.add(
          "bg-transparent",
          "text-neutral-900",
          "border-neutral-300",
        );
      } else {
        pgFrame.setAttribute("glass", "");
        glassToggle.classList.remove(
          "bg-transparent",
          "text-neutral-900",
          "border-neutral-300",
        );
        glassToggle.classList.add(
          "bg-neutral-900",
          "text-white",
          "border-neutral-900",
          "shadow-lg",
        );
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
