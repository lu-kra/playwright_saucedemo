import test, { expect } from '../fixtures/basePages';


test.describe('Tabs', () => {     

   
    test('Multi Tabs', async ({ page, context }) => {
      await page.goto('https://demoqa.com')

      //create second tab
      const newTab = await context.newPage();
      await newTab.goto('https://saucedemo.com');

      //brting demoqa tab to front
      await page.bringToFront();
      
      await newTab.locator('#login-button').click();
    //   await page.pause();

    await newTab.bringToFront();
    }); 
})







