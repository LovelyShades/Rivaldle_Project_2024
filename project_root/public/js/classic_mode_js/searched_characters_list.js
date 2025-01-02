class SearchedCharacters {
    constructor() {
        this.marvelCharacters = [];
        this.dailyCharacter = null;
        this.receivedCharacter = null;

        // Initialize the class
        this.initialize();
    }

    async initialize() {
        try {
            this.marvelCharacters = await this.fetchData('./character_info');
            this.dailyCharacter = await this.fetchData('./daily_classic_character');
            this.initializeEventListeners();
        } catch (error) {
            console.error('Error during initialization:', error);
        }
    }

    async fetchData(url) {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        return response.json();
    }

    initializeEventListeners() {
        document.addEventListener('characterSelected', (event) => {
            this.receivedCharacter = event.detail.character;
            console.log("Character received:", this.receivedCharacter);
            
            this.initializeSearchHeaders();
            this.activateGameHeader();
            this.addRow();
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

    addRow() {
        const parentContainer = document.querySelector('.allGuessedCharacters');
        if (!parentContainer) return;

        const newRow = document.createElement('div');
        newRow.className = 'guessedCharactersContainer';

        this.addCharacterImageBox(newRow, this.receivedCharacter.name);
        this.addCharacterAttributes(newRow);

        parentContainer.prepend(newRow);
    }

    addCharacterImageBox(parent, characterName) {
        const image = document.createElement('img');
        image.src = `/_images/character_images/character_icon_images/${characterName.replace(/\s+/g, '')}.png`;
        image.alt = `${characterName} Icon`;
        image.className = 'guessedCharacterImageBox';

        parent.appendChild(image);
    }

    addCharacterAttributes(row) {
        this.isCorrectCharacter();

        const attributes = [
            'gender', 'species', 'affiliation', 'level', 'type', 'hp', 'dateOfOrigin'
        ];

        attributes.forEach(attr => {
            const value = this.receivedCharacter[attr];
            this.addCharacterBox(row, value, attr);
        });
    }

    addCharacterBox(row, textContent, attribute) {
        const newBox = document.createElement('div');
        newBox.className = 'guessedCharacterBox';
        newBox.textContent = textContent;

        this.setBoxAppearance(newBox, attribute);
        this.addArrowIndicator(newBox, attribute);

        row.appendChild(newBox);
    }

    setBoxAppearance(box, attribute) {
        const isMatching = this.receivedCharacter[attribute] === this.dailyCharacter[attribute];
        box.style.backgroundColor = isMatching ? '#7aff6f' : '#ff3c3b';
    }

    addArrowIndicator(box, attribute) {
        if (!['hp', 'dateOfOrigin'].includes(attribute)) return;

        const arrowImage = document.createElement('img');
        arrowImage.className = 'arrow';

        const comparison = this.receivedCharacter[attribute] - this.dailyCharacter[attribute];
        arrowImage.src = comparison > 0
            ? '/_images/classic_mode_images/downArrow.png'
            : '/_images/classic_mode_images/upArrow.png';

        box.appendChild(arrowImage);
    }

    isCorrectCharacter() {
        if (this.receivedCharacter === this.dailyCharacter) {
            confetti({
                particleCount: 250,
                spread: 120,
                origin: { y: 0.7 },
            });
        }
    }
}

// Instantiate and export the class
const searchedCharacters = new SearchedCharacters();
export default SearchedCharacters;
