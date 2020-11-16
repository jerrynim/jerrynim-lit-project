import "./styles/styles.css";
import "./pages/lit-tomato";
import { Router } from "@vaadin/router";

window.addEventListener("load", () => {
  initRouter();
});

function initRouter() {
  const router = new Router(document.querySelector("main"));
  router.setRoutes([
    {
      path: "/",
      component: "lit-tomato",
    },
    {
      path: "/vegetable/:name",
      component: "lit-tomato",
    },
  ]);
}
