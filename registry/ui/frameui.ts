import { LitElement, html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * FuiGlass - Glass Glazing Component
 */
@customElement("fui-glass")
export class FuiGlass extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: absolute;
      inset: 0;
      z-index: 60;
      pointer-events: none;
      background:
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 45%,
          rgba(255, 255, 255, var(--fui-glare-opacity, 0.15)) 49.5%,
          rgba(255, 255, 255, var(--fui-glare-opacity, 0.15)) 50.5%,
          rgba(255, 255, 255, 0) 55%
        ),
        radial-gradient(
          circle at 10% 10%,
          rgba(255, 255, 255, 0.12) 0%,
          transparent 45%
        );
      mix-blend-mode: screen;
    }
  `;

  render() {
    return html``;
  }
}

/**
 * FuiMat - Museum Matting Component
 */
@customElement("fui-mat")
export class FuiMat extends LitElement {
  @property({ type: String }) size = "md";
  @property({ type: String }) color = "#ffffff";

  static styles = css`
    :host {
      display: contents;

      --fui-mat-width-xs: 14px;
      --fui-mat-width-sm: 28px;
      --fui-mat-width-md: 56px;
      --fui-mat-width-lg: 112px;
      --fui-mat-width-xl: 168px;
      --fui-mat-width-none: 0px;

      --fui-mat-core: #ffffff;
    }

    .mat-container {
      position: relative;
      margin: var(--fui-frame-w, 30px);
      padding: var(--fui-mat-width-resolved, 56px);
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #0c0c0c;
      line-height: 0;
      isolation: isolate;
    }

    [data-size="xs"] {
      --fui-mat-width-resolved: var(--fui-mat-width-xs);
    }
    [data-size="sm"] {
      --fui-mat-width-resolved: var(--fui-mat-width-sm);
    }
    [data-size="md"] {
      --fui-mat-width-resolved: var(--fui-mat-width-md);
    }
    [data-size="lg"] {
      --fui-mat-width-resolved: var(--fui-mat-width-lg);
    }
    [data-size="xl"] {
      --fui-mat-width-resolved: var(--fui-mat-width-xl);
    }
    [data-size="none"] {
      --fui-mat-width-resolved: var(--fui-mat-width-none);
    }

    .mat-overlay {
      position: absolute;
      inset: 0;
      z-index: 10;
      pointer-events: none;
      background-color: var(--fui-mat-color, #ffffff);
      background-image:
        url("https://www.transparenttextures.com/patterns/white-paper.png"),
        radial-gradient(
          circle at 35% 35%,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0.4) 100%
        );
      clip-path: polygon(
        0% 0%,
        100% 0%,
        100% 100%,
        0% 100%,
        0% 0%,
        var(--fui-mat-width-resolved) var(--fui-mat-width-resolved),
        var(--fui-mat-width-resolved) calc(100% - var(--fui-mat-width-resolved)),
        calc(100% - var(--fui-mat-width-resolved))
          calc(100% - var(--fui-mat-width-resolved)),
        calc(100% - var(--fui-mat-width-resolved)) var(--fui-mat-width-resolved),
        var(--fui-mat-width-resolved) var(--fui-mat-width-resolved)
      );
    }

    .mat-overlay::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 11;
      pointer-events: none;
      box-shadow:
        inset -20px 20px 20px rgba(0, 0, 0, 0.15),
        inset -6px 6px 14px rgba(0, 0, 0, 0.5),
        inset 8px -8px 20px rgba(255, 255, 255, 0.6);
    }

    .mat-bevel-system {
      position: absolute;
      inset: var(--fui-mat-width-resolved);
      pointer-events: none;
      z-index: 15;
      --bevel-depth: 4px;
    }

    .bevel-panel {
      position: absolute;
      background-color: var(--fui-mat-core);
      box-sizing: border-box;
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
      box-shadow:
        inset -6px 6px 12px rgba(0, 0, 0, 0.22),
        inset 1px -1px 3px rgba(255, 255, 255, 0.9);
    }

    [data-size="none"] .mat-overlay,
    [data-size="none"] .mat-bevel-system {
      display: none;
    }

    [data-size="none"] {
      padding: 0;
    }
  `;

  render() {
    return html`
      <div
        class="mat-container"
        data-size=${this.size}
        style="--fui-mat-color: ${this.color};"
      >
        <div class="content-area">
          <slot></slot>
        </div>
        <div class="mat-overlay"></div>
        <div class="mat-bevel-system">
          <div class="bevel-panel bevel-top"></div>
          <div class="bevel-panel bevel-right"></div>
          <div class="bevel-panel bevel-bottom"></div>
          <div class="bevel-panel bevel-left"></div>
        </div>
        <slot name="glazing"></slot>
      </div>
    `;
  }
}

/**
 * FuiFrame - The Outer Frame Chassis
 */
@customElement("fui-frame")
export class FuiFrame extends LitElement {
  @property({ type: String }) color = "#222";
  @property({ type: String }) width = "md";
  @property({ type: String }) material = "satin";

  static styles = css`
    :host {
      display: inline-block;
      line-height: 0;

      --fui-join-gap: rgba(0, 0, 0, 0.4);
    }

    .frame-container {
      position: relative;
      display: inline-block;
      box-shadow:
        0 60px 120px -20px rgba(0, 0, 0, 0.6),
        0 30px 60px -30px rgba(0, 0, 0, 0.4);
      background: #000;
    }

    .plank {
      position: absolute;
      background-color: var(--fui-frame-color, #222);
      overflow: hidden;
      z-index: 2;
      box-sizing: border-box;
      outline: 0.5px solid var(--fui-join-gap);
    }

    .plank::before {
      content: "";
      position: absolute;
      inset: -50%;
      pointer-events: none;
      z-index: 1;
    }

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
      height: var(--fui-frame-w);
      clip-path: polygon(
        0 0,
        100% 0,
        calc(100% - var(--fui-frame-w)) 100%,
        var(--fui-frame-w) 100%
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
      height: var(--fui-frame-w);
      clip-path: polygon(
        var(--fui-frame-w) 0,
        calc(100% - var(--fui-frame-w)) 0,
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
      width: var(--fui-frame-w);
      clip-path: polygon(
        0 0,
        100% var(--fui-frame-w),
        100% calc(100% - var(--fui-frame-w)),
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
      width: var(--fui-frame-w);
      clip-path: polygon(
        0 var(--fui-frame-w),
        100% 0,
        100% 100%,
        0 calc(100% - var(--fui-frame-w))
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

    /* --- SATIN BLACK --- */
    [data-material="satin"] .plank {
      background-color: #121212;
    }
    [data-material="satin"] .plank::before {
      background: radial-gradient(
        circle at 1px 1px,
        rgba(255, 255, 255, 0.05) 1px,
        transparent 1px
      );
      background-size: 5px 5px;
      opacity: 0.3;
    }
    [data-material="satin"] .plank::after {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.08) 0%,
        transparent 50%,
        rgba(0, 0, 0, 0.1) 100%
      );
    }

    /* --- WHITE --- */
    [data-material="white"] .plank {
      background-color: #fafafa;
    }
    [data-material="white"] .plank::before {
      background: radial-gradient(
        circle at 1px 1px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px
      );
      background-size: 5px 5px;
      opacity: 0.5;
    }
    [data-material="white"] .plank-top {
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.6) 0%,
        transparent 20%,
        rgba(0, 0, 0, 0.03) 100%
      );
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.8),
        inset 0 -1.5px 1.5px rgba(0, 0, 0, 0.1);
    }
    [data-material="white"] .plank-bottom {
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.08) 0%,
        transparent 20%,
        rgba(255, 255, 255, 0.4) 100%
      );
      box-shadow:
        inset 0 -1px 0 rgba(0, 0, 0, 0.1),
        inset 0 1.5px 1.5px rgba(255, 255, 255, 0.3);
    }
    [data-material="white"] .plank-left {
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.6) 0%,
        transparent 20%,
        rgba(0, 0, 0, 0.03) 100%
      );
      box-shadow:
        inset 1px 0 0 rgba(255, 255, 255, 0.8),
        inset -1.5px 0 1.5px rgba(0, 0, 0, 0.1);
    }
    [data-material="white"] .plank-right {
      background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.08) 0%,
        transparent 20%,
        rgba(255, 255, 255, 0.4) 100%
      );
      box-shadow:
        inset -1px 0 0 rgba(0, 0, 0, 0.1),
        inset 1.5px 0 1.5px rgba(255, 255, 255, 0.3);
    }
  `;

  render() {
    return html`
      <div
        class="frame-container"
        data-width=${this.width}
        data-material=${this.material}
        style="--fui-frame-color: ${this.color};"
      >
        <div class="plank plank-top"></div>
        <div class="plank plank-right"></div>
        <div class="plank plank-bottom"></div>
        <div class="plank plank-left"></div>
        <slot></slot>
      </div>
    `;
  }
}

/**
 * FrameUI - Wrapper composing the FUI components into a single API
 */
@customElement("frame-ui")
export class FrameUI extends LitElement {
  @property({ type: String }) frameColor = "#222";
  @property({ type: String, attribute: "frame-width" }) frameWidth = "md";
  @property({ type: String }) matColor = "#ffffff";
  @property({ type: String, attribute: "mat-size" }) matSize = "md";
  @property({ type: String, reflect: true }) material = "satin";
  @property({ type: Boolean, reflect: true }) glass = false;

  static styles = css`
    :host {
      display: inline-block;
      line-height: 0;
    }

    ::slotted(*) {
      display: block;
      max-width: 100%;
      height: auto;
      filter: contrast(1.02) saturate(1.02) brightness(0.96);
      transform: scale(1.001);
    }
  `;

  render() {
    // Resolve width variable to pass deeply down the composed tree
    const wMap: Record<string, string> = {
      xs: "10px",
      sm: "20px",
      md: "30px",
      lg: "45px",
      xl: "60px",
    };
    const resolvedWidth = wMap[this.frameWidth] || this.frameWidth || "30px";

    return html`
      <div style="--fui-frame-w: ${resolvedWidth}; display: contents;">
        <fui-frame
          color=${this.frameColor}
          width=${this.frameWidth}
          material=${this.material}
        >
          <fui-mat color=${this.matColor} size=${this.matSize}>
            <slot></slot>
            ${this.glass
              ? html`<fui-glass slot="glazing"></fui-glass>`
              : nothing}
          </fui-mat>
        </fui-frame>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "fui-glass": FuiGlass;
    "fui-mat": FuiMat;
    "fui-frame": FuiFrame;
    "frame-ui": FrameUI;
  }
}
