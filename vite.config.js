import { defineConfig } from "vite";
import path from "path";
import symfonyPlugin from "vite-plugin-symfony";

/* if you're using React */
// import react from '@vitejs/plugin-react';

export default defineConfig({
    root: path.resolve(__dirname),
    plugins: [
        symfonyPlugin(),
    ],
    build: {
        rollupOptions: {
            input: {
                app: path.resolve(__dirname, "assets/website/app.js"),
                theme: path.resolve(__dirname, "assets/website/theme.scss")
            },
        }
    },
});
