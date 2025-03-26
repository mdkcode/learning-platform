import { Routes } from "@/app/routes/routes";

describe("Login", () => {
  before(() => {
    cy.log(`Visiting website`);
    cy.visit(Routes.HOME);
  });
  it("Login with Google", () => {
    const username = Cypress.env("GOOGLE_USER");
    const password = Cypress.env("GOOGLE_PW");
    const loginUrl = Cypress.env("SITE_NAME");
    const cookieName = Cypress.env("COOKIE_NAME");
    const socialLoginOptions = {
      username,
      password,
      loginUrl,
      headless: true,
      logs: false,
      isPopup: true,
      popupDelay: 3000,
      loginSelector: `a[href="${Cypress.env(
        "SITE_NAME"
      )}/api/auth/signin/google"]`,
      postLoginSelector: ".unread-count",
    };
    cy.contains("button", "Get started").click();
    return cy.task("GoogleSocialLogin", socialLoginOptions).then((result) => {
      const { cookies } = result as { cookies: Cypress.Cookie[] };
      cy.clearCookies();

      const cookie = cookies
        .filter((cookie) => cookie.name === cookieName)
        .pop();
      if (cookie) {
        cy.setCookie(cookie.name, cookie.value, {
          domain: cookie.domain,
          expiry: cookie.expiry,
          httpOnly: cookie.httpOnly,
          path: cookie.path,
          secure: cookie.secure,
        });

        cy.session("google-session", () => {
          cy.setCookie(cookie.name, cookie.value, {
            domain: cookie.domain,
            expiry: cookie.expiry,
            httpOnly: cookie.httpOnly,
            path: cookie.path,
            secure: cookie.secure,
          });
        });

        cy.visit(Routes.DASHBOARD);
        cy.contains("Welcome").should("exist");
      }
    });
  });
});
