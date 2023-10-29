import { defineConfig } from "vite" //we import this for autocompletion
import eslint from "vite-plugin-eslint"

export default defineConfig ({
    plugins: [eslint()]
})