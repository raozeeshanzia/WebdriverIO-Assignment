import {it} from 'mocha';
import TableFormData from '../data/tableForm.json' assert {type: 'json'};
import EditTableData from '../data/editTable.json' assert {type: 'json'};
import PractiseFormData from '../data/formData.json' assert {type: 'json'};
import {Button} from "../../enums/button.js";
import {RadioButton} from "../../enums/radioButton";
import {Hobbies} from "../../enums/hobbies";
import {States} from "../../enums/states";
import paths from "../../config/path.json" assert {type: "json"};
import {DemoQaHomePage} from '../pageobjects/demoHome.page';
import {ElementPage} from '../pageobjects/element.page'
import {FormPage} from '../pageobjects/form.page'
import {DragAndDropPage} from '../pageobjects/dragAndDrop.page'
import {ProgressBarPage} from "../pageobjects/progressBar.page";
import {Cities} from "../../enums/cities";

const demoHomePage = new DemoQaHomePage();
const elementPage = new ElementPage();
const formPage = new FormPage();
const dragAndDropPage = new DragAndDropPage()
const progressBarPage = new ProgressBarPage();


describe('My Login application', () => {
    beforeEach(async () => {
        await demoHomePage.open("/");

        await browser.maximizeWindow();
        await expect(demoHomePage.getElement(demoHomePage.webIconSelector)).toBeExisting();

    });
    it('Verify user can enter new data into the table', async () => {
        await demoHomePage.clickOnHomePageButton(Button.Element)
        await elementPage.clickOnWebTables();
        await elementPage.clickOnAddBtn();
        await elementPage.setValueOfFirstName(TableFormData.firstname);
        await elementPage.setValueOfLastName(TableFormData.lastName);
        await elementPage.setValueOfEmail(TableFormData.userEmail);
        await elementPage.setValueOfAge(TableFormData.age);
        await elementPage.setValueOfSalary(TableFormData.salary);
        await elementPage.setValueOfDepartment(TableFormData.department);
        await elementPage.clickOnSubmitBtn();
        expect(await elementPage.verifyValueInTable(TableFormData.firstname));
        expect(await elementPage.verifyValueInTable(TableFormData.lastName));
        expect(await elementPage.verifyValueInTable(TableFormData.userEmail));
        expect(await elementPage.verifyValueInTable(TableFormData.age));
        expect(await elementPage.verifyValueInTable(TableFormData.salary));
        expect(await elementPage.verifyValueInTable(TableFormData.department));

    });

    it('Verify user can edit the row in a table', async () => {
        await demoHomePage.clickOnHomePageButton(Button.Element)
        await elementPage.clickOnWebTables();
        await elementPage.clickOnEditBtn();
        await elementPage.setValueOfFirstName(EditTableData.firstName);
        await elementPage.setValueOfLastName(EditTableData.lastName)
        await elementPage.clickOnSubmitBtn();
        expect(await elementPage.verifyValueInTable(EditTableData.firstName));
        expect(await elementPage.verifyValueInTable(EditTableData.lastName));

    });

    it('Verify user can submit the form', async () => {
        await demoHomePage.clickOnHomePageButton(Button.Form)
        await formPage.clickOnPractiseForm();
        await formPage.setValueOfFirstName(PractiseFormData.firstname);
        await formPage.uploadFile(paths.imagepath);
        await formPage.setValueOfLastName(PractiseFormData.lastName);
        await formPage.setValueOfUserEmail(PractiseFormData.userEmail);
        await formPage.clickOnGenderRadioBtn(RadioButton.Male.toString())
        await formPage.selectHobbiesCheckBox(Hobbies.Sports.toString());
        await formPage.setValueOfMobileNumber(PractiseFormData.MobileNumber);
        await formPage.setValueOfDOB(PractiseFormData.dobMonth, PractiseFormData.dobYear);
        await formPage.setValueOfCurrentAddress(PractiseFormData.currentAddress);
        await formPage.selectState(States.NCR);
        await formPage.selectCity(Cities.Delhi);
        await formPage.clickOnsubmitBtn()
        expect(await formPage.verifyFormSubmitSuccessfully());
        expect(await formPage.checkDataInForm(PractiseFormData.firstname));
        expect(await formPage.checkDataInForm(PractiseFormData.lastName));
        expect(await formPage.checkDataInForm(PractiseFormData.userEmail));
        expect(await formPage.checkDataInForm(PractiseFormData.MobileNumber));
        expect(await formPage.checkDataInForm(PractiseFormData.gender[0]));
        expect(await formPage.checkDataInForm(PractiseFormData.currentAddress));


    });

    it('Verify the progress bar', async () => {
        await demoHomePage.clickOnHomePageButton(Button.Widgets)
        await progressBarPage.clickOnProgressBarBtn();
        await progressBarPage.clickOnStartBtn();
        expect(await progressBarPage.checkResetBtnIsDisplay());
        expect(await progressBarPage.getValueOfProgress()).toMatch("100");


    });

    it('Verify user can drag and drop', async () => {
        await demoHomePage.clickOnHomePageButton(Button.Interaction)
        await dragAndDropPage.clickOnDraggableBtn();
        await dragAndDropPage.clickOnContainerRes();
        await dragAndDropPage.dragAndDrop();
        expect(await dragAndDropPage.getValueOfDragElement()).toHaveTextContaining("top: 50px");

    });


})




