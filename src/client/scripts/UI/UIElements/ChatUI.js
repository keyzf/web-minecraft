export class ChatUI {
    constructor() {
        this.element = document.getElementById("chatBox");
        this.inputContainer = document.getElementById("chatEnterContainer");
        this.chatInput = this.inputContainer.getElementsByTagName("input")[0];
    }

    scrollToBottom(el) {
        el.scrollTop = el.scrollHeight;
    }

    isElementScrolledToBottom(el) {
        return el.scrollTop >= el.scrollHeight - el.offsetHeight;
    }

    log(msg) {
        let elem = document.createElement("div");
        elem.innerHTML = msg + "<br>";
        let bottomLocked = this.isElementScrolledToBottom(this.element);
        this.element.append(elem);
        if (bottomLocked)
            this.scrollToBottom(this.element);
    }

    focus() {
        this.chatInput.focus();
    }

    display() {
        this.inputContainer.classList.remove("hidden");
    }

    hide() {
        this.inputContainer.classList.add("hidden");
        this.chatInput.blur();
    }
}