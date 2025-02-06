
class About {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.getIcons();
        this.listenForClicks();
        this.howToPlayPopupIsActive = false;
    }

    getIcons() {
        this.howToPlayIcon = document.getElementById('how_to_play');
    }

    listenForClicks() {
        // How To Play icon click
        this.howToPlayIcon.addEventListener('click', () => {
            this.appendOverlay();
            this.showHowToPlayContainer();
            this.howToPlayPopupIsActive = true;
        });
    }

    getBody() {
        this.body = document.body;
    }

    appendOverlay() {
        this.getBody();
        this.darkOverlay = document.createElement('div');
        this.darkOverlay.className = 'overlay';
        this.darkOverlay.style.zIndex = '999';
        document.body.style.overflowY = 'hidden';
        document.documentElement.style.overflowY = 'hidden';
        this.body.append(this.darkOverlay);
    }

    removeOverlay() {
        this.darkOverlay.remove();
        document.body.style.overflowY = '';
        document.documentElement.style.overflowY = '';
    }

    getHowToPlayContainer() {
        this.howToPlayContainer = document.getElementById('how_to_play_container');
    }

    showHowToPlayContainer() {
        this.getHowToPlayContainer();
        this.howToPlayContainer.style.display = 'flex';
        this.listenForXClick();
    }

    removeContainer() {
        if (this.howToPlayPopupIsActive) {
            this.howToPlayContainer.style.display = 'none';
            this.howToPlayPopupIsActive = false;
        }
    }

    listenForXClick() {
        const xIcons = document.querySelectorAll('.x_icon, .language-popup-x-icon');
        xIcons.forEach((x) => {
            x.addEventListener('click', () => {
                this.removeOverlay();
                this.removeContainer();
            });
        });
    }
}

const about = new About();
