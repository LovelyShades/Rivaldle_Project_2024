class CharacterSearch {
    constructor() {
        this.characterInput = document.getElementById('characterInput');
        this.suggestedCharactersContainer = document.getElementById('suggestedCharactersContainer');
        this.characterButton = document.getElementById('character_search_button');

        // Initialize asynchronously
        this.initialize();
    }

    async initialize() {
        await this.getMarvelCharacters(); // Wait for data fetch
        this.notSearchedMarvelCharacters = [...this.marvelCharacters]; // Copy characters to the searchable list

        this.initializeEventListeners(); // Setup event listeners after data is ready
        this.characterInput.addEventListener('input', this.handleInput.bind(this));
        this.characterButton.addEventListener('click', this.handleButtonClick.bind(this));

    }

    initializeEventListeners() {
        document.addEventListener("DOMContentLoaded", () => {
        });
    }

    async getMarvelCharacters() {
        const response = await fetch('./character_info');
        this.marvelCharacters = await response.json();
    }

    handleInput(event) {
        const suggestedCharacters = this.getSuggestedCharacters(event.target.value);
        this.displaySuggestions(suggestedCharacters);
    }

    getSuggestedCharacters(typedText) {
        if (!typedText) return [];
        const searchText = typedText.toLowerCase();
        return this.notSearchedMarvelCharacters.filter(character => 
            character.name.toLowerCase().startsWith(searchText)
        );
    }

    displaySuggestions(suggestedCharacters) {
        this.clearSuggestions();

        if (this.shouldHideSuggestions(suggestedCharacters)) {
            this.hideSuggestionsContainer();
            return;
        }

        this.showSuggestionsContainer();
        this.createSuggestionElements(suggestedCharacters);
    }

    shouldHideSuggestions(suggestedCharacters) {
        return suggestedCharacters.length === 0 || 
               suggestedCharacters.length === this.notSearchedMarvelCharacters.length;
    }

    createSuggestionElements(suggestedCharacters) {
        suggestedCharacters.forEach(character => {
            const elementContainer = document.createElement('div');
            elementContainer.className = 'characterElementContainer';
    
            const element = document.createElement('div');
            element.className = 'suggestedCharacter';
            element.textContent = '';
            element.addEventListener('click', () => this.handleCharacterSelection(character));
    
            const image = document.createElement('img');
            const characterNameWithoutSpaces = character.name.replace(/\s+/g, '');
            image.src = `/_images/character_images/character_icon_images/${characterNameWithoutSpaces}.png`;
            image.alt = `${character.name} icon`; 
            image.className = 'suggestedCharacterImage';

            const charecterNameText = document.createElement('div');
            charecterNameText.className = 'suggestedCharacterText';
            charecterNameText.textContent = character.name;
    
            element.appendChild(image);
            element.appendChild(charecterNameText);
            elementContainer.appendChild(element);
            this.suggestedCharactersContainer.appendChild(elementContainer);
        });
    }

    handleButtonClick() {
        const inputValue = this.characterInput.value.toLowerCase();
        const matchingCharacter = this.notSearchedMarvelCharacters.find(character =>
            character.name.toLowerCase() === inputValue
        );

        if (matchingCharacter) {
            this.handleCharacterSelection(matchingCharacter);
        }
        
        this.clearInput();
        this.clearSuggestions();
    }

    handleCharacterSelection(character) {
        this.broadcastCharacterSelection(character);
        this.removeCharacterFromList(character);
        this.clearInput();
        this.clearSuggestions();
    }

    broadcastCharacterSelection(character) {
        const event = new CustomEvent('characterSelected', {
            detail: { character }
        });
        document.dispatchEvent(event);
    }

    removeCharacterFromList(character){
        this.notSearchedMarvelCharacters = this.notSearchedMarvelCharacters.filter(
            c => c.name !== character.name
        );
    }

    clearInput() {
        this.characterInput.value = '';
    }

    clearSuggestions() {
        this.suggestedCharactersContainer.innerHTML = '';
    }

    hideSuggestionsContainer() {
        this.suggestedCharactersContainer.style.display = 'none';
    }

    showSuggestionsContainer() {
        this.suggestedCharactersContainer.style.display = 'flex';
    }
}

// Initialize the character search
(async () => {
    const characterSearch = new CharacterSearch();
})();
