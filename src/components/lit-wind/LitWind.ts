import { LitElement, css, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import "../../tailwind.css";

const { cssRules: tailwindCSSRules } = document.styleSheets[0];
const tailwindCSSString = Object.values(tailwindCSSRules)
  .map((rule) => rule.cssText)
  .join("\n");

@customElement("lit-wind")
export class LitWind extends LitElement {
  static styles = css`
    ${unsafeCSS(tailwindCSSString)}
  `;
}
