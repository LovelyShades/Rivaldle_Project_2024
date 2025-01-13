class AppendSearchedCharacter {
    constructor() {
        this.initialize();
    }

    async initialize() {
        this.dailyCharacter = await this.fetchData('./daily_emoji_character');
        if (!this.dailyCharacter) {
            console.error('Failed to load dailyCharacter.');
            return;
        }
        this.loadStoredCharacters();
        this.listenForCharacterSelect();
    }

    listenForCharacterSelect() {
        document.addEventListener('characterSelected', (event) => {
            this.receivedCharacter = event.detail.character;
            this.saveCharacterToLocalStorage(this.receivedCharacter);
            this.appendSearchedCharacterBox();
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

    appendSearchedCharacterBox(character = this.receivedCharacter) {
        this.searchedCharacterBoxContainer = document.getElementById('searched_characters_container');
        if (!this.searchedCharacterBoxContainer) {
            console.error('Container element not found.');
            return;
        }

        const newBox = document.createElement('div');
        newBox.className = 'searched_character_box';

        const newBoxText = document.createElement('div');
        newBoxText.className = 'searched_character_text';
        newBoxText.innerHTML = character.name;

        const newBoxImg = document.createElement('img');
        newBoxImg.className = 'searched_character_image';
        newBoxImg.src = `/_images/character_images/character_icon_images/${character.name.replace(/\s+/g, '')}.png`;

        this.isCorrectCharacter(newBox, character);
        this.searchedCharacterBoxContainer.prepend(newBox);
        newBox.append(newBoxImg);
        newBox.append(newBoxText);
    }

    isCorrectCharacter(newBox, character = this.receivedCharacter) {
        if (character.name === this.dailyCharacter.name) {
            this.broadcastCorrectCharacter();
            this.appendConfetti();
            newBox.style.backgroundColor = '#4caf50';
            newBox.style.border = '3px solid #7aff6f';
        } else {
            newBox.style.backgroundColor = '#d32f2f';
            newBox.style.border = '3px solid #ff3c3b';
            newBox.classList.add('shake');

            setTimeout(() => {
                newBox.classList.remove('shake');
            }, 500);
        }
    }

    broadcastCorrectCharacter() {
        const event = new CustomEvent('correctCharacterGuessed', {
            detail: {
                character: this.dailyCharacter,
                mode: 'character_ability',
                tries: this.getStoredCharacterCount()
            },
        });
        document.dispatchEvent(event);
    }

    getStoredCharacterCount() {
        const pageKey = this.getCurrentPageKey();
        const storedCharacters = JSON.parse(localStorage.getItem(pageKey)) || [];
        return storedCharacters.length;
    }

    getCurrentPageKey() {
        const path = window.location.pathname;
        return `searched_characters_${path}`;
    }

    saveCharacterToLocalStorage(character) {
        const pageKey = this.getCurrentPageKey();
        const storedCharacters = JSON.parse(localStorage.getItem(pageKey)) || [];
        storedCharacters.push(character);
        localStorage.setItem(pageKey, JSON.stringify(storedCharacters));
    }

    loadStoredCharacters() {
        const pageKey = this.getCurrentPageKey();
        const storedCharacters = JSON.parse(localStorage.getItem(pageKey)) || [];
        storedCharacters.forEach((character) => {
            if (character && character.name) this.appendSearchedCharacterBox(character);
        });
    }

    appendConfetti() {
        confetti({
            particleCount: 250,
            spread: 120,
            origin: { y: 0.7 },
        });
    }
}

const appendSearchedCharacter = new AppendSearchedCharacter();
