class WebTableUtil {
    /**
     * Write all generic method of webTables
     */

    public async verifyValueExistInTable(listOfWebElements: WebdriverIO.Element[], value: any): Promise<boolean> {
        for (let i = 0; i < listOfWebElements.length; i++) {
            if (await listOfWebElements[i].getText() == value) {
                return true;
            }
        }
        return false;
    }

}

export default new WebTableUtil();