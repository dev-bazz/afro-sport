import { createApp } from "vue";
import "./style.scss";
import router from "./routes/routes.js";
import App from "./App.vue";
import server from "./server";

if (import.meta.env.VITE_PRODUCTION === "development") {
	// Mock API Server Call
	server();
}

createApp(App).use(router).mount("#app");
