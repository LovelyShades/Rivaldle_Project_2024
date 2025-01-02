class CharacterSearch {
    constructor() {
        this.getMarvelCharacters();
        this.notSearchedMarvelCharacters = this.marvelCharacters;
        this.characterInput = document.getElementById('characterInput');
        this.suggestedCharactersContainer = document.getElementById('suggestedCharactersContainer');
        this.characterButton = document.getElementById('character_search_button');
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        document.addEventListener("DOMContentLoaded", () => {
            this.characterInput.addEventListener('input', this.handleInput.bind(this));
            this.characterButton.addEventListener('click', this.handleButtonClick.bind(this));
        });
    }

    getMarvelCharacters(){
        fetch('./character_info')
            .then(response => response.json())
            .then(character_info => {
                this.marvelCharacters = character_info;
                console.log('Character Data:', this.marvelCharacters); // Log the stored data
        })
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
            // Create container for each character suggestion
            const elementContainer = document.createElement('div');
            elementContainer.className = 'characterElementContainer';
    
            // Create text element for character name
            const element = document.createElement('div');
            element.className = 'suggestedCharacter';
            element.textContent = '';
            element.addEventListener('click', () => this.handleCharacterSelection(character));
    
            // Create image element for character
            const image = document.createElement('img');
            const characterNameWithoutSpaces = character.name.replace(/\s+/g, '');
            image.src = `/_images/character_images/character_icon_images/${characterNameWithoutSpaces}.png`;
            image.alt = `${character.name} icon`; 
            image.className = 'suggestedCharacterImage';

            const charecterNameText = document.createElement('div');
            charecterNameText.className = 'suggestedCharacterText';
            charecterNameText.textContent = character.name;

    
            // Append elements to the container
            element.appendChild(image);
            element.appendChild(charecterNameText);
            elementContainer.appendChild(element);

            // Append container to the suggestions container
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
    // Utility methods
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
const characterSearch = new CharacterSearch();

export default CharacterSearch;