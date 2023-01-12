import Page from './page.js';
import WebTableUtil from "../../utils/WebTableUtil.js";
import * as path from "path";
import {States} from "../../enums/states";


class FormPage extends Page {

    /**
     * define selectors using  methods
     */

    selectorPractiseFormBtn: string = ".show .btn-light";
    selectorInputFirstname: string = "#firstName";
    selectorInputLastName: string = "#lastName";
    selectorInputEmail: string = "#userEmail";
    selectorInputMobileNumber: string = "#userNumber";
    selectorInputSubject: string = "input#subjectsInput";
    selectorInputCurrentAddress: string = "#currentAddress";
    selectorInputDOB: string = "input#dateOfBirthInput";
    selectorFileUpload: string = "input#uploadPicture";
    selectorInputYear: string = ".react-datepicker__year-select";
    selectorInputMonth: string = ".react-datepicker__month-select";
    selectorState: string = "#state";
    selectorCity: string = "#city";
    selectorSubmitBtn: string = "#submit";
    selectorAllFormData: string = "tbody tr td";
    selectorDateFirst: string = "div[role='listbox'] > div:nth-of-type(1) > div:nth-of-type(2)" //I know this wrong but having issues in finding path


    get successMessage() {
        return $("div#example-modal-sizes-title-lg");
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */



    public async clickOnPractiseForm() {
        let elementPractiseFormBtn = await this.getElement(this.selectorPractiseFormBtn);
        await elementPractiseFormBtn.click();
    }

    public async setValueOfFirstName(firstName: string) {
        let elementInputFirstName = await this.getElement(this.selectorInputFirstname);
        await elementInputFirstName.setValue(firstName);
    }

    public async setValueOfLastName(lastName: string) {
        let elementInputLastName = await this.getElement(this.selectorInputLastName);
        await elementInputLastName.setValue(lastName);
    }

    public async setValueOfUserEmail(userEmail: string) {
        let elementInputEmail = await this.getElement(this.selectorInputEmail);
        await elementInputEmail.setValue(userEmail);
    }

    public async setValueOfMobileNumber(mobileNumber: number) {
        let elementInputMobileNumber = await this.getElement(this.selectorInputMobileNumber);
        await elementInputMobileNumber.setValue(mobileNumber);
    }

    public async setValueOfCurrentAddress(currentAddress: string) {
        let elementInputCurrentAddress = await this.getElement(this.selectorInputCurrentAddress);
        await elementInputCurrentAddress.setValue(currentAddress);

    }

    public async getRadioBtn(attributeValue: any): Promise<WebdriverIO.Element> {
        return $(`input[value="${attributeValue}"]`)
    }

    public async clickOnGenderRadioBtn(attributeValue: string) {
        let elementRadioBtn = await this.getRadioBtn(attributeValue);
        await elementRadioBtn.click();
    }

    public async getCheckBoxBtn(attributeValue: any): Promise<WebdriverIO.Element> {
        return $(`input[value="${attributeValue}"]`)
    }

    public async selectHobbiesCheckBox(nameOfCheckBox: string) {
        let elementCheckBox = await this.getCheckBoxBtn(nameOfCheckBox);
        await elementCheckBox.click();

    }

    public async selectDropDownValue(selectElement: WebdriverIO.Element, attributeName: string, attributeValue: string) {
        await selectElement.waitForExist();
        await selectElement.selectByAttribute(attributeName, attributeValue);
    }


    public async setValueOfDOB(monthName: string, year: string) {
        let elementInputBOD = await this.getElement(this.selectorInputDOB);
        await elementInputBOD.click();
        let elementInputYear = await this.getElement(this.selectorInputYear);
        await this.selectDropDownValue(elementInputYear, "value", year);
        let elementInputMonth = await this.getElement(this.selectorInputMonth);
        await this.selectDropDownValue(elementInputMonth, "value", monthName);
        let elementFirstDate = await this.getElement(this.selectorDateFirst);
        await elementFirstDate.click();

    }

    public async selectState(nameofState: States) {
        let elementStateField = await this.getElement(this.selectorState);
        await elementStateField.click();
        let elementState = await $(`#react-select-3-option-

        "${nameofState}"`);
        await elementState.click();
    }


    // city field is not accessible
    public async selectCity() {
        let elementCityField = await this.getElement(this.selectorCity);
        await elementCityField.click();
    }

    public async clickOnsubmitBtn() {
        let elementSubmitBtn = await this.getElement(this.selectorSubmitBtn);
        await elementSubmitBtn.click();
    }

    public async uploadFile(filePath: string) {
        const newPath = path.join(__dirname, filePath);// const filePath = '/Users/raozeeshanahmed/Documents/WebDriverIOAssignment/test/data/PNG.png'
        const remoteFilePath = await browser.uploadFile(newPath)
        let elementFileUpload = await this.getElement(this.selectorFileUpload);
        await elementFileUpload.setValue(remoteFilePath);
    }

    public async checkDataInForm(formValue: any): Promise<boolean> {
        let allFormData = await this.getArrayOfElements(this.selectorAllFormData);
        return await WebTableUtil.verifyValueExistInTable(allFormData, formValue)
    }

    public async verifyFormSubmitSuccessfully(): Promise<boolean> {
        await this.successMessage.waitForExist()
        return await this.successMessage.isDisplayed();
    }

}


export default new FormPage();