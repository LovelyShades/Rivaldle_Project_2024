class Tos {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.initializeOverlay();
        this.hasBeenLoaded();
    }

    initializeOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.className = 'dark-overlay-tos'
        document.body.appendChild(this.overlay)
    }

    activateOverlay() {
        this.overlay.style.display = 'block'
        document.body.style.overflowY = 'hidden';
        document.documentElement.style.overflowY = 'hidden';
    }

    deActivateOverlay() {
        this.overlay.style.display = 'none'
        document.body.style.overflowY = '';
        document.documentElement.style.overflowY = '';
    }

    addTosContainer() {
        this.tosContainer = document.getElementById('tos_container');
        this.tosContainer.style.display = 'flex'
        this.activateOverlay();
    }

    removeTosContainer(){
        this.tosContainer.style.display = 'none'
    }

    hasBeenLoaded(){
        this.key = "tosHasBeenLoaded";
        const tosHasBeenLoadedInSorage = localStorage.getItem(this.key);
        if(tosHasBeenLoadedInSorage){
            return;
        }
        this.addTosContainer();
        this.listenForAccept();
    }

    storeTermsAcceptance(){
        localStorage.setItem(this.key, 'True');
    }

    listenForAccept() {
        const button = document.getElementById('accept_terms');
        if (button) {
            button.addEventListener('click', () => {
                this.deActivateOverlay();
                this.removeTosContainer();
                this.storeTermsAcceptance();
            });
        }
    }
}

const tos = new Tos();