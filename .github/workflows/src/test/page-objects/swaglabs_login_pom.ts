// loginPage.ts
import { Page, Locator } from 'playwright';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly productsHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('#login_button_container > div > form > div.error-message-container.error > h3');
        this.productsHeading = page.locator('#header_container > div.header_secondary_container > span');
    }

    async goto(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }

    async getErrorMessageText(): Promise<string> {
        const text = await this.errorMessage.textContent();
        if (text === null) {
            throw new Error("Error message element has no text content.");
        }
        return text;
    }

    async isProductsHeadingVisible(): Promise<boolean> {
        return await this.productsHeading.isVisible();
    }
}