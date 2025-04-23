import { Given, When, Then, Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;

// Before all scenarios, launch the browser
BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
});

// Before each scenario, create a new page
Before(async () => {
    page = await browser.newPage();
});

// After all scenarios, close the browser
AfterAll(async () => {
    await browser.close();
});

Given('I am on the Swag Labs homepage', async () => {
    await page.goto('https://www.saucedemo.com/');
});

When('I enter my valid username {string}', async (username) => {
    await page.fill('#user-name', username);
});

When('I enter the locked out username {string}', async (username) => {
    await page.fill('#user-name', username);
});

When('I enter my valid password {string}', async (password) => {
    await page.fill('#password', password);
});

When('I click the "Login" button', async () => {
    await page.click('#login-button');
});

Then('I should see the {string} heading', async (headingText) => {
    await expect(page.locator('#header_container > div.header_secondary_container > span', { hasText: headingText })).toBeVisible();
});

Then('I should see the error message {string}', async (errorMessage) => {
    await expect(page.locator('#login_button_container > div > form > div.error-message-container.error > h3')).toHaveText(errorMessage);
});


