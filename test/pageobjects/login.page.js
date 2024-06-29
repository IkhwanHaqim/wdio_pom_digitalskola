import Page from "./page.js";
import { $ } from "@wdio/globals"

class LoginPage extends Page {
    open(path) {
        return super.open("")
    }

    get textBoxUsername() {
        return $('#user-name')
    }

    get textBoxPassword() {
        return $("#password")
    }

    get buttonLogin() {
        return $("#login-button")
    }

    async login(username, password) {
        await this.textBoxUsername.setValue(username);
        await this.textBoxPassword.setValue(password);
        await this.buttonLogin.click();
        await browser.pause(3000);
    }
}

export default new LoginPage();