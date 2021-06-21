#Persona
#Bob: a common user with access to the application

Feature: Project creation

    Background: Page access
        Given Bob is succesfully logged in to the application 

    Scenario: User can successfully create a project via the portal
        Given Bob opens the project page through the portal
        When Bob clicks on New project
        And enters a project name and clicks on Add
        Then the project is succesfully created

    Scenario: User can successfully create a project with description via the link
        Given Bob opens the project page through "https://www.d3a.io/projects"
        When Bob clicks on New project
        And enters a project name as well as description and clicks on Add
        Then the project with description is succesfully created
