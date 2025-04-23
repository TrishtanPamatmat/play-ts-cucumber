import { Given, When, Then, Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import { expect } from '@playwright/test';
import { LoginPage } from '../page-objects/swaglabs_login_pom';


let browser: Browser;
let page: Page;
let loginpage: LoginPage;

// Before all scenarios, launch the browser
BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
});

// Before each scenario, create a new page
Before(async () => {
    page = await browser.newPage();
    loginpage = new LoginPage(page);
});

// After all scenarios, close the browser
AfterAll(async () => {
    await browser.close();
});

// After each scenario, close the page
After(async () => {
    await page.close();
});

Given('I am on the Swag Labs homepage', async () => {
    await loginpage.goto();
});

When('I enter my valid username {string}', async (username) => {
    await loginpage.enterUsername(username);
});

When('I enter an invalid username {string}', async (username) => {
    await loginpage.enterUsername(username);
});

When('I enter the locked out username {string}', async (username) => {
    await loginpage.enterUsername(username);
});

When('I enter my valid password {string}', async (password) => {
    await loginpage.enterPassword(password);
});

When('I enter an invalid password {string}', async (password) => {
    await loginpage.enterPassword(password);
});

When('I click the "Login" button', async () => {
    await loginpage.clickLoginButton();
});

Then('I should see the {string} heading', async (headingText) => {
    await expect(loginpage.productsHeading).toHaveText(headingText);
});

Then('I should see the error message {string}', async (errorMessage) => {
    const actualErrorMessage = await loginpage.getErrorMessageText();
    expect(actualErrorMessage).toBe(errorMessage);
});