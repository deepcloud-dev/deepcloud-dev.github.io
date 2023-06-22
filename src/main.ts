import "@fortawesome/fontawesome-free/css/all.min.css";

import "./assets/main.css";
import "./firebase";
import { createApp } from "vue";

// @ts-ignore
import App from "./App.vue";

const app = createApp(App);

app.mount("#app");
