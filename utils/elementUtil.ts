class ElementUtil {
    /**
     * Write all generic method here
     */

    public async clickOnElement(element : WebdriverIO.Element) {
        await element.waitForExist();
        await element.scrollIntoView();
        await element.click();         
    }

    public async setValue(element : WebdriverIO.Element, value: any) {
        await element.waitForExist();
        await element.clearValue();
        await element.setValue(value)
    }

    public async getText(element: WebdriverIO.Element) {
        await element.waitForExist();
        await element.getText();
    }

    public async getElement(attributeValue: any) {
        return $(`input[value="${attributeValue}"]`)
    }

    public async selectDropDownValue(selectElement: WebdriverIO.Element, value: any) {
        await selectElement.waitForExist();
        await selectElement.selectByAttribute("value", "1996");
    }

    public async waitUntilElementIsDisplay(element: WebdriverIO.Element) {
        await element.waitUntil(() => {
            return element.isExisting();
        }, {
            timeout: 50000,
            timeoutMsg: 'Timed out waiting for element to be visible'
        });
    }

    public async getAttributeValue(element: WebdriverIO.Element, attributekey: string): Promise<any> {
        await element.waitForExist();
        return element.getAttribute(attributekey);
    }

}
export default new ElementUtil();