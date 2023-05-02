import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: (tag) =>
						["swiper-container", "swiper-slide"].includes(tag),
				},
			},
		}),
	],
	// resolve: {
	// 	alias: {
	// 		"@": path.resolve(__dirname, "./src"),
	// 		"@utilities": path.resolve(__dirname, "./src/styles/utilities.scss"),
	// 	},
	// },
	build: {
		target: "es2015",
	},
});
