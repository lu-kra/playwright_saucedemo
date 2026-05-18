import { Locator, Page } from "@playwright/test";

export class LoginPage {
    page: Page;
    userNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }


    async gotoLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

     async enterValidUsername() {
        await this.userNameInput.fill('standard_user');
    }

       async enterInvalidUsername() {
        await this.userNameInput.fill('meno');
    }
   
     async enterValidPassword() {
        await this.passwordInput.fill('secret_sauce');
    }

      async enterInvalidPassword() {
        await this.passwordInput.fill('heslo');
    }

      async clickLoginButton() {
        await this.loginButton.click();
    }
    
    async Login() {
        await this.userNameInput.fill('standard_user');
        await this.passwordInput.fill('secret_sauce');
        await this.loginButton.click();
    }









}

