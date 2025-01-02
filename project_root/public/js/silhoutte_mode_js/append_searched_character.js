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

        const newBoxText = document.createElement('div');
        newBoxText.className = 'searched_character_text';
        newBoxText.innerHTML = this.receivedCharacter.name

        const newBoxImg = document.createElement('img');
        newBoxImg.className = 'searched_character_image';
        newBoxImg.src = `/_images/character_images/character_icon_images/${this.receivedCharacter.name.replace(/\s+/g, '')}.png`;


        this.searchedCharacterBoxContainer.prepend(newBox);
        newBox.append(newBoxImg);
        newBox.append(newBoxText);
    }
}

const appendSearchedCharacter = new AppendSearchedCharacter();