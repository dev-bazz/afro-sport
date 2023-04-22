import NavBar from "./NavBar.vue";

export default {
	title: "NavBar",
	component: NavBar,
	args: {
		isLogged: false,
	},
};

export const notLoggedIn = {};
export const loggedIn = {
	args: { isLogged: true },
};
