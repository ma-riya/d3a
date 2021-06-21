import { BasePage } from "./base.page";

export class SimulationPage extends BasePage {
    PROJECT_LINK =
        ":nth-child(1) > .ConfigurationListHeadWrapper > .saved-project__headline > .saved-project__headline__name";
    NEW_SIMULATION_BTN =
        "button[class='button button--accent button-icon saved-project__button--new-simulation']";
    SAVE_SIMULATION_BTN =
        "button[class='button button--accent button-icon settings-form__submit']";
    MODELLING_HEADER = ".header > .headline";
    SETTINGS_ICON = ".icon-settings_dots";
    INPUT_FIELD = "#input-field-name";
    PROJECT_FIELD =
        ".projectUUID > .nativeSelect__wrapper > .nativeSelect > .nativeSelect__select";
}