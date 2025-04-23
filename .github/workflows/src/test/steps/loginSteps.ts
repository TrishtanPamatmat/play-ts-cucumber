import {Given, When, Then} from "@cucumber/cucumber"
import {chromium, Page, Browser} from "@playwright/test" 

let browser: Browser;
let page: Page;

Given('User navigates to the application', async function () {
   browser = await chromium.launch({headless: false});
   page = await browser.newPage();
   await page.goto("https://bookcart.azurewebsites.net/");
  });

 Given('User click on the login link', async function () {
   await page.locator("body > app-root > app-nav-bar > mat-toolbar > mat-toolbar-row > div.d-flex.align-items-center > button.mat-mdc-tooltip-trigger.mdc-button.mdc-button--unelevated.mat-mdc-unelevated-button.mat-primary.mat-mdc-button-base.ng-star-inserted > span.mdc-button__label").click();
   await browser.close();

 });

 Given('User enter the username as {string}', async function (username) {
   await page.locator("input[formcontrolname='username']").type(username);
 });

 Given('User enter the password as {string}', async function (password) {
   await page.locator("input[formcontrolname='password']").type(password);
 });

 When('User click on the login button', async function () {
 
 });

 Then('Login should be success', async function () {
  
   await browser.close();

 });

When('Login should fail', () => {
  // Write code here that turns the phrase above into concrete actions
})
When('Login should fail', () => {
  // Write code here that turns the phrase above into concrete actions
})
