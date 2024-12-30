import { marvelCharacters } from '../../../../characters/character_scripts/character_info.js';

class SearchedCharacters {
    constructor() {
        // Initialize properties
        this.dailyCharacter = marvelCharacters[Math.floor(Math.random() * marvelCharacters.length)];
        this.receavedCharacter = null;

        // Setup event listeners
        this.initializeEventListeners();
    }

    // Initialize all event listeners
    initializeEventListeners() {
        document.addEventListener('characterSelected', (event) => {
            this.receavedCharacter = event.detail.character;
            console.log('Daily Character:', this.dailyCharacter);

            // Execute the main functionalities
            this.initializeSearchHeaders();
            this.activateGameHeader();
            this.addRow();
        });
    }

    // Display the search headers
    initializeSearchHeaders() {
        const headersContainer = document.getElementById('characterListHeadersContainer');
        headersContainer.style.display = 'flex';
    }

    // Switch to the active game header
    activateGameHeader() {
        const headerBoxContainer = document.getElementById('headerBoxContainer');
        const activeHeaderBoxContainer = document.getElementById('activeHeaderBoxContainer');

        headerBoxContainer.style.display = 'none';
        activeHeaderBoxContainer.style.display = 'flex';
    }

    // Add a new row for the guessed character
    addRow() {
        const parentContainer = document.querySelector('.allGuessedCharacters');
        const newRow = document.createElement('div');
        newRow.className = 'guessedCharactersContainer';
        // Add individual components to the row
        this.addCharacterImageBox(newRow, this.receavedCharacter.name);
        this.addCharacterAttributes(newRow);

        // Prepend the new row to the container
        parentContainer.prepend(newRow);
    }

    // Add the character image box
    addCharacterImageBox(parent, characterName) {
        const image = document.createElement('img');
        const sanitizedCharacterName = characterName.replace(/\s+/g, '');
        image.src = `/characters/_character_images/RivalsCharacterIcons/${sanitizedCharacterName}.png`;
        image.alt = `${characterName} Icon`;
        image.className = 'guessedCharacterImageBox';

        parent.appendChild(image);
    }

    // Add attribute boxes for the character
    addCharacterAttributes(row) {
        this.isCorrectCharacter();
        const attributes = [
            { value: this.receavedCharacter.gender, key: 'gender' },
            { value: this.receavedCharacter.species, key: 'species' },
            { value: this.receavedCharacter.affiliation, key: 'affiliation' },
            { value: this.receavedCharacter.level, key: 'level' },
            { value: this.receavedCharacter.type, key: 'type' },
            { value: this.receavedCharacter.hp, key: 'hp' },
            { value: this.receavedCharacter.dateOfOrigin, key: 'dateOfOrigin' }
        ];

        attributes.forEach(attr => this.addCharacterBox(row, attr.value, attr.key));
    }

    // Add a single attribute box
    addCharacterBox(row, textContent, attribute) {
        const newBox = document.createElement('div');
        newBox.className = 'guessedCharacterBox';
        newBox.textContent = textContent;

        this.setBoxAppearance(newBox, attribute);
        this.addArrowIndicator(newBox, attribute);

        row.appendChild(newBox);
    }

    // Set the appearance (color) of the box
    setBoxAppearance(box, attribute) {
        const isMatching = this.receavedCharacter[attribute] === this.dailyCharacter[attribute];
        box.style.backgroundColor = isMatching ? '#7aff6f' : '#ff3c3b';
    }

    // Add an arrow indicator for specific attributes
    addArrowIndicator(box, attribute) {
        if (!['hp', 'dateOfOrigin'].includes(attribute)) return;

        const arrowImage = document.createElement('img');
        arrowImage.className = 'arrow';

        if (this.receavedCharacter[attribute] > this.dailyCharacter[attribute]) {
            arrowImage.src = '../_images/downArrow.png';
        } else if (this.receavedCharacter[attribute] < this.dailyCharacter[attribute]) {
            arrowImage.src = '../_images/upArrow.png';
        }
        box.appendChild(arrowImage);
    }

    isCorrectCharacter() {
        if (this.receavedCharacter === this.dailyCharacter) {
            confetti({
                particleCount: 250,
                spread: 120,
                origin: { y: 0.7 },
              });
        }
        return;
    }
}

// Instantiate and export the class
const searchedCharacters = new SearchedCharacters();
export default SearchedCharacters;
