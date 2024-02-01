// @ts-expect-error avoid lint error
import eslintPlugin from "vite-plugin-eslint";
import path from "node:path";

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL ?? "https://menthor.io/";

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [eslintPlugin()],
  }
})
