#Persona
#Bob: a common user with access to the application

Feature: Login page

    Background: Page access
        Given Bob is on the login page

    Scenario: User can successfully login with valid credentials
        When Bob enters valid credentials
        And Bob clicks on login
        Then Bob should be on the home page


    Scenario: User can successfully logout
        Given Bob is succesfully logged in to the application
        When Bob clicks on logout
        Then Bob is on the login page

    Scenario: User cannot login with invalid credentials
        When Bob enters invalid credentials
            | email                     | password |
            | somewrongemail1@gmail.com | 12345    |
        And Bob clicks on login
        Then Bob sees error message on the login page
        And Bob is on the login page

    Scenario: User is locked after many attempts
        When Bob enters invalid credentials
            | email                     | password |
            | somewrongemail2@gmail.com | 12345    |
        And Bob clicks on login multiple times
        Then Bob sees that the account is locked out on the login page
        And Bob is on the login page

    Scenario: User can request to reset password on the login page
        When Bob clicks on the reset Password
        Then Bob should be on the reset password page

    Scenario: User can open sign up page on the login page
        When Bob clicks on the create new account link
        Then Bob should be on the sign up page







