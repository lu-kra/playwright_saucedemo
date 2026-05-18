import { Locator, Page } from "@playwright/test";

export class LoginPage {
    page: Page;
    userNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    invalidCredentialErrorMessage: Locator;
    requiredCredentialErrorMessage: Locator;
    lockedOutUserErrorMessage: Locator;


    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.invalidCredentialErrorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service');
        this.requiredCredentialErrorMessage = page.getByText('Epic sadface: Username is required');
        this.lockedOutUserErrorMessage = page.getByText('Epic sadface: Sorry, this user has been locked out.');
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

     async enterLockedOutUser() {
        await this.userNameInput.fill('locked_out_user');
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

