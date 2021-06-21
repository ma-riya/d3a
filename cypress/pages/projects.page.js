import { BasePage } from "./base.page";

export class ProjectsPage extends BasePage {
    PROJECTS_LINK = ".icon-projects > use";
    NEW_BTN = "button[class='button button--accent button-icon']";
    PROJECT_INTPUT = "#input-field-name";
    DESCRIPTION_INPUT = "#textarea-field-nameTextArea";
    ADD_BTN = ".library-name-modal__container > .button";
    SAVED_PROJECT_NAME = "span[class='saved-project__headline__name__text']";
}