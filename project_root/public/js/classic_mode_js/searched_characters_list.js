class SearchedCharacters {
    constructor() {
        this.initializeVariables();
        this.initialize();
    }

    async initialize() {
        try {
            this.marvelCharacters = await this.fetchData('./character_info');
            this.dailyCharacter = await this.fetchData('./daily_classic_character');
            this.loadStoredCharacters();
            this.initializeEventListeners();
        } catch (error) {
            console.error('Error during initialization:', error);
        }
    }

    initializeVariables() {
        this.marvelCharacters = [];
        this.dailyCharacter = null;
        this.receivedCharacter = null;
    }

    async fetchData(url) {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        return response.json();
    }

    initializeEventListeners() {
        document.addEventListener('characterSelected', (event) => {
            this.receivedCharacter = event.detail.character;
            this.initializeSearchHeaders();
            this.activateGameHeader();
            this.addRow(this.receivedCharacter);
            this.saveCharacterToLocalStorage(this.receivedCharacter);
        });
    }

    initializeSearchHeaders() {
        const headersContainer = document.getElementById('characterListHeadersContainer');
        if (headersContainer) headersContainer.style.display = 'flex';
    }

    activateGameHeader() {
        const headerBoxContainer = document.getElementById('headerBoxContainer');
        const activeHeaderBoxContainer = document.getElementById('activeHeaderBoxContainer');

        if (headerBoxContainer) headerBoxContainer.style.display = 'none';
        if (activeHeaderBoxContainer) activeHeaderBoxContainer.style.display = 'flex';
    }

    addRow(character) {
        const parentContainer = document.querySelector('.allGuessedCharacters');
        if (!parentContainer) return;

        const newRow = document.createElement('div');
        newRow.className = 'guessedCharactersContainer';

        this.addCharacterImageBox(newRow, character.name);
        this.addCharacterAttributes(newRow, character);

        parentContainer.prepend(newRow);
    }

    addCharacterImageBox(parent, characterName) {
        const image = document.createElement('img');
        image.src = `/_images/character_images/character_icon_images/${characterName.replace(/\s+/g, '')}.png`;
        image.alt = `${characterName} Icon`;
        image.className = 'guessedCharacterImageBox';

        parent.appendChild(image);
    }

    addCharacterAttributes(row, character) {
        const attributes = [
            'gender', 'species', 'affiliation', 'role', 'eyeColor', 'hairColor', 'hp'
        ];

        attributes.forEach(attr => {
            const value = character[attr];
            const box = this.addCharacterBox(row, value, attr, character);
            box.classList.add('hidden');
        });

        attributes.forEach((attr, index) => {
            setTimeout(() => {
                const box = row.querySelector(`.guessedCharacterBox[data-attribute="${attr}"]`);
                box.classList.remove('hidden');
            }, 250 * (index + 1));
        });
        setTimeout(() => {
            this.isCorrectCharacter(character);
        }, 250 * attributes.length + 250);
    }

    addCharacterBox(row, textContent, attribute, character) {
        const newBox = document.createElement('div');
        newBox.className = 'guessedCharacterBox';
        newBox.textContent = textContent;

        newBox.setAttribute('data-attribute', attribute);

        this.setBoxAppearance(newBox, attribute, character);
        this.addArrowIndicator(newBox, attribute, character);

        row.appendChild(newBox);
        return newBox;
    }

    setBoxAppearance(box, attribute, character) {
        const dailyValue = this.dailyCharacter[attribute];
        const characterValue = character[attribute];
    
        if (Array.isArray(dailyValue) && Array.isArray(characterValue)) {
            // Check for partial matches in the arrays
            const hasPartialMatch = characterValue.some(value => dailyValue.includes(value));
            const isMatching = JSON.stringify(characterValue) === JSON.stringify(dailyValue);
    
            box.style.backgroundColor = isMatching ? '#7aff6f' : hasPartialMatch ? '#ffff6f' : '#ff3c3b';
        } else {
            // Standard comparison for non-array attributes
            const isMatching = characterValue === dailyValue;
            box.style.backgroundColor = isMatching ? '#7aff6f' : '#ff3c3b';
        }
    }
    
    addArrowIndicator(box, attribute, character) {
        if (!['hp', 'dateOfOrigin'].includes(attribute)) return;

        const arrowImage = document.createElement('img');
        arrowImage.className = 'arrow';

        const comparison = character[attribute] - this.dailyCharacter[attribute];
        if (comparison === 0) return;
        arrowImage.src = comparison > 0
            ? '/_images/classic_mode_images/downArrow.png'
            : '/_images/classic_mode_images/upArrow.png';

        box.appendChild(arrowImage);
    }

    isCorrectCharacter(character) {
        if (character.name === this.dailyCharacter.name) {
            this.broadcastCorrectCharacter();
            confetti({
                particleCount: 250,
                spread: 120,
                origin: { y: 0.7 },
            });
        }
    }

    broadcastCorrectCharacter() {
        const event = new CustomEvent('correctCharacterGuessed', {
            detail: {
                character: this.dailyCharacter,
                mode: 'silhouette',
                tries: this.getStoredCharacterCount()
            }
        });
        document.dispatchEvent(event);
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

        if (storedCharacters.length > 0) {
            this.initializeSearchHeaders();
            this.activateGameHeader();
        }

        storedCharacters.forEach((character) => {
            if (character && character.name) this.addRow(character);
        });
    }

    getStoredCharacterCount() {
        const pageKey = this.getCurrentPageKey();
        const storedCharacters = JSON.parse(localStorage.getItem(pageKey)) || [];
        return storedCharacters.length;
    }
}

const searchedCharacters = new SearchedCharacters();
export default SearchedCharacters;
