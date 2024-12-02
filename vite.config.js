import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/AlexXLi12.github.io",
	plugins: [react()],
	server: {
		open: true, // Automatically open the app in the browser
	},
});
