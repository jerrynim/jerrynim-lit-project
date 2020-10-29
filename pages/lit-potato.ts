import { LitElement, html, customElement, property } from "lit-element";
import "./lit-tomato";

@customElement("lit-potato")
class Potato extends LitElement {
  static get properties() {
    return {
      name,
    };
  }

  render() {
    return html`
      <style></style>
      <h1>Hello ${this.name}</h1>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-potato": Potato;
  }
}
