import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * FrameUI - A premium, hyper-realistic picture frame system.
 *
 * v2.3.1 Enhancements:
 * - Physical Assembly Seams: Tiny dark gaps at mitre joins for authentic construction look.
 * - Anisotropic Wood Highlights: Light reflects off grain fibers realistically.
 * - Museum Mat v2: Improved paper texture and physical thickness.
 * - Deep Shadow System: Refined multi-plane occlusion shadows.
 */
@customElement("frame-ui")
export class FrameUI extends LitElement {
  declare frameColor: string;
  declare frameWidth: string;
  declare matColor: string;
  declare matSize: string;
  declare material: string;
  declare glass: boolean;
  static styles = css`
    :host {
      display: inline-block;
      line-height: 0;
      --frame-color: #222;
      --frame-width: 30px;
      --mat-color: #ffffff;
      --mat-width: 56px;
      --glare-opacity: 0.15;
      --light-angle: 135deg;
      --mat-core: #ffffff;
      --join-gap: rgba(0, 0, 0, 0.4);
    }

    .frame-container {
      position: relative;
      display: inline-block;
      box-shadow:
        0 60px 120px -20px rgba(0, 0, 0, 0.6),
        0 30px 60px -30px rgba(0, 0, 0, 0.4);
      background: #000;
    }

    /* Planks structure for mitred corners */
    .plank {
      position: absolute;
      background-color: var(--frame-color);
      overflow: hidden;
      z-index: 2;
      box-sizing: border-box;
      /* The physical "seam" at the join */
      outline: 0.5px solid var(--join-gap);
    }

    /* Grain and Texture Layer */
    .plank::before {
      content: "";
      position: absolute;
      inset: -50%;
      pointer-events: none;
      z-index: 1;
    }

    /* Lighting and Sheen Layer */
    .plank::after {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 3;
    }

    .plank-top {
      top: 0;
      left: 0;
      right: 0;
      height: var(--frame-width);
      clip-path: polygon(
        0 0,
        100% 0,
        calc(100% - var(--frame-width)) 100%,
        var(--frame-width) 100%
      );
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.12) 0%,
        transparent 15%,
        rgba(0, 0, 0, 0.15) 100%
      );
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.15),
        inset 0 -1.5px 1.5px rgba(0, 0, 0, 0.4);
    }

    .plank-bottom {
      bottom: 0;
      left: 0;
      right: 0;
      height: var(--frame-width);
      clip-path: polygon(
        var(--frame-width) 0,
        calc(100% - var(--frame-width)) 0,
        100% 100%,
        0 100%
      );
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.2) 0%,
        transparent 20%,
        rgba(255, 255, 255, 0.08) 100%
      );
      box-shadow:
        inset 0 -1px 0 rgba(0, 0, 0, 0.4),
        inset 0 1.5px 1.5px rgba(255, 255, 255, 0.05);
    }

    .plank-left {
      top: 0;
      left: 0;
      bottom: 0;
      width: var(--frame-width);
      clip-path: polygon(
        0 0,
        100% var(--frame-width),
        100% calc(100% - var(--frame-width)),
        0 100%
      );
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.12) 0%,
        transparent 15%,
        rgba(0, 0, 0, 0.15) 100%
      );
      box-shadow:
        inset 1px 0 0 rgba(255, 255, 255, 0.15),
        inset -1.5px 0 1.5px rgba(0, 0, 0, 0.4);
    }

    .plank-right {
      top: 0;
      right: 0;
      bottom: 0;
      width: var(--frame-width);
      clip-path: polygon(
        0 var(--frame-width),
        100% 0,
        100% 100%,
        0 calc(100% - var(--frame-width))
      );
      background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.2) 0%,
        transparent 20%,
        rgba(255, 255, 255, 0.08) 100%
      );
      box-shadow:
        inset -1px 0 0 rgba(0, 0, 0, 0.4),
        inset 1.5px 0 1.5px rgba(255, 255, 255, 0.05);
    }

    /* --- SATIN (BLACK) --- */
    :host([material="satin"]) .plank,
    .plank {
      background-color: #121212;
    }
    .plank::before {
      background: radial-gradient(
        circle at 1px 1px,
        rgba(255, 255, 255, 0.05) 1px,
        transparent 1px
      );
      background-size: 5px 5px;
      opacity: 0.3;
    }
    .plank::after {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.08) 0%,
        transparent 50%,
        rgba(0, 0, 0, 0.1) 100%
      );
    }

    /* --- MUSEUM MATTING --- */
    .mat-container {
      position: relative;
      margin: var(--frame-width);
      padding: var(--mat-width);
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #0c0c0c; /* Backing board visible at edges */
      line-height: 0;
      isolation: isolate;
    }

    /* The Mat Overlay (Cardboard with cutout) */
    .mat-overlay {
      position: absolute;
      inset: 0;
      z-index: 10;
      pointer-events: none;
      background-color: var(--mat-color);
      background-image:
        url("https://www.transparenttextures.com/patterns/white-paper.png"),
        radial-gradient(
          circle at 35% 35%,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0.4) 100%
        );

      /* The donut hole clip-path (Outer CW, Inner CCW for hole transparency) */
      clip-path: polygon(
        /* Outer bounds (Clockwise) */ 0% 0%,
        100% 0%,
        100% 100%,
        0% 100%,
        0% 0%,
        /* Inner hole (Counter-Clockwise) */ var(--mat-width) var(--mat-width),
        var(--mat-width) calc(100% - var(--mat-width)),
        calc(100% - var(--mat-width)) calc(100% - var(--mat-width)),
        calc(100% - var(--mat-width)) var(--mat-width),
        var(--mat-width) var(--mat-width)
      );
    }

    /* HEAVY Physical depth: Light and Shadow cast from Frame onto Mat surface */
    .mat-overlay::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 11; /* Ensure shadow is on top of the mat background */
      pointer-events: none;
      /* Physically accurate deep inner shadows (Top and Right) */
      box-shadow:
        inset -20px 20px 20px rgba(0, 0, 0, 0.15),
        /* The deep Top/Right shadow well */ inset -6px 6px 14px
          rgba(0, 0, 0, 0.5),
        /* Sharp core occlusion edge */ inset 8px -8px 20px
          rgba(255, 255, 255, 0.6); /* Bounce light on bottom/left */
    }

    .mat-bevel-system {
      position: absolute;
      inset: var(--mat-width);
      pointer-events: none;
      z-index: 15;
      /* Depth of the cut (1.5mm board thickness) */
      --bevel-depth: 4px;
      /* Removed detached drop-shadow to fix floating look */
    }

    .bevel-panel {
      position: absolute;
      background-color: var(--mat-core);
      box-sizing: border-box;
      /* The razor-sharp edge where the mat board surface meets the core */
      border: 0.2px solid rgba(0, 0, 0, 0.05);
    }

    .bevel-top {
      top: 0;
      left: 0;
      right: 0;
      height: var(--bevel-depth);
      clip-path: polygon(
        0 0,
        100% 0,
        calc(100% - var(--bevel-depth)) 100%,
        var(--bevel-depth) 100%
      );
      background: linear-gradient(to bottom, #f2f2f2, #d5d5d5);
    }

    .bevel-bottom {
      bottom: 0;
      left: 0;
      right: 0;
      height: var(--bevel-depth);
      clip-path: polygon(
        var(--bevel-depth) 0,
        calc(100% - var(--bevel-depth)) 0,
        100% 100%,
        0% 100%
      );
      background: linear-gradient(to top, #ffffff, #f0f0f0);
    }

    .bevel-left {
      top: 0;
      left: 0;
      bottom: 0;
      width: var(--bevel-depth);
      clip-path: polygon(
        0 0,
        100% var(--bevel-depth),
        100% calc(100% - var(--bevel-depth)),
        0% 100%
      );
      background: linear-gradient(to right, #e8e8e8, #cccccc);
    }

    .bevel-right {
      top: 0;
      right: 0;
      bottom: 0;
      width: var(--bevel-depth);
      clip-path: polygon(
        0 var(--bevel-depth),
        100% 0,
        100% 100%,
        0 calc(100% - var(--bevel-depth))
      );
      background: linear-gradient(to left, #ffffff, #fcfcfc);
    }

    /* Artwork Layer Well */
    .content-area {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      background-color: #f5f5f5;
      width: 100%;
      height: 100%;
      /* Corrected the depth shadow logic: Art is BEHIND the hole */
      box-shadow:
        inset -6px 6px 12px rgba(0, 0, 0, 0.22),
        /* Deep shadow on Top/Right wall of the well */ inset 1px -1px 3px
          rgba(255, 255, 255, 0.9);
    }

    /* Glass Glazing */
    .glass {
      position: absolute;
      inset: 0;
      z-index: 60;
      pointer-events: none;
      display: none;
      background:
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 45%,
          rgba(255, 255, 255, var(--glare-opacity)) 49.5%,
          rgba(255, 255, 255, var(--glare-opacity)) 50.5%,
          rgba(255, 255, 255, 0) 55%
        ),
        radial-gradient(
          circle at 10% 10%,
          rgba(255, 255, 255, 0.12) 0%,
          transparent 45%
        );
      mix-blend-mode: screen;
    }

    :host([glass]) .glass {
      display: block;
    }

    /* Mat-less mode */
    :host([mat-size="none"]) .mat-overlay,
    :host([mat-size="none"]) .mat-bevel-system {
      display: none;
    }
    :host([mat-size="none"]) .mat-container {
      padding: 0;
    }

    ::slotted(*) {
      display: block;
      max-width: 100%;
      height: auto;
      filter: contrast(1.02) saturate(1.02) brightness(0.96);
      transform: scale(1.001);
    }
  `;

