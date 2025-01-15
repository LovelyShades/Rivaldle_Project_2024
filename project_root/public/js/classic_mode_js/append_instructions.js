class AppendInstrustions {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.instructionsBox = document.getElementById('game_instructions_container');
        this.loadActivationStatus();
        if(this.isActivated == false) return;
        this.checkLocalStorageOnLoad();
        this.listenForCharacterSelect();
    }

    listenForCharacterSelect() {
        if (this.isActivated) return;

        document.addEventListener('characterSelected', (event) => {
            if (!this.isActivated) {
                this.checkX();
                this.showInstructionsBox();
            }
        });
    }

    getCurrentPageKey() {
        const path = window.location.pathname;
        return `isInstructionsActive_${path}`;
    }

    checkLocalStorageOnLoad() {
        if (this.isActivated) {
            this.checkX();
            this.showInstructionsBox();
        }
    }

    storeActivationStatus() {
        const pageKey = this.getCurrentPageKey();
        localStorage.setItem(pageKey, JSON.stringify(this.isActivated));
    }

    loadActivationStatus() {
        const pageKey = this.getCurrentPageKey();
        const storedStatus = localStorage.getItem(pageKey);

        if (storedStatus === null) {
            this.isActivated = false;
            this.storeActivationStatus();
        } else if (storedStatus === "true") {
            this.isActivated = true;
        } else {
            this.isActivated = false;
        }
    }

    checkX() {
        const x = document.getElementById('game_instructions_container_img');
        this.listenForXHover(x);
        this.listenForXClick(x);
    }

    showInstructionsBox() {
        this.isActivated = true;
        this.storeActivationStatus();
        this.instructionsBox.style.display = 'flex';
    }

    removeInstructionsBox() {
        this.isActivated = false;
        this.storeActivationStatus();
        this.instructionsBox.style.display = 'none';
    }

    listenForXHover(x) {
        x.addEventListener('mouseenter', () => {
            x.classList.add('hover-effect');
        });
    }

    listenForXClick(x) {
        x.addEventListener('click', () => {
            this.removeInstructionsBox();
        });
    }
}

const appendInstructions = new AppendInstrustions();
