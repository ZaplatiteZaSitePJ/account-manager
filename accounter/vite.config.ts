import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr'
import path from "path";

export default defineConfig({
	plugins: [react(), svgr()],
	base: "/",
	resolve: {
		alias: {
			"@app": path.resolve(__dirname, "src/app"),
			"@shared": path.resolve(__dirname, "src/shared"),
			"@entities": path.resolve(__dirname, "src/entities"),
			"@features": path.resolve(__dirname, "src/features"),
			"@widgets": path.resolve(__dirname, "src/widgets"),
			"@pages": path.resolve(__dirname, "src/pages"),
		},
	},
	server: {
		allowedHosts: ["localhost"],
		port: 5173,
		proxy: {
			"/api": {
				changeOrigin: true,
				secure: false,
				target: "http://localhost:4000",
			},
		},
		strictPort: true,
	},
});
