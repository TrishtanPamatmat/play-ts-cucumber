Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the login link

  Scenario: Login should be success
    And User enter the username as "ortoni11"
    And User enter the password as "Pass1234"
    When User click on the login button
    Then Login should be success

  Scenario: Login should not be success
    Given User enter the username as "koushik"
    Given User enter the password as "Passkoushik"
    When User click on the login button
    But Login should fail

Scenario: Failed Login with Invalid Password
And I enter my valid username
And I enter an invalid password
And I click the "Sign in with Newspapers.com" submit button
Then I should see an error message indicating invalid password

Scenario: Failed Login with Invalid Username
And I enter an invalid username
And I enter a valid password
And I click the "Sign in with Newspapers.com" submit button
Then I should see an error message indicating invalid username

// After each scenario, close the page
After(async () => {
    await page.close();
});


// After all scenarios, close the browser
AfterAll(async () => {
    await browser.close();
});