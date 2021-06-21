#Persona
#Bob: a common user with access to the application

Feature: Simulation creation

    Background: Project creation
        Given Bob created a project

    Scenario: User can successfully create a default simulation
        When Bob clicks on New simulation
        And Bob clicks on Next
        Then a new simulation is succesfully created
        And the configuration is correctly listed