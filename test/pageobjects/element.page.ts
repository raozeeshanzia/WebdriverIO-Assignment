import Page from "./page.js";
import WebTableUtil from "../../utils/WebTableUtil.js";

class ElementPage extends Page {
    /**
     * define selectors using methods
     */

    selectorWebTableBtn: string = '.show .menu-list li:nth-of-type(4)';
    selectorAddBtn: string = '#addNewRecordButton';
    selectorInputFirstName: string = '#firstName';
    selectorInputLastName: string = '#lirstName';
    selectInputEmail: string = '#userEmail';
    selectorInputAge: string = '#age';
    selectorInputSalary: string = '#salary';
    selectorInputDepartment: string = '#department';
    selectorSubmitBtn: string = '#Submit';
    selectorNewColumnsOfRow: string = "div:nth-of-type(3) > div[role='row'] >div";
    selectorEditBtn: string = "div:nth-of-type(2) > div[role='row'] > div:nth-of-type(7)  span[title='Edit']";
    selectorAllColumnsOfTable: string = "div[role='row'] > div";


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async clickOnWebTables() {
        let elementWebTablesBtn = await this.getElement(this.selectorWebTableBtn);
        await elementWebTablesBtn.click();
    }

    public async clickOnAddBtn() {
        let elementAddBtn = await this.getElement(this.selectorAddBtn);
        await elementAddBtn.click();
    }

    public async setValueOfFirstName(firstName: string) {
        let elementInputFirstName = await this.getElement(this.selectorInputFirstName);
        await elementInputFirstName.setValue(firstName);
    }

    public async setValueOfLastName(lastName: string) {
        let elementInputLastName = await this.getElement(this.selectorInputLastName);
        await elementInputLastName.setValue(lastName);
    }

    public async setValueOfEmail(userEmail: string) {
        let elementInputUserEmail = await this.getElement(this.selectInputEmail);
        await elementInputUserEmail.setValue(userEmail);
    }

    public async setValueOfAge(userAge: number) {
        let elementInputAge = await this.getElement(this.selectorInputAge);
        await elementInputAge.setValue(userAge);
    }

    public async setValueOfSalary(salary: number) {
        let elementInputSalary = await this.getElement(this.selectorInputSalary);
        await elementInputSalary.setValue(salary);
    }

    public async setValueOfDepartment(departmentName: string) {
        let elementInputDepartment = await this.getElement(this.selectorInputDepartment);
        await elementInputDepartment.setValue(departmentName);
    }

    public async clickOnSubmitBtn() {
        let elementSubmitBtn = await this.getElement(this.selectorSubmitBtn);
        await elementSubmitBtn.click();
    }


    public async clickOnEditBtn() {
        let elementEditBtn = await this.getElement(this.selectorEditBtn);
        await elementEditBtn.click();
    }

    public async verifyValueInTable(valueOfColumn: any): Promise<boolean> {
        return await WebTableUtil.verifyValueExistInTable(await this.getArrayOfElements(this.selectorAllColumnsOfTable),
            valueOfColumn);
    }


}

export default new ElementPage();