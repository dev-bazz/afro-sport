import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home/Home.vue";
import Search from "../pages/Search/Search.vue";

// Routes
const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/search",
		component: Search,
	},
];

// Router
const history = createWebHistory("/afro-sport/"),
	router = createRouter({
		history,
		base: "/afro-sport/", // set your base path here
		mode: "history",
		routes,
	});

export default router;
