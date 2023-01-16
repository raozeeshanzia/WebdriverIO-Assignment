import Page from "./page.js";
import {Button} from "../../enums/button";

export class DemoQaHomePage extends Page {
    /**
     * define selectors using getter methods
     */

    webIconSelector: string = 'img[src="/images/Toolsqa.jpg"]'

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    constructor() {
        super();
    }

    public async getHomePageButton(button: Button): Promise<WebdriverIO.Element> {
        return $(`div:nth-of-type(${button}) > div > .card-body > h5`)
    }

    public async clickOnHomePageButton(button: Button) {
        let element = await this.getHomePageButton(button);
        await element.click();
    }
}
