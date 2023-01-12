import {it} from 'mocha';
import DemoHomePage from '../pageobjects/demoHome.page.js'
import ElementPage from '../pageobjects/element.page.js'
import FormPage from '../pageobjects/form.page.js'
import ProgressBarPage from '../pageobjects/progressBar.page.js'
import DragAndDropPage from "../pageobjects/dragAndDrop.page.js";
import dragAndDropPage from "../pageobjects/dragAndDrop.page.js";
import TableFormData from '../data/tableForm.json' assert {type: 'json'};
import EditTableData from '../data/editTable.json' assert {type: 'json'};
import PractiseFormData from '../data/formData.json' assert {type: 'json'};
import {Button} from "../../enums/button.js";
import {RadioButton} from "../../enums/radioButton";
import {HobbiesCheckBox} from "../../enums/hobbiesCheckBox";
import {States} from "../../enums/states";
import paths from "../../config/path.json" assert {type: "json"};
import radio from "../pageobjects/form.page"


describe('My Login application', () => {
    beforeEach(async () => {
        await DemoHomePage.open("/");
        await browser.maximizeWindow();
        await expect(DemoHomePage.getHomePageElement(DemoHomePage.webIconSelector)).toBeExisting();

    });
    it('Verify user can enter new data into the table', async () => {
        await DemoHomePage.clickOnHomePageButton(Button.Element)
        await ElementPage.clickOnWebTables();
        await ElementPage.clickOnAddBtn();
        await ElementPage.setValueOfFirstName(TableFormData.firstname);
        await ElementPage.setValueOfLastName(TableFormData.lastName);
        await ElementPage.setValueOfEmail(TableFormData.userEmail);
        await ElementPage.setValueOfAge(TableFormData.age);
        await ElementPage.setValueOfSalary(TableFormData.salary);
        await ElementPage.setValueOfDepartment(TableFormData.department);
        await ElementPage.clickOnSubmitBtn();
        expect(await ElementPage.verifyValueInTable(TableFormData.firstname));
        expect(await ElementPage.verifyValueInTable(TableFormData.lastName));
        expect(await ElementPage.verifyValueInTable(TableFormData.userEmail));
        expect(await ElementPage.verifyValueInTable(TableFormData.age));
        expect(await ElementPage.verifyValueInTable(TableFormData.salary));
        expect(await ElementPage.verifyValueInTable(TableFormData.department));

    });

    it('Verify user can edit the row in a table', async () => {
        await DemoHomePage.clickOnHomePageButton(Button.Element)
        await ElementPage.clickOnWebTables();
        await ElementPage.clickOnEditBtn();
        await ElementPage.setValueOfFirstName(EditTableData.firstName);
        await ElementPage.setValueOfLastName(EditTableData.lastName)
        await ElementPage.clickOnSubmitBtn();
        expect(await ElementPage.verifyValueInTable(EditTableData.firstName));
        expect(await ElementPage.verifyValueInTable(EditTableData.lastName));

    });

    it('Verify user can submit the form', async () => {
        await DemoHomePage.clickOnHomePageButton(Button.Form)
        await FormPage.clickOnPractiseForm();
        await FormPage.setValueOfFirstName(PractiseFormData.firstname);
        await FormPage.uploadFile(paths.imagepath);
        await FormPage.setValueOfLastName(PractiseFormData.lastName);
        await FormPage.setValueOfUserEmail(PractiseFormData.userEmail);
        await FormPage.clickOnGenderRadioBtn(RadioButton.Male.toString())
        await FormPage.selectHobbiesCheckBox(HobbiesCheckBox.Sports.toString());
        await FormPage.setValueOfMobileNumber(PractiseFormData.MobileNumber);
        await FormPage.setValueOfDOB(PractiseFormData.dobMonth, PractiseFormData.dobYear);
        await FormPage.setValueOfCurrentAddress(PractiseFormData.currentAddress);
        await FormPage.selectState(States.NCR);
        await FormPage.selectCity();
        await FormPage.clickOnsubmitBtn()
        expect(await FormPage.verifyFormSubmitSuccessfully());
        expect(await FormPage.checkDataInForm(PractiseFormData.firstname));
        expect(await FormPage.checkDataInForm(PractiseFormData.lastName));
        expect(await FormPage.checkDataInForm(PractiseFormData.userEmail));
        expect(await FormPage.checkDataInForm(PractiseFormData.MobileNumber));
        expect(await FormPage.checkDataInForm(PractiseFormData.gender[0]));
        expect(await FormPage.checkDataInForm(PractiseFormData.currentAddress));


    });

    it('Verify the progress bar', async () => {
        await DemoHomePage.clickOnHomePageButton(Button.Widgets)
        await ProgressBarPage.clickOnProgressBarBtn();
        await ProgressBarPage.clickOnStartBtn();
        expect(await ProgressBarPage.checkResetBtnIsDisplay());
        expect(await ProgressBarPage.getValueOfProgress()).toMatch("100");


    });

    it('Verify user can drag and drop', async () => {
        await DemoHomePage.clickOnHomePageButton(Button.Interaction)
        await DragAndDropPage.clickOnDraggableBtn();
        await DragAndDropPage.clickOnContainerRes();
        await dragAndDropPage.dragAndDrop();
        expect(await DragAndDropPage.getValueOfDragElement()).toHaveTextContaining("top: 50px");

    });


})




