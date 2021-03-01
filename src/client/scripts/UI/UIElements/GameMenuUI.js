export class GameMenuUI {
    constructor() {
        this.element = document.getElementsByClassName("gameMenu")[0];
        this.buttons = {
            "back-to-game": this.element.getElementsByClassName("back-to-game")[0],
            "achievements": this.element.getElementsByClassName("achievements")[0],
            "statistics": this.element.getElementsByClassName("statistics")[0],
            "options": this.element.getElementsByClassName("options")[0],
            "random-nick": this.element.getElementsByClassName("random-nick")[0],
        }

    }

    hide() {
        this.element.classList.add("hidden");
    }

    display() {
        this.element.classList.remove("hidden");
    }

}