import { LitElement, html, customElement, property } from "lit-element";
import "./lit-tomato";

@customElement("lit-potato")
class Potato extends LitElement {
  render() {
    return html`
      <style></style>
      <h1>Hello potato</h1>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-potato": Potato;
  }
}
