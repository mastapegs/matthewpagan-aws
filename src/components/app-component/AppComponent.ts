import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { LitWind } from "../lit-wind";
import '../hero-component'

@customElement("app-component")
export class AppComponent extends LitWind {
  render() {
    return html`
      <hero-component></hero-component>
    `;
  }
}
