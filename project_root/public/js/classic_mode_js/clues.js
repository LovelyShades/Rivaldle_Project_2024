import { translations } from '../classic_mode_js/language.js';
import { numberToChinese } from "/js/global_js/num_to_chinese.js";

class Clues {
    constructor() {
        this.language = localStorage.getItem('language');
        this.initialize();
    }

    async initialize() {
        this.language = localStorage.getItem('language');
        this.key = 'numTries';
        this.getNumTries();
        this.appendClueTries();
        this.listenForCharacterSelect();
        this.listenForWin();
        this.fetchData('./daily_classic_character').then((data) => {
            this.dailyCharacter = data;
            this.silhoutteActive = false;
            this.ultActive = false;
        });
    }

    listenForCharacterSelect() {
        document.addEventListener('characterSelected', () => {
            this.updateStorage();
            this.updateTries();
        });
    }

    async fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
            return response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    getNumTries() {
        this.key = 'numTries';
        this.storedTries = localStorage.getItem(this.key);

        if (this.storedTries === null || this.storedTries === undefined) {
            // If not found in localStorage, initialize it to 0
            this.storedTries = 0;
            localStorage.setItem(this.key, JSON.stringify(this.storedTries));
        } else {
            // Parse the retrieved string as a number
            this.storedTries = JSON.parse(this.storedTries);
        }
    }

    updateStorage() {
        this.storedTries += 1;
        localStorage.setItem(this.key, JSON.stringify(this.storedTries));
    }

    appendClueTries() {
        this.appendNumTriesUntilSilhoutte();
        this.appendNumTriesUntilUlt();
    }

    appendNumTriesUntilSilhoutte() {
        const clueContainer = document.getElementById('clueSilhoutteSubContainer');
        this.numTriesLeftUntilSulhoutteClue = 7;

        if (this.numTriesLeftUntilSulhoutteClue - this.storedTries > 0) {
            this.numTriesLeftUntilSulhoutte = document.createElement('div');
            this.numTriesLeftUntilSulhoutte.className = 'clue2';
            this.numTriesLeftUntilSulhoutte.style.fontSize = 'medium';
            const triesLeft = this.numTriesLeftUntilSulhoutteClue - this.storedTries;
            this.numTriesLeftUntilSulhoutte.setAttribute("data-translate", "triesUntilSilhouette");
            let translationKey = this.numTriesLeftUntilSulhoutte.getAttribute("data-translate");
            let translatedText = this.getTranslation(translationKey, this.language);
            translatedText = translatedText.replace("{tries}", this.translatedNumber(triesLeft));
            this.numTriesLeftUntilSulhoutte.removeAttribute("data-translate")
            this.numTriesLeftUntilSulhoutte.innerHTML = translatedText;

            // Dynamically update the text while supporting translation placeholders
            clueContainer.append(this.numTriesLeftUntilSulhoutte);
        } else {
            this.activateSilhoutteImage();
        }        
    }
    getTranslation(key, lang ) {
        return translations[lang]?.[key] || key; // Fallback to key if translation is missing
    }

    appendNumTriesUntilUlt() {
        const clueContainer = document.getElementById('clueUltSubContainer');
        this.numTriesUntilUltClue = 5;

        if (this.numTriesUntilUltClue - this.storedTries > 0) {
            this.numTriesLeftUntilUlt = document.createElement('div');
            this.numTriesLeftUntilUlt.className = 'clue2';
            this.numTriesLeftUntilUlt.style.fontSize = 'medium';
            const triesLeft = this.numTriesUntilUltClue - this.storedTries;
            this.numTriesLeftUntilUlt.setAttribute("data-translate", "triesUntilUlt");
            let translationKey = this.numTriesLeftUntilUlt.getAttribute("data-translate");
            let translatedText = this.getTranslation(translationKey, this.language);
            translatedText = translatedText.replace("{tries}", this.translatedNumber(triesLeft));
            this.numTriesLeftUntilUlt.removeAttribute("data-translate")
            this.numTriesLeftUntilUlt.innerHTML = translatedText;
            clueContainer.append(this.numTriesLeftUntilUlt);
        } else {
            this.activateUltImage();
        }
    }

