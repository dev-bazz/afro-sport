import NavBar from "./NavBar.vue";

export default {
	title: "Components/NavBar",
	component: NavBar,
	tags: ["autodocs", "components"],
	args: {
		notifications: 0,
		isLogged: false,
	},
};

export const notLoggedIn = {};
export const loggedIn = {
	args: { isLogged: true },
};
