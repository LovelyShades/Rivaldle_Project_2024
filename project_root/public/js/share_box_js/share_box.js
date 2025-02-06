import { globalTranslations } from '../global_js/language_js/language.js';

class ShareBox{
    constructor(){
        this.language = localStorage.getItem('language');
        this.initialize()
    }

    initialize(){
        this.isGameCompleated();
    }
    
    getTranslation(key, lang ) {
        return globalTranslations[lang]?.[key] || key; // Fallback to key if translation is missing
    }

    isGameCompleated() {
        document.addEventListener('correctCharacterGuessed', (event) => {
            this.appendShareBox();
        });
    }

    appendShareBox(){
        const shareBoxContainer = document.getElementById('share_box_contianer')
        const shareBox = document.createElement('div');
        shareBox.className = 'shareBox'
        shareBoxContainer.append(shareBox);

        this.appendHeaderText(shareBox);
        this.appendWebUrl(shareBox);
        this.copyButton(shareBox);
    }

    appendHeaderText(shareBox){
        const headerText = document.createElement('div');
        headerText.className = 'shareBoxText'
        headerText.style.fontSize ='xx-large'

        headerText.setAttribute("data-translate", "shareHeader");
        let translationKey = headerText.getAttribute("data-translate");
        let translatedText = this.getTranslation(translationKey, this.language);

        translatedText = translatedText.replace("{tries}", this.getTriesText())
        translatedText = translatedText.replace("{mode}", this.getMode())
        headerText.removeAttribute("data-translate")
        headerText.innerHTML = translatedText;

        shareBox.append(headerText);
    }

    appendWebUrl(shareBox){
        const webUrlText = document.createElement('div');
        webUrlText.className = 'shareBoxText'
        webUrlText.style.fontSize ='x-large'
        webUrlText.innerHTML = 'https://rivaldle.com'
        shareBox.append(webUrlText);
    }

    copyButton(shareBox) {
        let textToCopy = this.getTranslation("copyText", this.language);
        textToCopy = textToCopy.replace("{tries}", this.getTriesText())
        textToCopy = textToCopy.replace("{mode}", this.getMode())
        const copyButton = document.createElement('button');
        copyButton.innerHTML = this.getTranslation("share", this.language);
        copyButton.className = 'button-43'
        copyButton.style.cursor = 'pointer';
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(textToCopy).then(() => {
                copyButton.innerHTML = this.getTranslation("copy", this.language);
                setTimeout(() => {
                    copyButton.innerHTML = this.getTranslation("share", this.language);
                }, 1500);
                }).catch((error) => {
                console.error('Failed to copy text:', error);
            });
        });
    
        shareBox.append(copyButton);
    }
    
    // Function to get mode from URL and translate it
    getMode() {
        let mode = window.location.pathname.replace('/', '').replace('_', ' ');

        // Define a mapping of mode names to translation keys
        const modeTranslations = {
            "classic": "classicMode",
            "silhoutte": "silhoutteMode",
            "emoji": "emojiMode",
            "ability": "abilityMode"
        };

        // Check if mode exists in the translations and fetch the localized string
        let translationKey = modeTranslations[mode];
        if (translationKey) {
            return this.getTranslation(translationKey, this.language);
        }

        // Fallback to English mode name if not found
        return mode;
    }


    
    getTries() {
        const pageKey = this.getCurrentPageKey();
        const storedCharacters = JSON.parse(localStorage.getItem(pageKey)) || [];
        return storedCharacters.length;
    }

    getTriesText() {
        const tries = this.getTries();
        if (tries === 1) {
            console.log(tries)
            return this.getTranslation('oneShot', this.language);
        }else{
            return `${tries} ${this.getTranslation('shareTries', this.language)}`;
        }
    }

    getCurrentPageKey() {
        const path = window.location.pathname;
        return `searched_characters_${path}`;
    }
}

const shareBox = new ShareBox();