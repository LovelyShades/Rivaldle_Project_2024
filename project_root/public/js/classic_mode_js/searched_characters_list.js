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
        const attributes = [
            'gender', 'species', 'affiliation', 'level', 'type', 'hp', 'dateOfOrigin'
        ];
        
        // Add all boxes immediately with only a border initially
        attributes.forEach(attr => {
            const value = this.receivedCharacter[attr];
            const box = this.addCharacterBox(row, value, attr);
            box.classList.add('hidden'); // Add a hidden class to hide the content and background
        });
        
        // Reveal each box with a delay
        attributes.forEach((attr, index) => {
            setTimeout(() => {
                const box = row.querySelector(`.guessedCharacterBox[data-attribute="${attr}"]`);
                box.classList.remove('hidden'); // Remove the hidden class to reveal the content and background
            }, 500 * (index + 1)); // Delay each reveal by 500ms
        });
        setTimeout(() => {
            this.isCorrectCharacter();
        }, 500 * attributes.length + 500); // Total delay: 500ms per attribute
    }
    
    addCharacterBox(row, textContent, attribute) {
        const newBox = document.createElement('div');
        newBox.className = 'guessedCharacterBox';
        newBox.textContent = textContent;
    
        newBox.setAttribute('data-attribute', attribute); // Add attribute identifier
    
        this.setBoxAppearance(newBox, attribute);
        this.addArrowIndicator(newBox, attribute);
    
        row.appendChild(newBox);
        return newBox; // Return the created box for further manipulation
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
        if(comparison == 0) return;
        arrowImage.src = comparison > 0
            ? '/_images/classic_mode_images/downArrow.png'
            : '/_images/classic_mode_images/upArrow.png';

        box.appendChild(arrowImage);
    }

    isCorrectCharacter() {
        if (this.receivedCharacter.name === this.dailyCharacter.name) {
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
                character: this.dailyCharacter, // Replace with the actual character
                mode: 'silhouette' // Replace with the actual mode
            }
        });
        document.dispatchEvent(event); // Dispatch the event with both character and mode
    }

}

// Instantiate and export the class
const searchedCharacters = new SearchedCharacters();
export default SearchedCharacters;
