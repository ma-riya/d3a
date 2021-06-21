import { Constants } from "../../fixtures/constants";
import { LoginPage } from "../../pages/login.page";

const loginPage = new LoginPage();

//Given
Given("Bob is on the login page", () => {
    cy.visit("/login");
});

//Given
Given("Bob is succesfully logged in to the application", () => {
    cy.login();
});

//When

When("Bob clicks on login", () => {
    cy.get(loginPage.LOGIN_BTN).click({ force: true });
});

When("Bob enters valid credentials", () => {
    cy.get(loginPage.EMAIL).type(Cypress.env("VALID_EMAIL"));
    cy.get(loginPage.PASSWORD).type(Cypress.env("VALID_PASSWORD"));
});

When("Bob enters invalid credentials", (datatable) => {
    datatable.hashes().forEach((element) => {
        cy.get(loginPage.EMAIL).type(element.email);
        cy.get(loginPage.PASSWORD).type(element.password);
    });
});

When("Bob clicks on login multiple times", () => {
    for (let n = 0; n < 6; n++) {
        cy.get(loginPage.LOGIN_BTN).click();
    }
});

When("Bob clicks on logout", () => {
    cy.get(loginPage.SETTING_BTN)
        .click()
        .then(() => {
            cy.get(loginPage.LOGOUT_BTN).click();
        });
});

When("Bob clicks on the reset Password", () => {
    cy.get("a").contains("Request password reset").click();
});

When("Bob clicks on the create new account link", () => {
    cy.get("a").contains("Create new account").click();
});

//Then

Then("Bob should be on the home page", () => {
    cy.url().should("include", "/");
    cy.get(loginPage.HOME_HEADER, { timeout: 10000 }).should("be.visible");
});

Then("Bob sees error message on the login page", () => {
    cy.contains(Constants.WRONG_CREDENTIALS_ERR);
});

Then("Bob sees that the account is locked out on the login page", () => {
    cy.url().should("include", "/login");
    cy.contains(Constants.LOCKED_USER_ERR);
});

Then("Bob is on the login page", () => {
    cy.url().should("include", "/login");
});

Then("Bob should be on the reset password page", () => {
    cy.url().should("include", "/forgotpassword");
});

Then("Bob should be on the sign up page", () => {
    cy.url().should("include", "/");
});