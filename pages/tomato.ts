import { LitElement, html, property, customElement, css } from "lit-element";

@customElement("lit-tomato")
class Tomato extends LitElement {
  render() {
    return html`
      <style></style>
      <h1>Hello Toamato!</h1>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-tomato": Tomato;
  }
}
