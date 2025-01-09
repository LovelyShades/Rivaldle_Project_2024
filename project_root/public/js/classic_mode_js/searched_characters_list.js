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
            this.loadStoredCharacters();
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
            this.addRow(this.receivedCharacter); // Pass the character to addRow
            this.saveCharacterToLocalStorage(this.receivedCharacter); // Save to localStorage
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
            'gender', 'species', 'affiliation', 'level', 'type', 'hp', 'dateOfOrigin'
        ];
        
        attributes.forEach(attr => {
            const value = character[attr];
            const box = this.addCharacterBox(row, value, attr, character);
            box.classList.add('hidden'); // Add a hidden class to hide the content and background
        });
        
        attributes.forEach((attr, index) => {
            setTimeout(() => {
                const box = row.querySelector(`.guessedCharacterBox[data-attribute="${attr}"]`);
                box.classList.remove('hidden'); // Remove the hidden class to reveal the content and background
            }, 500 * (index + 1)); // Delay each reveal by 500ms
        });
        setTimeout(() => {
            this.isCorrectCharacter(character);
        }, 500 * attributes.length + 500); // Total delay: 500ms per attribute
    }
    
    addCharacterBox(row, textContent, attribute, character) {
        const newBox = document.createElement('div');
        newBox.className = 'guessedCharacterBox';
        newBox.textContent = textContent;
    
        newBox.setAttribute('data-attribute', attribute); // Add attribute identifier
    
        this.setBoxAppearance(newBox, attribute, character);
        this.addArrowIndicator(newBox, attribute, character);
    
        row.appendChild(newBox);
        return newBox; // Return the created box for further manipulation
    }
    
    setBoxAppearance(box, attribute, character) {
        const isMatching = character[attribute] === this.dailyCharacter[attribute];
        box.style.backgroundColor = isMatching ? '#7aff6f' : '#ff3c3b';
    }

    addArrowIndicator(box, attribute, character) {
        if (!['hp', 'dateOfOrigin'].includes(attribute)) return;

        const arrowImage = document.createElement('img');
        arrowImage.className = 'arrow';

        const comparison = character[attribute] - this.dailyCharacter[attribute];
        if(comparison === 0) return;
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
                mode: 'silhouette'
            }
        });
        document.dispatchEvent(event);
    }
    
    getCurrentPageKey() {
        const path = window.location.pathname; // Get the current page path
        return `searched_characters_${path}`; // Use the path as part of the key
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
        console.log('Loaded stored characters:', storedCharacters);
        storedCharacters.forEach((character) => {
            if (character && character.name) this.addRow(character);
        });
    }

}

// Instantiate the class
const searchedCharacters = new SearchedCharacters();
export default SearchedCharacters;
