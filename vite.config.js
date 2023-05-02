import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/afro-sport/",
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
	build: {
		target: "es2015",
	},
});
