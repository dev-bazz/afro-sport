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
const history = createWebHistory("./"),
	router = createRouter({
		history,
		routes,
	});

export default router;
