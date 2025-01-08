class AppendSearchedCharacter{
    constructor(){
        this.initialize();
    }

    async initialize(){
        this.dailyCharacter = await this.fetchData('./daily_ability_character');
        this.listenForCharacterSelect();
    }

    listenForCharacterSelect(){
        document.addEventListener('characterSelected', (event) => {
            this.receivedCharacter = event.detail.character;
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
            return null; // Return null if fetch fails
        }
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

        this.isCorrectCharacter(newBox);
        this.searchedCharacterBoxContainer.prepend(newBox);
        newBox.append(newBoxImg);
        newBox.append(newBoxText);
    }

    isCorrectCharacter(newBox) {
        if (this.receivedCharacter.name === this.dailyCharacter.name) {
            this.broadcastCorrectCharacter();
            this.appendConfetti();
            newBox.style.backgroundColor = '#4caf50';
            newBox.style.border = '3px solid #7aff6f'; 
        } else {
            newBox.style.backgroundColor = '#d32f2f'; 
            newBox.style.border = '3px solid #ff3c3b'; 
            newBox.classList.add('shake');

            // Remove the shake class after the animation completes
            setTimeout(() => {
                newBox.classList.remove('shake');
            }, 500); // Match the duration of the animation (0.5s)
        }
    }

    broadcastCorrectCharacter() {
        const event = new CustomEvent('correctCharacterGuessed', {
            detail: {
                character: this.dailyCharacter, // Replace with the actual character
                mode: 'voice_line' // Replace with the actual mode
            }
        });
        document.dispatchEvent(event); // Dispatch the event with both character and mode
    }

    appendConfetti(){
        confetti({
            particleCount: 250,
            spread: 120,
            origin: { y: 0.7 },
        });
    }
}

const appendSearchedCharacter = new AppendSearchedCharacter();