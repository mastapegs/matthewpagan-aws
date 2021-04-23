import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import "../../tailwind.css";

const { cssRules } = document.styleSheets[0];
const tailwindCSS = Object.values(cssRules)
  .map((rule) => rule.cssText)
  .join("\n");

@customElement("lit-wind")
export class LitWind extends LitElement {
  static styles = css`
    ${unsafeCSS(tailwindCSS)}
  `;
}
