import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { LitWind } from "../lit-wind";
import data from './appHeaderData.json'

@customElement('app-header')
export class AppHeader extends LitWind {
  render() {
    return html`
      <header class="bg-red-500 text-white p-4 font-bold">
        <span>${data.title}</span>
      </header>
    `
  }
}