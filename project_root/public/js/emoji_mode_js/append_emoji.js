class AppendEmoji{
    constructor(){
        this.initialize();
        this.numGuesses = 0;
    }
    async initialize(){
        this.dailyCharacter = await this.fetchData('./daily_emoji_character');
        this.getCharacterEmojis();
        this.appendEmojis();
        this.listenForCharacterSelect();
    }

    async fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
            return response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    listenForCharacterSelect(){
        document.addEventListener('characterSelected', (event) => {
            this.updateEmojis();
        });
    }

    getCharacterEmojis(){
        this.dailyCharacterEmojis = this.dailyCharacter.emoji;
    }

    appendEmojis() {
        const emojiContainer = document.getElementById('emoji_container');
        this.emojis = [
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div')
        ];
        
        this.emojis.forEach((emoji, index) => {
            emoji.className = 'emoji'; // Add the class 'emoji' to each element
            emoji.textContent = '?';// Add some text or emoji content
            if(index==0){
                emoji.textContent = this.dailyCharacterEmojis[0]
            }
            emojiContainer.append(emoji); // Append the element to the container
        });
    }        

    updateEmojis(){
        this.numGuesses += 1;
        if(this.numGuesses > 3) return;
        this.emojis[this.numGuesses].innerHTML = this.dailyCharacterEmojis[this.numGuesses]
    }
}

const appendEmoji = new AppendEmoji();