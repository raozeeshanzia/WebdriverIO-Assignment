import Page from "./page.js";
import ElementUtil from "../../utils/elementUtil.js"
import WebTableUtil from "../../utils/WebTableUtil.js";

class ElementPage extends Page {
     /**
     * define selectors using getter methods
     */

    public get webTablesBtn() {
        return $(".collapse.element-list.show > .menu-list > li:nth-of-type(4)");
     }

    public get addBtn() {
        return $("button#addNewRecordButton");
    }

    public get inputFirstName() {
        return $("#firstName");
    }

    public get inputLastName() {
        return $("#lastName");
    }

    public get inputEmail() {
        return $("#userEmail");
    }

    public get inputAge() {
        return $("#age");
    }

    public get inputSalary() {
        return $("#salary");
    }

    public get inputDepartment() {
        return $("#department");
    }

    public get submitBtn() {
        return $("#submit");
    }

    public get newColumnsOfRow() {
        return $$("div:nth-of-type(3) > div[role='row'] >div")
    }

    public get editBtn() {
        return $("div:nth-of-type(2) > div[role='row'] > div:nth-of-type(7)  span[title='Edit']")
    }

    public get AllColumnOfTable() {
        return $$("div[role='row'] > div")
    }

     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async clickOnWebTables() {
        await ElementUtil.clickOnElement(await this.webTablesBtn)
    }

    public async clickOnAddBtn() {
        await ElementUtil.clickOnElement(await this.addBtn);
    }

    public async setValueOfFirstName(firstName: string) {
        await ElementUtil.setValue(await this.inputFirstName, firstName);
    }

    public async setValueOfLastName(lastName: string) {
        await ElementUtil.setValue(await this.inputLastName, lastName)
    }

    public async setValueOfEmail(userEmail: string) {
        await ElementUtil.setValue(await this.inputEmail, userEmail);
    }

    public async setValueOfAge(userAge: number) {
        await ElementUtil.setValue(await this.inputAge, userAge)
    }

    public async setValueOfSalary(salary: number) {
        await ElementUtil.setValue(await this.inputSalary, salary)
    }

    public async setValueOfDepartment(departmentName: string) {
        await ElementUtil.setValue(await this.inputDepartment, departmentName)
    }

    public async clickOnSubmitBtn() {
        await ElementUtil.clickOnElement(await this.submitBtn);
    }

    public async verifyDataExistInTable() {
        const list = await this.newColumnsOfRow;
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            const data = await ElementUtil.getText(element);
            console.log(" test data------"+data);
            
        }
    }

    public async clickOnEditBtn() {
        await ElementUtil.clickOnElement(await this.editBtn);
    }

    public async verifyValueInTable(valueOfColumn: any): Promise<boolean> {
       return  await WebTableUtil.verifyValueExistInTable(await this.AllColumnOfTable, valueOfColumn);
    }


}
export default new ElementPage();