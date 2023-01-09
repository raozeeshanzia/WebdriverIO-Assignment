import ElementUtil from '../../utils/elementUtil.js'
import Page from './page.js';
import formData from '../data/formData.json' assert { type: "json" };
import WebTableUtil from "../../utils/WebTableUtil.js";
import * as path from "path";


class FormPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get inputFirstName() {
        return $("#firstName");
    }

    public get inputLastName() {
        return $("#lastName");
    }

    public get inputUserEmail() {
        return $("#userEmail");
    }

    public get inputMobileNumber() {
        return $("#userNumber");
    }

    public get inputSubject() {
        return $("input#subjectsInput");
    }

    public get inputCurrentAddress() {
        return $("#currentAddress");
    }

    public get ListOfCheckBoxes() {
        return $$(".custom-checkbox");
    }

    public get inputDOB() {
        return $("input#dateOfBirthInput");
    }

    public get fileUploadBtn() {
        return $("input#uploadPicture");
    }

    public get inputYear() {
        return $(".react-datepicker__year-select");
    }

    public get inputMonth() {
        return $(".react-datepicker__month-select")
    }

    public get stateElement() {
        return $("#state");
    }

    public get cityElement() {
        return $("#city")
    }

    public  get stateRajistan() {
        return $("#react-select-3-option-3");
    }

    public get cityLucknow() {
        return $("#react-select-3-option-3");
    }

    public get submitBtn() {
        return $("#submit");
    }

    public get firstDateOfJan() {
        return $("div[role='listbox'] > div:nth-of-type(1) > div:nth-of-type(2)")
    }

    public get listOfGender() {
        return $$(".custom-radio")

    }

    public get allFormData() {
        return $$("tbody tr td");
    }

    public get successMeassage() {
        return $("div#example-modal-sizes-title-lg");
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async setValueOfFirstName(firstName: string) {
        await ElementUtil.setValue(await this.inputFirstName, firstName);
    }

    public async setValueOfLastName(lastName: string) {
        await ElementUtil.setValue(await this.inputLastName, lastName);
    }

    public async setValueOfUserEmail(userEmail: string) {
        await ElementUtil.setValue(await this.inputUserEmail, userEmail);
    }

    public async setValueOfMobileNumber(mobileNumber: number) {
        await ElementUtil.setValue(await this.inputMobileNumber, mobileNumber);
    }

    public async setValueOfCurrentAddress(currentAddress: string) {
        await ElementUtil.setValue(await this.inputCurrentAddress, currentAddress);

    }

    public async clickOnGenderRadioBtn(attributeValue : any) {
        await ElementUtil.clickOnElement(await ElementUtil.getElement(attributeValue))
    }

    public async selectHobbiesCheckBox(nameOfCheckBox: string) {
        let listOfCheckBoxes = await this.ListOfCheckBoxes;
        if (nameOfCheckBox == formData.hobbies[1]) {
            await ElementUtil.clickOnElement(listOfCheckBoxes[1])
        }else if(nameOfCheckBox == formData.hobbies[3]) {
            await ElementUtil.clickOnElement(listOfCheckBoxes[3])
        }else if(nameOfCheckBox == formData.hobbies[2]) {
            await ElementUtil.clickOnElement(listOfCheckBoxes[2])
        }else {
            console.log("Give name is not in list")
        }
    }

    public async selectGender(nameOfGender: string) {
        let listOfRadioOptions = await this.listOfGender;
        if (nameOfGender == formData.gender[1]) {
            await ElementUtil.clickOnElement(listOfRadioOptions[1])
        }else if(nameOfGender == formData.gender[2]) {
            await ElementUtil.clickOnElement(listOfRadioOptions[2])
        }else if(nameOfGender == formData.gender[3]) {
            await ElementUtil.clickOnElement(listOfRadioOptions[3])
        }else {
            console.log("Give name is not in list")
        }
    }

    public async setValueOfDOB(monthName: string, year: string) {
        await ElementUtil.clickOnElement(await this.inputDOB);
        await ElementUtil.selectDropDownValue(await this.inputYear, year);
        await ElementUtil.selectDropDownValue(await this.inputMonth, monthName);
        await ElementUtil.clickOnElement(await this.firstDateOfJan);
        
    }

    public async selectState() {
        await ElementUtil.clickOnElement(await this.stateElement);
        await ElementUtil.clickOnElement(await this.stateRajistan);
    }

    public async selectCity() {
        await ElementUtil.clickOnElement(await this.cityElement);
        await ElementUtil.clickOnElement(await this.cityLucknow);
    }

    public async clickOnsubmitBtn() {
        await ElementUtil.clickOnElement(await this.submitBtn);
    }

    public async uploadFile() {
        const newPath = path.join(__dirname, '/test/data/PNG.png');// const filePath = '/Users/raozeeshanahmed/Documents/WebDriverIOAssignment/test/data/PNG.png'
        const remoteFilePath = await browser.uploadFile(newPath)
        await ElementUtil.setValue(await this.fileUploadBtn, remoteFilePath);
    }

    public async verifyDataInForm(formValue: any): Promise<boolean> {
        return await WebTableUtil.verifyValueExistInTable(await this.allFormData, formValue)
    }

    public async verifyFormSubmitSuccessfully(): Promise<boolean> {
        await this.successMeassage.waitForExist();
        return this.successMeassage.isDisplayed();
    }


}
export default new FormPage();