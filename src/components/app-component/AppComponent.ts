import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { LitWind } from "../lit-wind";
import '../app-header'
import '../hero-component'

@customElement("app-component")
export class AppComponent extends LitWind {
  render() {
    return html`
      <app-header></app-header>
      <hero-component></hero-component>
    `;
  }
}
