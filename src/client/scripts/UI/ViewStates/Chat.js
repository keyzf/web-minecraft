import {ViewState} from "../ViewState";

export class ChatViewState extends ViewState {
    constructor(game, uiController, inputController) {
        super(game, uiController, inputController);
        this.chatUI = this.uiController.uiElements.chatUI;

        this.history = [""];
        this.histState = 0;

        this.chatUI.chatInput.addEventListener("keyup", (event) => {
            event.preventDefault();
            if (event.code === "Enter") {
                this.chatUI.hide();
                this.command(this.chatUI.chatInput.value)
                this.chatUI.chatInput.value = "";
                uiController.changeViewState(null);
            } else if (event.code === "ArrowUp") {
                this.chatGoBack();
            } else if (event.code === "ArrowDown") {
                this.chatGoBack();
            }
        })

        window.addEventListener("keyup", async (event) => {
            event.preventDefault();
            if (event.code === "Escape")
                await uiController.changeViewState(null);
        });
    }

    chatGoBack() {
        if (this.histState > 0) {
            this.histState--;
            $(".com_i").val(this.history[this.histState]);
        }
    }

    chatGoForward() {
        if (this.histState < this.history.length - 1) {
            this.histState++;
            $(".com_i").val(this.history[this.histState]);
        }
    }

    command(com) {
        if (com !== "") {
            this.history[this.history.length - 1] = com;
            this.history.push("");
            this.histState = this.history.length - 1;
            return this.game.socket.emit("command", com);
        }
    }

    async disable() {
        await super.disable();
        this.chatUI.hide();
    }

    async enable() {
        await super.enable();
        this.chatUI.display();
        this.chatUI.focus();
    }

    async setup() {
        await super.setup();
    }
}