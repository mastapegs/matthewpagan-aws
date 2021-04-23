import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

// import './style.css'

// const app = document.querySelector<HTMLDivElement>('#app')!

// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

@customElement("app-component")
export class AppComponent extends LitElement {
  render() {
    return html` <h1>Hello World</h1> `;
  }
}
