import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    EMAIL = "#email";
    PASSWORD = "#password";
    LOGIN_BTN = "button.button.button--accent";
    SETTING_BTN =
        ".side-nav__account-controls__button > :nth-child(1) > button";
    LOGOUT_BTN = ".cog-button-wrapper__menu > :nth-child(2)";
    HOME_HEADER = "header[class='header header--home']";
}