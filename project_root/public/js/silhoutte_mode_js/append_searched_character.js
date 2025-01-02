class AppendSearchedCharacter{
    constructor(){
        this.initialize();
    }

    initialize(){
        this.listenForCharacterSelect();
    }

    listenForCharacterSelect(){
        document.addEventListener('characterSelected', (event) => {
            this.receivedCharacter = event.detail.character;
            this.appendSearchedCharacterBox();
        });
    }

    appendSearchedCharacterBox(){
        this.searchedCharacterBoxContainer = document.getElementById('searched_characters_container');
        const newBox = document.createElement('div');
        newBox.className = 'searched_character_box';
        newBox.innerHTML = this.receivedCharacter.name
        this.searchedCharacterBoxContainer.prepend(newBox);
    }
}

const appendSearchedCharacter = new AppendSearchedCharacter();