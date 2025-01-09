class Clues {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.getNumTries();
        this.listenForCharacterSelect();
    }

    listenForCharacterSelect() {
        document.addEventListener('characterSelected', () => {
            this.updateStorage();
        });
    }

    getNumTries() {
        this.key = 'numTries';
        this.storedTries = localStorage.getItem(this.key);

        if (this.storedTries === null || this.storedTries === undefined) {
            // If not found in localStorage, initialize it to 0
            this.storedTries = 0;
            localStorage.setItem(this.key, JSON.stringify(this.storedTries));
        } else {
            // Parse the retrieved string as a number
            this.storedTries = JSON.parse(this.storedTries);
        }
    }

    updateStorage() {
        this.storedTries += 1; 
        console.log(`Updated tries: ${this.storedTries}`);
        localStorage.setItem(this.key, JSON.stringify(this.storedTries)); 
    }
}

const clues = new Clues();
