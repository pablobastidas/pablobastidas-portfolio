import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://pablobastidas-portfolio.vercel.app",
  output: "static",
  devToolbar: {
    enabled: false
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
