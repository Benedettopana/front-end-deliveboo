import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router.js";
import { store } from "./store/index.js";

createApp(App).use(router).use(store).mount("#app");
