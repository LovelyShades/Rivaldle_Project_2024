class GetSilhouette {
    constructor() {
        // Initialize the class
        this.initialize();
    }

    async initialize() {
        try {
            this.dailyCharacter = await this.fetchData('./daily_silhouette_character');
            this.removeSpaces(this.dailyCharacter)
            this.getImageBox();
            this.addSilhouetteImage(this.removedSpacesCharacterName);
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
            return null; // Return null if fetch fails
        }
    }

    getImageBox() {
        this.silhouetteImage = document.getElementById('silhouette_image');
        if (!this.silhouetteImage) {
            console.error('Silhouette image element not found in the DOM.');
        }
    }

    addSilhouetteImage(character) {
        if (this.silhouetteImage && character) {
            this.silhouetteImage.src = `/_images/character_images/hero_profile_images/silhouette_character_image/${character}.png`;
        } else {
            console.error('Unable to add silhouette image. Character or image box is missing.');
        }
    }

    removeSpaces(character){
        this.removedSpacesCharacterName = character.name.replace(/\s+/g, '');
    }
}

// Instantiate the class
const getSilhouette = new GetSilhouette();
