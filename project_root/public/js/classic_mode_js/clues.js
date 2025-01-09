class Clues {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.getNumTries();
        this.appendClueTries();
        this.listenForCharacterSelect();
    }

    listenForCharacterSelect() {
        document.addEventListener('characterSelected', () => {
            this.updateStorage();
            this.updateTries();
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

    appendClueTries() {
        this.appendNumTriesUntilSilhoutte();
        this.appendNumTriesUntilUlt();
    }

    appendNumTriesUntilSilhoutte() {
        const clueContainer = document.getElementById('clueSilhoutteSubContainer');
        this.numTriesLeftUntilSulhoutteClue = 5;

        if (this.numTriesLeftUntilSulhoutteClue - this.storedTries > 0) {
            this.numTriesLeftUntilSulhoutte = document.createElement('div');
            this.numTriesLeftUntilSulhoutte.className = 'clue2';
            this.numTriesLeftUntilSulhoutte.style.fontSize = 'large';
            this.numTriesLeftUntilSulhoutte.innerHTML = `Tries until silhouette: ${this.numTriesLeftUntilSulhoutteClue - this.storedTries}`;
            clueContainer.append(this.numTriesLeftUntilSulhoutte);
        } else {
            this.activateSilhoutteImage();
        }
    }

    appendNumTriesUntilUlt() {
        const clueContainer = document.getElementById('clueUltSubContainer');
        this.numTriesUntilUltClue = 3;

        if (this.numTriesUntilUltClue - this.storedTries > 0) {
            this.numTriesLeftUntilUlt = document.createElement('div');
            this.numTriesLeftUntilUlt.className = 'clue2';
            this.numTriesLeftUntilUlt.style.fontSize = 'large';
            this.numTriesLeftUntilUlt.innerHTML = `Tries until silhouette: ${this.numTriesUntilUltClue - this.storedTries}`;
            clueContainer.append(this.numTriesLeftUntilUlt);
        } else {
            this.activateUltImage();
        }
    }

    updateTries() {
        if (this.numTriesLeftUntilSulhoutteClue - this.storedTries > 0) {
            this.numTriesLeftUntilSulhoutte.innerHTML = `Tries until silhouette: ${this.numTriesLeftUntilSulhoutteClue - this.storedTries}`;
        } else if (this.numTriesLeftUntilSulhoutte) {
            this.activateSilhoutteImage();
            this.numTriesLeftUntilSulhoutte.remove(); // Remove the element when it reaches zero
            this.numTriesLeftUntilSulhoutte = null; // Reset the reference
        }

        if (this.numTriesUntilUltClue - this.storedTries > 0) {
            this.numTriesLeftUntilUlt.innerHTML = `Tries until silhouette: ${this.numTriesUntilUltClue - this.storedTries}`;
        } else if (this.numTriesLeftUntilUlt) {
            this.activateUltImage();
            this.numTriesLeftUntilUlt.remove(); // Remove the element when it reaches zero
            this.numTriesLeftUntilUlt = null; // Reset the reference
        }
    }

    activateSilhoutteImage(){
        this.silhoutteImageIcon = document.getElementById('silhoutteImg');
        this.silhoutteImageIcon.className += 'activeImage'
    }
    activateUltImage(){
        this.ultImgIcon = document.getElementById('ultImg');
        this.ultImgIcon.className += 'activeImage'
    }

}

const clues = new Clues();
