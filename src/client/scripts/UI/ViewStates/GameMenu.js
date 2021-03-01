import {ViewState} from "../ViewState";

export class GameMenuViewState extends ViewState {
    constructor(game, uiController, inputController) {
        super(game, uiController, inputController);
        this.gameMenuUI = uiController.uiElements.gameMenuUI;

        this.gameMenuUI.buttons["back-to-game"].addEventListener("click", () => {
            uiController.changeViewState(null);
        })

        this.gameMenuUI.buttons["random-nick"].addEventListener("click", () => {
            //TODO
        })

    }

    async disable() {
        await super.disable();
        this.gameMenuUI.hide();
    }
}