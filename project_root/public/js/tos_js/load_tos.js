class Tos {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.initializeOverlay();
        this.hasBeenLoaded();
    }

    initializeOverlay() {
        this.overlay = document.getElementById('tos_overlay');
        if (!this.overlay) {
            // If no overlay exists, create one
            this.overlay = document.createElement('div');
            this.overlay.id = 'tos_overlay';
            document.body.appendChild(this.overlay);
        }
    }

    activateOverlay() {
        this.overlay.style.display = 'block';
        document.body.style.overflowY = 'hidden';  // Prevent scrolling when TOS is visible
        document.documentElement.style.overflowY = 'hidden';  // Prevent scrolling when TOS is visible
    }

    deActivateOverlay() {
        this.overlay.style.display = 'none';
        document.body.style.overflowY = '';  // Restore default scrolling
        document.documentElement.style.overflowY = '';  // Restore default scrolling
    }

    addTosContainer() {
        this.tosContainer = document.getElementById('tos_container');
        this.tosContainer.style.display = 'flex';  // Make TOS container visible
        this.activateOverlay();
    }

    removeTosContainer() {
        this.tosContainer.style.display = 'none';
        this.deActivateOverlay();  // Remove overlay when container is hidden
    }

    hasBeenLoaded() {
        this.key = "tosHasBeenLoaded";
        const tosHasBeenLoadedInStorage = localStorage.getItem(this.key);
        if (tosHasBeenLoadedInStorage) {
            return;
        }
        this.addTosContainer();  // Show TOS container if it's the first time loading
        this.listenForAccept();
    }

    storeTermsAcceptance() {
        localStorage.setItem(this.key, 'True');  // Store user's acceptance of the TOS
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

// Functionality for the "Skip to Bottom" button
document.getElementById('skip_to_bottom').addEventListener('click', function() {
    var container = document.getElementById('tos_container');
    container.scrollTop = container.scrollHeight;  // Scroll to the bottom of the TOS container
});
