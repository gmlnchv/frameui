import "./style.css";
import "../registry/new-york/ui/frame-ui";

function init() {
  const pgFrame = document.getElementById("playground-frame") as HTMLElement;
  const matButtons = document.querySelectorAll("[data-mat-size]");
  const glassToggle = document.getElementById(
    "glass-toggle",
  ) as HTMLInputElement;

  if (!pgFrame) return;

  matButtons.forEach((btnNode) => {
    const btn = btnNode as HTMLElement;
    btn.onclick = () => {
      const size = btn.getAttribute("data-mat-size");
      if (size) {
        pgFrame.setAttribute("mat-size", size);

        matButtons.forEach((b) => {
          const el = b as HTMLElement;
          el.classList.remove(
            "border-neutral-800",
            "bg-neutral-800",
            "text-white",
          );
          el.classList.add(
            "border-neutral-300",
            "bg-neutral-100",
            "text-neutral-900",
          );
        });
        btn.classList.remove(
          "border-neutral-300",
          "bg-neutral-100",
          "text-neutral-900",
        );
        btn.classList.add("border-neutral-800", "bg-neutral-800", "text-white");
      }
    };
  });

  if (glassToggle) {
    glassToggle.onchange = () => {
      if (glassToggle.checked) {
        pgFrame.setAttribute("glass", "");
      } else {
        pgFrame.removeAttribute("glass");
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
