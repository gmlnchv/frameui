import "./style.css";
// Import the web component
import "../registry/new-york/ui/frame-ui";

function init() {
  const pgFrame = document.getElementById("playground-frame") as any;
  const matButtons = document.querySelectorAll("[data-mat-size]");
  const glassToggle = document.getElementById("glass-toggle");
  const glassState = document.getElementById("glass-state");
  const matSizeVal = document.getElementById("mat-size-val");

  if (!pgFrame) return;

  matButtons.forEach((btnNode) => {
    const btn = btnNode as HTMLElement;
    btn.onclick = () => {
      const size = btn.getAttribute("data-mat-size");
      if (size) {
        pgFrame.setAttribute("mat-size", size);
        if (matSizeVal) matSizeVal.innerText = size;

        matButtons.forEach((b) => {
          const el = b as HTMLElement;
          el.classList.remove("border-white", "bg-white", "text-black");
          el.classList.add("border-neutral-800");
        });
        btn.classList.remove("border-neutral-800");
        btn.classList.add("border-white", "bg-white", "text-black");
      }
    };
  });

  if (glassToggle) {
    glassToggle.onclick = () => {
      const isGlass = pgFrame.hasAttribute("glass");
      if (isGlass) {
        pgFrame.removeAttribute("glass");
        glassToggle.innerText = "Enable Glass Layer";
        if (glassState) {
          glassState.innerText = "Disabled";
          glassState.classList.remove("text-green-500");
          glassState.classList.add("text-red-500");
        }
      } else {
        pgFrame.setAttribute("glass", "");
        glassToggle.innerText = "Disable Glass Layer";
        if (glassState) {
          glassState.innerText = "Active";
          glassState.classList.remove("text-red-500");
          glassState.classList.add("text-green-500");
        }
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
