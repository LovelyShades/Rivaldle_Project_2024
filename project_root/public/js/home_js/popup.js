class Popup {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.getIcons();
        this.listenForClicks();
        this.aboutPopupIsActive = false;
        this.howToPlayPopupIsActive = false;
        this.languagePopupIsActive = false; // New
        this.currentLanguage = localStorage.getItem('language') || 'en'; // Default language is 'en'
    }

    getIcons() {
        this.aboutIcon = document.getElementById('about_icon');
        this.howToPlayIcon = document.getElementById('how_to_play_icon');
        this.languageIcon = document.getElementById('language_icon'); // New
    }

    getBody() {
        this.body = document.body;
    }

    listenForClicks() {
        const aboutIcon = this.aboutIcon;
        aboutIcon.addEventListener('click', () => {
            this.appendOverlay();
            this.showAboutContainer();
            this.aboutPopupIsActive = true;
        });

        const howToPlayIcon = this.howToPlayIcon;
        howToPlayIcon.addEventListener('click', () => {
            this.appendOverlay();
            this.showHowToPlayContainer();
            this.howToPlayPopupIsActive = true;
        });

        // Listen for Language Icon Click
        const languageIcon = this.languageIcon;
        languageIcon.addEventListener('click', () => {
            this.appendOverlay();
            this.showLanguageContainer();
            this.languagePopupIsActive = true;
        });
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

    getAboutContainer() {
        this.aboutContainer = document.getElementById('about_container');
    }

    getHowToPlayContainer() {
        this.howToPlayContainer = document.getElementById('how_to_play_container');
    }

    getLanguageContainer() {
        this.languageContainer = document.getElementById('language_container'); // New
    }

    showAboutContainer() {
        this.getAboutContainer();
        this.aboutContainer.style.display = 'flex';
        this.listenForXClick();
    }

    showHowToPlayContainer() {
        this.getHowToPlayContainer();
        this.howToPlayContainer.style.display = 'flex';
        this.listenForXClick();
    }

    showLanguageContainer() { // New
        this.getLanguageContainer();
        this.languageContainer.style.display = 'flex';
        this.listenForXClick();
        this.listenForLanguageSelection(); // New
    }

    removeContainer() {
        if (this.aboutPopupIsActive) {
            this.aboutContainer.style.display = 'none';
            this.aboutPopupIsActive = false;
        }
        if (this.howToPlayPopupIsActive) {
            this.howToPlayContainer.style.display = 'none';
            this.howToPlayPopupIsActive = false;
        }
        if (this.languagePopupIsActive) { // New
            this.languageContainer.style.display = 'none';
            this.languagePopupIsActive = false;
        }
    }

    listenForXClick() {
        const xIcons = document.querySelectorAll('.x_icon');
        xIcons.forEach((x) => {
            x.addEventListener('click', () => {
                this.removeOverlay();
                this.removeContainer();
            });
        });
    }

    listenForLanguageSelection() { // New
        const languageButtons = document.querySelectorAll('.language-button');
        languageButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                const selectedLanguage = e.target.dataset.lang;
                console.log(`Language selected: ${selectedLanguage}`);
                
                // Update the language in localStorage
                localStorage.setItem('language', selectedLanguage);
                
                // Update page content with selected language
                this.updatePageContent(selectedLanguage);
                
                // Close the language popup
                this.removeOverlay();
                this.removeContainer();
            });
        });
    }

    updatePageContent(language) {
        const langData = translations[language];

        // Update title
        document.title = langData.title;

        // Update about section
        document.getElementById('about_header').textContent = langData.aboutHeader;
        document.getElementById('about_text1').textContent = langData.aboutText1;
        document.getElementById('about_text2').textContent = langData.aboutText2;
        document.getElementById('about_text3').textContent = langData.aboutText3;
        document.getElementById('about_text4').textContent = langData.aboutText4;

        // Update how to play section
        document.getElementById('how_to_play_header').textContent = langData.howToPlayHeader;
        document.getElementById('how_to_play_text1').textContent = langData.howToPlayText1;
        document.getElementById('how_to_play_text2').textContent = langData.howToPlayText2;
        document.getElementById('how_to_play_text3').textContent = langData.howToPlayText3;

        // Update language section
        document.getElementById('select_language').textContent = langData.selectLanguage;
        document.getElementById('choose_language').textContent = langData.chooseLanguage;
    }
}

const popup = new Popup();
