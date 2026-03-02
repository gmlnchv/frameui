import "./style.css";
import "../registry/new-york/ui/frame-ui";

function init() {
  const pgFrame = document.getElementById("playground-frame") as HTMLElement;
  const matButtons = document.querySelectorAll("[data-mat-size]");
  const widthButtons = document.querySelectorAll("[data-frame-width]");
  const materialButtons = document.querySelectorAll("[data-material]");
  const glassToggle = document.getElementById("glass-toggle") as HTMLElement;

  if (!pgFrame) return;

  const updateButtons = (
    buttons: NodeListOf<Element>,
    activeAttr: string,
    value: string,
  ) => {
    buttons.forEach((b) => {
      const el = b as HTMLElement;
      const isMatch = el.getAttribute(activeAttr) === value;

      if (isMatch) {
        el.classList.remove(
          "bg-transparent",
          "text-neutral-900",
          "border-neutral-300",
        );
        el.classList.add(
          "bg-neutral-900",
          "text-white",
          "border-neutral-900",
          "shadow-lg",
        );
      } else {
        el.classList.add(
          "bg-transparent",
          "text-neutral-900",
          "border-neutral-300",
        );
        el.classList.remove(
          "bg-neutral-900",
          "text-white",
          "border-neutral-900",
          "shadow-lg",
        );
      }
    });
  };

  matButtons.forEach((btnNode) => {
    const btn = btnNode as HTMLElement;
    btn.onclick = () => {
      const value = btn.getAttribute("data-mat-size");
      if (value) {
        pgFrame.setAttribute("mat-size", value);
        updateButtons(matButtons, "data-mat-size", value);
      }
    };
  });

  widthButtons.forEach((btnNode) => {
    const btn = btnNode as HTMLElement;
    btn.onclick = () => {
      const value = btn.getAttribute("data-frame-width");
      if (value) {
        pgFrame.setAttribute("frame-width", value);
        updateButtons(widthButtons, "data-frame-width", value);
      }
    };
  });

  materialButtons.forEach((btnNode) => {
    const btn = btnNode as HTMLElement;
    btn.onclick = () => {
      const value = btn.getAttribute("data-material");
      if (value) {
        pgFrame.setAttribute("material", value);
        updateButtons(materialButtons, "data-material", value);
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
