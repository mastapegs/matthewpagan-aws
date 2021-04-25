import { LitElement, css, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import "../../tailwind.css";

@customElement("lit-wind")
export class LitWind extends LitElement {
  static getTailwindString() {
    const { cssRules: tailwindCSSRules } = document.styleSheets[0];
    return Object.values(tailwindCSSRules)
      .map((rule) => rule.cssText)
      .join("\n");
  }
  static styles = css`
    ${unsafeCSS(LitWind.getTailwindString())}
  `;
}
