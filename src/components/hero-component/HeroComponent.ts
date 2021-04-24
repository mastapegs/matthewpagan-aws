import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { LitWind } from "../lit-wind";

@customElement("hero-component")
export class HeroComponent extends LitWind {
  render() {
    return html`
      <div class="p-24 bg-blue-200">
        <h1 class="text-3xl font-semibold text-center">TailwindCSS + Lit = 🔥</h1>
      </div>
    `;
  }
}
