class About {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.getIcons();
        this.listenForClicks();
        this.howToPlayPopupIsActive = false;
        this.streakPopupIsActive = false;
    }

    getIcons() {
        this.howToPlayIcon = document.getElementById('how_to_play');
        this.streakIcon = document.getElementById('streak_icon');  // Add streak icon reference
    }

    listenForClicks() {
        // How To Play icon click
        this.howToPlayIcon.addEventListener('click', () => {
            this.appendOverlay();
            this.showHowToPlayContainer();
            this.howToPlayPopupIsActive = true;
        });

        // Streak icon click
        this.streakIcon.addEventListener('click', () => {
            this.appendOverlay();
            this.showStreakContainer();
            this.streakPopupIsActive = true;
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

    getStreakContainer() {
        this.streakContainer = document.getElementById('streak_container');  // Add streak container reference
    }

    showHowToPlayContainer() {
        this.getHowToPlayContainer();
        this.howToPlayContainer.style.display = 'flex';
        this.listenForXClick();
    }

    showStreakContainer() {
        this.getStreakContainer();
        this.streakContainer.style.display = 'flex';  // Show streak popup
        this.listenForXClick();
    }

    removeContainer() {
        if (this.howToPlayPopupIsActive) {
            this.howToPlayContainer.style.display = 'none';
            this.howToPlayPopupIsActive = false;
        }
        if (this.streakPopupIsActive) {
            this.streakContainer.style.display = 'none';  // Hide streak popup
            this.streakPopupIsActive = false;
        }
    }

    listenForXClick() {
        const xIcons = document.querySelectorAll('.x_icon, .language-popup-x-icon, .streak-popup-x-icon');  // Add streak popup X icon
        xIcons.forEach((x) => {
            x.addEventListener('click', () => {
                this.removeOverlay();
                this.removeContainer();
            });
        });
    }
}

const about = new About();
