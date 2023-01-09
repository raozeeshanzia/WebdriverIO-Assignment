import Page from "./page.js";
import ElementUtil from "../../utils/elementUtil.js"

class DemoQaHomePage extends Page {

    /**
     * define selectors using getter methods
     */

    public get webIcon() {
        return $('img[src="/images/Toolsqa.jpg"]');
    }

    public get elementBtn() {
        return $(".category-cards [class='card mt-4 top-card']:nth-of-type(1) .card-body");
    }

    public get formBtn() {
        return $("div:nth-of-type(2) > div > .card-up");
    }

    public get practiseFormBtn() {
        return $(".collapse.element-list.show > .menu-list > .btn.btn-light");
    }

    public get widgetsBtn() {
        return $("div:nth-of-type(4) > div > .card-body");
    }

    public get interactionBtn() {
        return $("div:nth-of-type(5) > div > .card-body > h5")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async clickOnElementBtn() {
        await ElementUtil.clickOnElement(await this.elementBtn);
    }

    public async clickOnFormbBtn() {
        await ElementUtil.clickOnElement(await this.formBtn)
    }

    public async clickOnPracticseFormBtn() {
        await ElementUtil.clickOnElement(await this.practiseFormBtn)
    }

    public async clickOnWidgetsBtn() {
        await ElementUtil.clickOnElement(await this.widgetsBtn);
    }

    public async clickOnInteractionBtn() {
        await ElementUtil.clickOnElement(await this.interactionBtn);
    }


}

export default new DemoQaHomePage();