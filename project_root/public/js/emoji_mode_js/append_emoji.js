class AppendEmoji {
    constructor() {
        this.initializeEmojiStorage(); // Initialize storage first
        this.numGuesses = parseInt(localStorage.getItem('numEmojisViewed'), 10) || 0; // Load stored guesses
        this.initialize();
    }

    async initialize() {
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

    listenForCharacterSelect() {
        document.addEventListener('characterSelected', () => {
            this.updateEmojis();
        });
    }

    getCharacterEmojis() {
        this.dailyCharacterEmojis = this.dailyCharacter.emoji;
    }

    appendEmojis() {
        const emojiContainer = document.getElementById('emoji_container');
        this.emojis = [document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div')];

        this.emojis.forEach((emoji, index) => {
            emoji.className = 'emoji'; // Add the class 'emoji' to each element
            emoji.textContent = index <= this.numGuesses ? this.dailyCharacterEmojis[index] : '?'; // Set emoji based on storage
            emojiContainer.append(emoji); // Append the element to the container
        });
    }

    updateEmojis() {
        if (this.numGuesses >= 3) return; // Limit updates to 4 emojis
        this.numGuesses += 1;
        this.saveEmojisToLocalStorage(); // Save updated guesses to localStorage
        this.emojis[this.numGuesses].innerHTML = this.dailyCharacterEmojis[this.numGuesses]; // Update emoji display
    }

    saveEmojisToLocalStorage() {
        localStorage.setItem('numEmojisViewed', this.numGuesses);
    }

    initializeEmojiStorage() {
        const storedValue = localStorage.getItem('numEmojisViewed');
        if (storedValue === null) {
            localStorage.setItem('numEmojisViewed', 0);
        }
    }
}

const appendEmoji = new AppendEmoji();
