import Page from "./page.js";

class CartPage extends Page {
    open() {
        return super.open("cart.html");
    }

    async validateOnPage() {
        const cartTitle = await $(".title");
        await cartTitle.waitForDisplayed({ timeout: 10000 });
        await browser.pause(1000)
    }

    async validateItemInCart(itemName) {
        const cartItem = await $(`.inventory_item_name*=${itemName}`);
        await cartItem.waitForDisplayed({ timeout: 10000 });
        await expect(cartItem).toBeDisplayed();
        await browser.pause(1000)
    }
}

export default new CartPage();
