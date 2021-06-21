import { ProjectsPage } from "../../pages/projects.page";
import { SimulationPage } from "../../pages/simulation.page";

const projectPage = new ProjectsPage();
const simulationPage = new SimulationPage();
const projectName = projectPage.randomNameGenerator(10);

//Given
Given("Bob created a project", () => {
    cy.login();
    cy.get(projectPage.PROJECTS_LINK).click();
    cy.get(projectPage.NEW_BTN).click();
    cy.get(projectPage.PROJECT_INTPUT).type(projectName);
    cy.get(projectPage.ADD_BTN).contains("Add").click();
    cy.contains(projectName).should("be.visible");
});

//When
When("Bob clicks on New simulation", () => {
    cy.get(simulationPage.PROJECT_LINK).click();
    cy.get(simulationPage.NEW_SIMULATION_BTN).click();
});

When("Bob clicks on Next", () => {
    cy.get(simulationPage.SAVE_SIMULATION_BTN).click();
});

// Then

Then("a new simulation is succesfully created", () => {
    cy.url().should("include", "/step1");
    cy.contains("Modelling").should("be.visible");
});

Then("the configuration is correctly listed", () => {
    cy.get(simulationPage.SETTINGS_ICON).click();
    cy.get(simulationPage.INPUT_FIELD).should(
        "have.value",
        "default simulation"
    );
    cy.contains(projectName).should("be.visible");
});