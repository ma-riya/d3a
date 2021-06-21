import { ProjectsPage } from "../../pages/projects.page";
const projectPage = new ProjectsPage();
const projectName = projectPage.randomNameGenerator(10);

//Given
Given("Bob is succesfully logged in to the application", () => {
    cy.login();
});

Given("Bob opens the project page through the portal", () => {
    cy.get(projectPage.PROJECTS_LINK).click();
});

Given("Bob opens the project page through {string}", (url) => {
    cy.visit(url);
});

//When

When("Bob clicks on New project", () => {
    cy.get(projectPage.NEW_BTN).click();
});

When("enters a project name and clicks on Add", () => {
    cy.get(projectPage.PROJECT_INTPUT).type(projectName);
    cy.get(projectPage.ADD_BTN).contains("Add").click();
});

When("enters a project name as well as description and clicks on Add", () => {
    cy.get(projectPage.PROJECT_INTPUT).type(projectName + "with description");
    cy.get(projectPage.DESCRIPTION_INPUT).type("description of the project");
    cy.get(projectPage.ADD_BTN).contains("Add").click();
});

// Then
Then("the project is succesfully created", () => {
    cy.contains(projectName).should("be.visible");
});

Then("the project with description is succesfully created", () => {
    cy.contains(projectName + "with description").should("be.visible");
});