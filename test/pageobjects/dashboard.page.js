import Page from "./page.js";

class DashboardPage extends Page {
    open(path) {
        return super.open("inventory.html");
    }

    get cartIcon() {
        return $("#shopping_cart_container");
    }

    async validateOnPage() {
        await this.cartIcon.waitForDisplayed({ timeout: 10000 });
        await expect(this.cartIcon).toBeDisplayed();
    }

    async addItemToCart(itemName) {
        const addToCartButton = await $(`#add-to-cart-${itemName}`);
        await addToCartButton.waitForDisplayed({ timeout: 10000 });
        await addToCartButton.click();
    }

    async validateItemInCart(itemName) {
        const removeButton = await $(`#remove-${itemName}`);
        await removeButton.waitForDisplayed({ timeout: 10000 });
        await expect(removeButton).toBeDisplayed();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

export default new DashboardPage();
