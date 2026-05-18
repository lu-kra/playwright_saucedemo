import { Locator, Page } from "@playwright/test";

export class HomePage {
    page: Page;
    menu: Locator;
    title: Locator;
    item: Locator;
    addToCartButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.menu = page.locator('#react-burger-menu-btn');
        this.title = page.getByText('Swag Labs');
        this.item = page.locator('#item_4_title_link');
        this.addToCartButton = page.locator('#add-to-cart');
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
   
    
    
 









}

