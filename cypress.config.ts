import { defineConfig } from "cypress";

const AUTH_SESSION_TOKEN_NAME = "next-auth.session-token";

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) {
      const { GoogleSocialLogin } = require("cypress-social-logins").plugins;

      on("task", {
        GoogleSocialLogin,
      });

      return config;
    },
    env: {
      GOOGLE_USER: process.env.GOOGLE_USER_EMAIL,
      GOOGLE_PW: process.env.GOOGLE_USER_PW,
      COOKIE_NAME: AUTH_SESSION_TOKEN_NAME,
      SITE_NAME: process.env.CYPRESS_BASE_URL,
    },
    testIsolation: false,
  },
});
