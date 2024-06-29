import DashboardPage from "../pageobjects/dashboard.page.js";
import LoginPage from "../pageobjects/login.page.js";
import CartPage from "../pageobjects/cart.page.js";

describe('Login test', () => {
    it('Successful Login and add Sauce Labs Backpack to cart', async () => {
        await LoginPage.open();
        await LoginPage.login(process.env.SAUCE_USERNAME, process.env.SAUCE_PASSWORD);
        
        await DashboardPage.validateOnPage();
        await DashboardPage.addItemToCart('sauce-labs-backpack');
        await DashboardPage.goToCart();

        await CartPage.validateOnPage();
        await CartPage.validateItemInCart("Sauce Labs Backpack");
    });

    it('Successful Login and add Sauce Labs Bike Light to cart', async () => {
        await LoginPage.open();
        await LoginPage.login(process.env.SAUCE_USERNAME, process.env.SAUCE_PASSWORD);
        
        await DashboardPage.validateOnPage();
        await DashboardPage.addItemToCart('sauce-labs-bike-light');
        await DashboardPage.goToCart();

        await CartPage.validateOnPage();
        await CartPage.validateItemInCart("Sauce Labs Bike Light");
    });
});
