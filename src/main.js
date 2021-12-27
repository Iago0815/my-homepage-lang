import { createApp } from "vue";
import router from "./router";

import App from "./App.vue";
import Modal from "./components/UI/Modal.vue";

import store from "./store/index";

//bootstrap v4.6.0
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("modal-modal", Modal);

app.mount("#app");
