import ElementUtil from "../../utils/elementUtil.js";
import Page from "./page.js";

class ProgressBarPage extends Page{
    /**
     * define selectors using getter methods
     */

    public get progressBtn() {
        return $(".collapse.element-list.show > .menu-list > li:nth-of-type(5) > .text");
    }

    public get startBtn() {
        return $("#startStopButton")
    }

    public get resetBtn() {
        return $("#resetButton")
    }

    public get progressBar() {
        return $("div[role='progressbar']")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async clickOnPrgressBarBtn() {
        await ElementUtil.clickOnElement(await this.progressBtn);
    }

    public async getValueOfProgress(): Promise<any> {
        return this.progressBar.getAttribute("aria-valuenow");
    }

    public async clickOnStartBtn() {
        await ElementUtil.clickOnElement(await this.startBtn);
    }

    public async verifyResetBtnIsDisplay() {
       return  await ElementUtil.waitUntilElementIsDisplay(await this.resetBtn);

    }



}
export default new ProgressBarPage();