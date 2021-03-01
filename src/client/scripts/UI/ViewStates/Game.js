import {ViewState} from "../ViewState";

export class GameViewState extends ViewState {
    constructor(game, uiController, inputController) {
        super(game, uiController, inputController);



    }

    async enable() {
        await super.enable();

    }

    async disable() {
        await super.disable();

    }
}