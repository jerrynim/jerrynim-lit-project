import { LitElement, html, customElement, property } from "lit-element";

@customElement("lit-tomato")
class Tomato extends LitElement {
  @property({
    hasChanged: (newVal, oldVal) => {
      console.log("has changed", oldVal, " to ", newVal);
      return true;
    },
  })
  name = "original-name";

  connectedCallback() {
    super.connectedCallback();
    console.log("connected");
  }
  disconnectedCallback() {
    super.connectedCallback();
    console.log("disconnected");
  }

  async performUpdate() {
    console.log("performUpdate");
    await new Promise((resolve) => requestAnimationFrame(() => resolve()));
    super.performUpdate();
  }

  shouldUpdate(changeProperties) {
    console.log("shouldUpdate?", changeProperties);
    super.shouldUpdate(changeProperties);
    return true;
  }

  firstUpdated(changedProperties) {
    console.log("first updated!");
    super.firstUpdated(changedProperties);
  }

  updated(changedProperties) {
    console.log("updated", changedProperties);
    super.updated(changedProperties);
  }

  render() {
    return html`
      <style></style>
      <h1>Hello ${this.name}</h1>
      ${console.log("render!!")}
      <button @click="${this.changeProperties}">changeProperties</button>
    `;
  }

  async changeProperties() {
    this.setAttribute("name", "changed-name");
    await this.updateComplete;
    console.log("update completed!");
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-tomato": Tomato;
  }
}
