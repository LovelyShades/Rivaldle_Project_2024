import { globalTranslations } from '../global_js/language_js/language.js';

class StatBox {
    constructor() {
        this.initalize();
        this.numberOfTries = 0;
    }

    initalize() {
        this.language = localStorage.getItem('language')
        this.isGameCompleted()
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

    getTranslation(key, lang ) {
        return globalTranslations[lang]?.[key] || key; // Fallback to key if translation is missing
    }

    isGameCompleted() {
        document.addEventListener('correctCharacterGuessed', async (event) => {
            this.dailyCharacter = event.detail.character;
            this.nextMode = event.detail.mode;
            this.numberOfTries = event.detail.tries;
            this.appendStatBoxContainter();
            this.appendStatBoxItems(this.statBoxContainter)
        });
    }

    getTime() {
        const centralTimeZone = "America/Chicago";
    
        // Get current Central Time
        const now = new Date(new Date().toLocaleString("en-US", { timeZone: centralTimeZone }));
    
        // Get next midnight in Central Time
        const midnight = new Date(new Date(now).toLocaleString("en-US", { timeZone: centralTimeZone }));
        midnight.setHours(24, 0, 0, 0); // Set to midnight in Central Time
    
        // Calculate time difference in milliseconds
        const timeUntilMidnight = midnight - now;
    
        // Convert milliseconds to hours, minutes, and seconds
        const hours = Math.floor((timeUntilMidnight / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeUntilMidnight / (1000 * 60)) % 60);
        const seconds = Math.floor((timeUntilMidnight / 1000) % 60);
    
        // Format the time remaining
        this.formattedTime = `${hours.toString().padStart(2, '0')}:` +
            `${minutes.toString().padStart(2, '0')}:` +
            `${seconds.toString().padStart(2, '0')}`;
    }
    
    appendStatBoxContainter() {
        const gameCompletedContainer = document.getElementById('game_completed_container');
        this.statBoxContainter = document.createElement('div');
        this.statBoxContainter.id = 'stat_box_container'
        this.statBoxContainter.className = 'stat_box_container'
        gameCompletedContainer.append(this.statBoxContainter)

    }

    appendStatBoxItems(container) {
        this.appendHeaderText(container);
        this.appendCharacter(container);
        this.appendTries(container);
        this.appendTimeHeader(container);
        this.appendTime(container);
        this.appendFullCharacterImage(container);
        this.appendFooterLine(container);
        this.appendModeLink(container);

        this.scrollToStatBox();
    }

    appendHeaderText(container) {
        const headerText = document.createElement('div');
        headerText.className = 'stat_box_text'
        headerText.style.fontSize = "xx-large";
        headerText.setAttribute("data-translate", "victory")
        let translationKey = headerText.getAttribute("data-translate");
        let translatedText = this.getTranslation(translationKey, this.language);
        headerText.innerHTML = translatedText
        headerText.id = 'header_text'
        container.append(headerText);
    }

    appendCharacter(container) {
        const characterImageContainer = document.createElement('div');
        characterImageContainer.className = 'guessed_character_stat_container'
        container.append(characterImageContainer);

        const characterImage = document.createElement('img');
        characterImage.className = 'guessed_character_stat_icon'
        const characterNameWithoutSpaces = this.dailyCharacter.translations['en'].name.replace(/\s+/g, '');
        characterImage.src = `/_images/character_images/character_icon_images/${characterNameWithoutSpaces}.png`;
        characterImageContainer.append(characterImage);

        const characterText = document.createElement('div');
        characterText.className = 'stat_box_text'

        characterText.setAttribute("data-translate", "youGuessed");
        let translationKey = characterText.getAttribute("data-translate");
        let translatedText = this.getTranslation(translationKey, this.language);
        translatedText = translatedText.replace("{char}", this.dailyCharacter.translations[this.language].name);
        characterText.removeAttribute("data-translate")
        characterText.innerHTML = translatedText;

        characterText.style.color = 'black';
        characterImageContainer.append(characterText);
    }

    appendTries(container) {
        const numTriesText = document.createElement('div');
        numTriesText.className = 'stat_box_text'

        numTriesText.setAttribute("data-translate", "numTries");
        let translationKey = numTriesText.getAttribute("data-translate");
        let translatedText = this.getTranslation(translationKey, this.language);
        translatedText = translatedText.replace("{tries}", this.numberOfTries);
        numTriesText.removeAttribute("data-translate")
        numTriesText.innerHTML = translatedText;

        container.append(numTriesText);
    }

    appendTimeHeader(container) {
        const timeHeader = document.createElement('div');
        timeHeader.className = 'stat_box_text';
        timeHeader.style.fontSize = 'x-large'
        timeHeader.innerHTML = 'New hero in:'

        timeHeader.setAttribute("data-translate", "newHeroIn");
        let translationKey = timeHeader.getAttribute("data-translate");
        let translatedText = this.getTranslation(translationKey, this.language);
        timeHeader.removeAttribute("data-translate")
        timeHeader.innerHTML = translatedText;

        timeHeader.id = 'time_header';
        container.append(timeHeader);
    }

    appendTime(container) {
        const timeUntilReset = document.createElement('div');
        timeUntilReset.className = 'stat_box_text';
        timeUntilReset.style.fontSize = 'xx-large'
        container.append(timeUntilReset);

        const updateTime = () => {
            this.getTime();
            timeUntilReset.innerHTML = this.formattedTime;
        };

        updateTime();
        setInterval(updateTime, 1000);
    }

    appendFullCharacterImage(container) {
        const fullCharacterImage = document.createElement('img');
        fullCharacterImage.className = 'guessed_character_full_image'
        const characterNameWithoutSpaces = this.dailyCharacter.translations['en'].name.replace(/\s+/g, '');
        fullCharacterImage.src = `/_images/character_images/hero_profile_images/character_image/${characterNameWithoutSpaces}.png`;
        container.append(fullCharacterImage);

    }

    appendFooterLine(container) {
        const footerLine = document.createElement('div');
        footerLine.className = 'footer_line';
        container.append(footerLine);
    }

    appendModeLink(container) {
        const modeLink = document.createElement('a');
        modeLink.className = 'mode_link_box';
        modeLink.setAttribute("data-translate", "nextMode");
        let translationKey = modeLink.getAttribute("data-translate");
        let translatedText = this.getTranslation(translationKey, this.language);
        modeLink.removeAttribute("data-translate")
        modeLink.innerHTML = translatedText;
        modeLink.href = `/${this.nextMode}`;
        modeLink.target = '_self';

        container.append(modeLink);
    }

    scrollToStatBox() {
        const victoryStats = document.getElementById('stat_box_container');
        setTimeout(() => {
            victoryStats.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 1000);
    }
}

const statBox = new StatBox();


