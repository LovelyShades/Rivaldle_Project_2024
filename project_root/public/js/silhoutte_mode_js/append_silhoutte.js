class GetSilhouette {
    constructor() {
        // Initialize the class
        this.imageScale = 6; // Default scale
        this.imageScaleRate = 0.6; // Default scale rate
        this.removedSpacesCharacterName = ''; // Placeholder for processed character name
        this.silhouetteImage = null; // Placeholder for the image element
        this.initialize();
    }

    async initialize() {
        try {
            // Fetch daily character data
            this.dailyCharacter = await this.fetchData('./daily_silhouette_character');
            if (!this.dailyCharacter) throw new Error('Failed to fetch daily character.');

            // Process character data
            this.checkForBigCharacters();
            this.removeSpaces(this.dailyCharacter);

            // Get the image element and add the silhouette image
            this.getImageBox();
            if (!this.silhouetteImage) throw new Error('Silhouette image element not found.');
            this.addSilhouetteImage(this.removedSpacesCharacterName);

            // Listen for character selection events
            this.listenForCharacterSelect();
        } catch (error) {
            console.error('Error initializing GetSilhouette:', error);
        }
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

    checkForBigCharacters() {
        const bigCharacters = ["Doctor Strange", "Cloak and Dagger", "The Punisher"];
        if (bigCharacters.includes(this.dailyCharacter.name)) {
            console.log('Scaled for big character');
            this.imageScale = 25;
            this.imageScaleRate = 2;
        } else {
            console.log('Default scale for regular character');
            this.imageScale = 35;
            this.imageScaleRate = 3;
        }
    }

    getImageBox() {
        this.silhouetteImage = document.getElementById('silhouette_image');
        if (!this.silhouetteImage) {
            console.error('Silhouette image element not found in DOM.');
        }
    }

    addSilhouetteImage(character) {
        if (this.silhouetteImage && character) {
            console.log(`Adding silhouette image for ${character} with scale ${this.imageScale}`);
            this.silhouetteImage.style.transform = `scale(${this.imageScale / 10})`;
            this.silhouetteImage.src = `/_images/character_images/hero_profile_images/silhouette_character_image/${character}.png`;
        } else {
            console.error('Unable to add silhouette image. Character or image box is missing.');
        }
    }

    removeSpaces(character) {
        if (character && character.name) {
            this.removedSpacesCharacterName = character.name.replace(/\s+/g, '');
        } else {
            console.error('Invalid character data provided for removing spaces.');
        }
    }

    listenForCharacterSelect() {
        document.addEventListener('characterSelected', () => {
            if (this.silhouetteImage) {
                if (this.imageScale - this.imageScaleRate > 1) {
                    this.imageScale -= this.imageScaleRate;
                    console.log(`Updated scale: ${this.imageScale}`);
                    this.silhouetteImage.style.transform = `scale(${this.imageScale / 10})`;
                } else {
                    console.log('Scale is already at minimum.');
                }
            } else {
                console.error('Silhouette image not found while listening for character selection.');
            }
        });
    }
}

    const getSilhouette = new GetSilhouette();
