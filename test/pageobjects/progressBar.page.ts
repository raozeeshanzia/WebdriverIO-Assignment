import Page from "./page.js";

class ProgressBarPage extends Page {
    /**
     * define selectors using methods
     */
    selectorStartBtn: string = "#startStopButton";
    selectorResetBtn: string = "#resetButton";
    selectorProgressBar: string = ".show .menu-list .btn-light:nth-of-type(5)";

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async clickOnProgressBarBtn() {
        let elementProgressBar = await this.getElement(this.selectorProgressBar);
        await elementProgressBar.click();
    }


    public async getValueOfProgress(): Promise<string> {
        let elementProgressBar = await this.getElement(this.selectorProgressBar);
        return elementProgressBar.getAttribute("aria-valuenow");
    }

    public async clickOnStartBtn() {
        let elementStartBtn = await this.getElement(this.selectorStartBtn);
        await elementStartBtn.click();
    }

    public async checkResetBtnIsDisplay(): Promise<true | void> {
        let elementResetBtn = await this.getElement(this.selectorResetBtn);
        return await elementResetBtn.waitForDisplayed({timeout: 5000});

    }


}

export default new ProgressBarPage();