    updateTries() {
        if (this.numTriesLeftUntilSulhoutteClue - this.storedTries > 0) {
            const triesLeft = this.numTriesLeftUntilSulhoutteClue - this.storedTries;
            this.numTriesLeftUntilSulhoutte.setAttribute("data-translate", "triesUntilSilhouette");
            let translationKey = this.numTriesLeftUntilSulhoutte.getAttribute("data-translate");
            let translatedText = this.getTranslation(translationKey, this.language);
            translatedText = translatedText.replace("{tries}", this.translatedNumber(triesLeft));
            this.numTriesLeftUntilSulhoutte.removeAttribute("data-translate")
            this.numTriesLeftUntilSulhoutte.innerHTML = translatedText;
        } else if (this.numTriesLeftUntilSulhoutte) {
            this.activateSilhoutteImage();
            this.numTriesLeftUntilSulhoutte.remove();
            this.numTriesLeftUntilSulhoutte = null;
        }

        if (this.numTriesUntilUltClue - this.storedTries > 0) {
            const triesLeft = this.numTriesUntilUltClue - this.storedTries;
            this.numTriesLeftUntilUlt.setAttribute("data-translate", "triesUntilUlt");
            let translationKey = this.numTriesLeftUntilUlt.getAttribute("data-translate");
            let translatedText = this.getTranslation(translationKey, this.language);
            translatedText = translatedText.replace("{tries}", this.translatedNumber(triesLeft));
            this.numTriesLeftUntilUlt.removeAttribute("data-translate")
            this.numTriesLeftUntilUlt.innerHTML = translatedText;
        } else if (this.numTriesLeftUntilUlt) {
            this.activateUltImage();
            this.numTriesLeftUntilUlt.remove();
            this.numTriesLeftUntilUlt = null;
        }
    }

    activateSilhoutteImage() {
        this.silhoutteImageIcon = document.getElementById('silhoutteImg');
        this.silhoutteImageIcon.className += 'activeImage'
        this.addSilhoutteListener();
    }
    activateUltImage() {
        this.ultImgIcon = document.getElementById('ultImg');
        this.ultImgIcon.className += 'activeImage'
        this.addUltListener();
    }

    addSilhoutteListener() {
        const silhouetteIcon = document.getElementById('silhoutteImg');

        if (silhouetteIcon) {
            silhouetteIcon.addEventListener('click', () => {
                this.onSilhouetteClick();
            });
        }

    }
    addUltListener() {
        const ultIcon = document.getElementById('ultImg');

        if (ultIcon) {
            ultIcon.addEventListener('click', () => {
                this.onUltClick();
            });
        }
    }

    onSilhouetteClick() {
        if (this.silhoutteActive) return;
        if (this.ultName) {
            this.ultName.remove();
            this.ultName = null;
            this.ultActive = false;
        }
        const clueBoxContainer = document.getElementById('activeHeaderBoxContainer');
        this.silhoutteImage = document.createElement('img');
        this.silhoutteImage.className = 'characterSilhoutteImg'
        this.silhoutteImage.src = `/_images/character_images/hero_profile_images/silhouette_character_image/${this.dailyCharacter.translations['en'].name.replace(/\s+/g, '')}.png`;
        clueBoxContainer.append(this.silhoutteImage)
        this.silhoutteActive = true;
    }

    onUltClick() {
        if (this.ultActive) return;
        if (this.silhoutteImage) {
            this.silhoutteImage.remove();
            this.silhoutteImage = null;
            this.silhoutteActive = false;
        }
        const clueBoxContainer = document.getElementById('activeHeaderBoxContainer');
        this.ultName = document.createElement('div');
        this.ultName.className = 'clueContainer';
        this.ultName.style.fontSize = 'xx-large'
        this.ultName.innerHTML = this.dailyCharacter.translations[this.language].ult
        clueBoxContainer.append(this.ultName);

        this.ultActive = true;
    }

    listenForWin() {
        document.addEventListener('correctCharacterGuessed', (event) => {
            this.unlockClues()
        });
    }

    unlockClues() {
        if (this.numTriesLeftUntilUlt) {
            this.numTriesLeftUntilUlt.innerHTML = '';
            this.activateUltImage();
        }
        if (this.numTriesLeftUntilSulhoutte) {
            this.numTriesLeftUntilSulhoutte.innerHTML = '';
            this.activateSilhoutteImage();
        }
    }
    
    translatedNumber(number){
        if(this.language != 'zh'){
            return number;
        } 
        return numberToChinese(number);
    }
}


const clues = new Clues();
