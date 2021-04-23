import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import "../../tailwind.css";

const { cssRules } = document.styleSheets[0];
const tailwindCSS = Object.values(cssRules)
  .map((rule) => rule.cssText)
  .join("\n");

@customElement("app-component")
export class AppComponent extends LitElement {
  static styles = css`${unsafeCSS(tailwindCSS)}`;
  render() {
    return html`
      <div class="p-24 bg-blue-200">
        <h1 class="text-3xl">Hello, World!</h1>
      </div>
    `;
  }
}
