import ElementUtil from "../../utils/elementUtil.js";
import * as process from "process";
import elementUtil from "../../utils/elementUtil.js";

class DragAndDropPage {
    /**
     * define selectors using getter methods
     */

    public get draggableElement() {
        return $("div#containmentWrapper > .draggable.ui-draggable.ui-draggable-handle.ui-widget-content")
    }

    public get targetElement() {
        return $("div#containmentWrapper")
    }

    public get draggableBtn() {
        return $(".collapse.element-list.show > .menu-list > li:nth-of-type(5)")
    }

    public get containerRestricted() {
        return $("a#draggableExample-tab-containerRestriction");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async clickOnDraggableBtn() {
        await ElementUtil.clickOnElement(await this.draggableBtn);
    }

    public async clickOnContainerRes() {
        await ElementUtil.clickOnElement(await this.containerRestricted);
    }

    public async dragAndDrop() {
        await this.draggableElement.dragAndDrop({x: 0, y: 50});
    }

    public async getValueOfDragElement():Promise<any> {
        return await elementUtil.getAttributeValue(await this.draggableElement, "style")
    }



}
export default new DragAndDropPage();