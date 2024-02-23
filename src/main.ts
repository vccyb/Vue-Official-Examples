import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import router from "./router";
import "github-markdown-css/github-markdown.css";
const app = createApp(App);
app.use(router);
app.mount("#app");