  static properties = {
    frameColor: { type: String },
    frameWidth: { type: String },
    matColor: { type: String },
    matSize: { type: String, attribute: "mat-size" },
    material: { type: String, reflect: true },
    glass: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.frameColor = "#222";
    this.frameWidth = "30px";
    this.matColor = "#ffffff";
    this.matSize = "standard";
    this.material = "satin";
    this.glass = false;
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("frameColor")) {
      this.style.setProperty("--frame-color", this.frameColor);
    }
    if (changedProperties.has("frameWidth")) {
      this.style.setProperty("--frame-width", this.frameWidth);
    }
    if (changedProperties.has("matColor")) {
      this.style.setProperty("--mat-color", this.matColor);
    }
    if (changedProperties.has("matSize")) {
      const sizes: Record<string, string> = {
        none: "0px",
        small: "28px",
        standard: "56px",
        large: "112px",
        xlarge: "168px",
      };
      this.style.setProperty("--mat-width", sizes[this.matSize] || "56px");
    }
  }

  render() {
    return html`
      <div class="frame-container">
        <!-- Physical Planks (Frame Assembly) -->
        <div class="plank plank-top"></div>
        <div class="plank plank-right"></div>
        <div class="plank plank-bottom"></div>
        <div class="plank plank-left"></div>

        <!-- The Internal Component Stack -->
        <div class="mat-container">
          <!-- 1. Artwork (Recessed at the bottom) -->
          <div class="artwork-area content-area">
            <slot></slot>
          </div>

          <!-- 2. Mat Overlay (The Cardboard Board) -->
          <div class="mat-overlay"></div>

          <!-- 3. Bevel System (The white core sitting ON the hole edge) -->
          <div class="mat-bevel-system">
            <div class="bevel-panel bevel-top"></div>
            <div class="bevel-panel bevel-right"></div>
            <div class="bevel-panel bevel-bottom"></div>
            <div class="bevel-panel bevel-left"></div>
          </div>

          <!-- 4. Glass Cover (Top-most interior layer) -->
          <div class="glass"></div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "frame-ui": FrameUI;
  }
}
