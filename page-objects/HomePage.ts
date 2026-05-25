import { Locator, Page } from "@playwright/test";

export class HomePage {
    page: Page;
    menu: Locator;
    title: Locator;
    item: Locator;
    addToCartButton: Locator;
    cartBadge: Locator;
    removeFromCartButton: Locator;
    backToProductsButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.menu = page.locator('#react-burger-menu-btn');
        this.title = page.getByText('Swag Labs');
        this.item = page.locator('#item_4_title_link');
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartBadge = page.locator('//span[@class="shopping_cart_badge"]');
        this.removeFromCartButton = page.locator('#remove-sauce-labs-backpack');
        this.backToProductsButton = page.locator('#back-to-products');
    }


    async clickOnMenu() {
        await this.menu.click();
    }

     async clickOnItem() {
        await this.item.click();
    }
    
       async clickOnAddToCart() {
        await this.addToCartButton.click();
    }

    async clickOnRemoveFromCart() {
        await this.removeFromCartButton.click();
    }

    async clickOnBackToProducts() {
        await this.backToProductsButton.click();
    }







}

