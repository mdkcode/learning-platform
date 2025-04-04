import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    supportFile: false,
  },
});
