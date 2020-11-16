import { LitElement, html, customElement, property } from "lit-element";
import "../components/child-tomato";
import { connect } from "pwa-helpers";
import { RootState, store } from "../store";
import { vegetableActions } from "../store/vegetable";

@customElement("lit-tomato")
class Tomato extends connect(store)(LitElement) {
  //? state 정의 부분
  @property() name = store.getState().vegetable.name;

  //* 리덕스 업데이트 될때 실행 된다
  stateChanged(state: RootState) {
    console.log("stateChanged");
    this.name = state.vegetable.name;
    super.stateChanged(state);
  }

  connectedCallback() {
    console.log(window.location);
    super.connectedCallback();
  }

  //* name 변경하기
  changeName() {
    store.dispatch(vegetableActions.setName("changed-tomato"));
  }

  render() {
    return html`<p>${this.name}</p>
      <button @click="${this.changeName}">change</button> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-tomato": Tomato;
  }
}
