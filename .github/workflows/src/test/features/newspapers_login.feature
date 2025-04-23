Feature: Swag Labs Login

As a user
I want to be able to log in to my Swag Labs account
So that I can access my Swag Labs.

Background:
Given I am on the Swag Labs homepage

Scenario: Successful Login
    When I enter my valid username "standard_user"
    And I enter my valid password "secret_sauce"
    And I click the "Login" button
    Then I should see the "Products" heading

Scenario: Locked Out User Login
    When I enter the locked out username "locked_out_user"
    And I enter my valid password "secret_sauce"
    And I click the "Login" button
    Then I should see the error message "Epic sadface: Sorry, this user has been locked out."
