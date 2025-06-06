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

Scenario: Username and Password does not match
    When I enter an invalid username "username"
    And I enter an invalid password "password"
    And I click the "Login" button
    Then I should see the error message "Epic sadface: Username and password do not match any user in this service"
    Examples:
      | username             | password        |
      | invalid_user_1       | wrong_password_1 |