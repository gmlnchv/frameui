import "./style.css";
import "../registry/ui/frameui";

function init() {
  const pgFrame = document.getElementById("playground-frame") as HTMLElement;
  const matButtons = document.querySelectorAll("[data-mat-width]");
  const widthButtons = document.querySelectorAll("[data-frame-width]");
  const finishButtons = document.querySelectorAll("[data-finish]");
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
      const value = btn.getAttribute("data-mat-width");
      if (value) {
        pgFrame.setAttribute("mat-width", value);
        updateButtons(matButtons, "data-mat-width", value);
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

  finishButtons.forEach((btnNode) => {
    const btn = btnNode as HTMLElement;
    btn.onclick = () => {
      const value = btn.getAttribute("data-finish");
      if (value) {
        pgFrame.setAttribute("finish", value);
        updateButtons(finishButtons, "data-finish", value);
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

  // Registry switcher and copy logic
  const pmButtons = document.querySelectorAll(".pm-btn");
  const installCode = document.getElementById("install-command");
  const copyBtn = document.getElementById("copy-install");

  const registryUrl = "https://frameui.chrctr.dev/r/frameui.json";
  const commands: Record<string, string> = {
    pnpm: `pnpm dlx shadcn@latest add "${registryUrl}"`,
    npm: `npx shadcn@latest add "${registryUrl}"`,
    yarn: `npx shadcn@latest add "${registryUrl}"`,
    bun: `bunx shadcn@latest add "${registryUrl}"`,
  };

  pmButtons.forEach((btnNode) => {
    const btn = btnNode as HTMLElement;
    btn.onclick = () => {
      const pm = btn.getAttribute("data-pm");
      if (pm && installCode) {
        installCode.textContent = commands[pm];

        // Update button styles
        pmButtons.forEach((b) => {
          const el = b as HTMLElement;
          if (el === btn) {
            el.classList.remove("text-neutral-400");
            el.classList.add(
              "bg-white",
              "shadow-sm",
              "border-neutral-200",
              "text-neutral-900",
            );
          } else {
            el.classList.add("text-neutral-400");
            el.classList.remove(
              "bg-white",
              "shadow-sm",
              "border-neutral-200",
              "text-neutral-900",
            );
          }
        });
      }
    };
  });

  if (copyBtn && installCode) {
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(installCode.textContent || "");
      const originalSvg = copyBtn.innerHTML;
      copyBtn.innerHTML = `<svg class="w-3.5 h-3.5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>`;
      setTimeout(() => {
        copyBtn.innerHTML = originalSvg;
      }, 2000);
    };
  }
}

// Start logic when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
