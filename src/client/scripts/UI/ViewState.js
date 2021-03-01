/**
 * This class is abstract,
 */
export class ViewState {
    constructor(game, uiController, inputController) {
        this.game = game;
        this.uiController = uiController;
        this.inputController = inputController;
        this.isSetup = false;
    }

    async setup() {
        console.log("super setup")
    }

    async enable() {
        console.log("enable")
    }

    async disable() {

    }
}