class AppendInstrustions {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.language = localStorage.getItem('language')
        if(this.hasBeenRemoved() == true) return;
        this.instructionsBox = document.getElementById('game_instructions_container');
        this.loadActivationStatus();
        this.checkLocalStorageOnLoad();
        this.listenForCharacterSelect();
    }

    listenForCharacterSelect() {
        if(this.hasBeenRemoved() == true) return;
        if (this.isActivated) return;

        document.addEventListener('characterSelected', (event) => {
            if(this.hasBeenRemoved() == true) return;
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

    getCurrentDeletionKey() {
        const path = window.location.pathname;
        return `isInstructionsRemoved_${path}`;
    }

    checkLocalStorageOnLoad() {
        if (this.isActivated) {
            this.checkX();
            this.showInstructionsBox();
        }
    }

    hasBeenRemoved(){
        const path = this.getCurrentDeletionKey();
        const storedStatus = localStorage.getItem(path);

        if(storedStatus === "true") return true;
    }
    storeActivationStatus() {
        const pageKey = this.getCurrentPageKey();
        localStorage.setItem(pageKey, JSON.stringify(this.isActivated));
    }

    storeRemovalStatus(){
        const path = this.getCurrentDeletionKey();
        localStorage.setItem(path, JSON.stringify(true));
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
        this.storeRemovalStatus();
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
