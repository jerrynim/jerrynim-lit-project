import { LitElement, html, customElement, property } from "lit-element";

@customElement("child-tomato")
class ChildTomato extends LitElement {
  render() {
    return html`
      <style></style>
      <div>자식 :</div>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "child-tomato": ChildTomato;
  }
}
