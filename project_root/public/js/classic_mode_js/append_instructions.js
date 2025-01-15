class AppendInstrustions {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.loadActivationStatus()
        this.instructionsBox = document.getElementById('game_instructions_container');
        this.checkLocalStorageOnLoad();
        this.listenForCharacterSelect();
    }

    listenForCharacterSelect() {
        if (this.isActivated) return;
        document.addEventListener('characterSelected', (event) => {
            console.log(this.isActivated)
            if (this.isActivated == false){
                this.checkX()
                this.showInstructionsBox();    
            } 
        });
    }

    getCurrentPageKey() {
        const path = window.location.pathname;
        return `isInstructionsActive_${path}`;
    }

    checkLocalStorageOnLoad() {
        const pageKey = this.getCurrentPageKey();
        const storedCharacters = JSON.parse(localStorage.getItem(pageKey)) || [];
        
        if (storedCharacters.length > 0) {
            this.checkX()
        }
    }

    storeActivationStatus(){
        const pageKey = this.getCurrentPageKey();
        localStorage.setItem(pageKey, this.isActivated);
    }

    loadActivationStatus() {
        const pageKey = this.getCurrentPageKey();
        const storedStatus = localStorage.getItem(pageKey);
    
        if (storedStatus === null) {
            this.isActivated = false;
            localStorage.setItem(pageKey, JSON.stringify(false));
        } else if (storedStatus === "true") {
            console.log(localStorage.getItem(this.getCurrentPageKey()));
            this.isActivated = true;
        } else {
            this.isActivated = false;
        }
    }
        
    checkX(){
        const x = document.getElementById('game_instructions_container_img');
        this.listenForXHover(x);
        this.listenForXClick(x);

        this.showInstructionsBox();
    }

    showInstructionsBox() {
        this.isActivated = true;
        this.storeActivationStatus();
        this.instructionsBox.style.display = 'flex';
    }

    removeInstructionsBox() {
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
