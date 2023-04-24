import Tab from "./Tab.vue";

export default {
	title: "Components/Tab",
	component: Tab,
	argTypes: {
		title: "Recommended",
		link: "View All",
	},
};

export const Default = {
	args: { title: "Recommended", link: "View All" },
};
