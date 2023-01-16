import Page from "./page.js";


export class DragAndDropPage extends Page {
    /**
     * define selectors using String methods
     */
    draggableElement: string = '.ui-widget-content.ui-draggable-handle';
    draggableBtn: string = '.show .menu-list li:nth-of-type(5)';

    containerRestrictedBtn = 'a#draggableExample-tab-containerRestriction';


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async clickOnDraggableBtn() {
        let elementDraggableBtn = await this.getElement(this.draggableBtn);
        await elementDraggableBtn.click();
    }

    public async clickOnContainerRes() {
        let elementContainerResBtn = await this.getElement(this.containerRestrictedBtn);
        await elementContainerResBtn.click();
    }

    public async dragAndDrop() {
        let elementDraggableBox = await this.getElement(this.draggableElement);
        await elementDraggableBox.dragAndDrop({x: 0, y: 50})
    }

    public async getValueOfDragElement(): Promise<string> {
        let elementDraggableBox = await this.getElement(this.draggableElement);
        return elementDraggableBox.getAttribute("style");
    }

}

