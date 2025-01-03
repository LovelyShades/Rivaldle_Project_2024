class GetSilhouette {
    constructor() {
        // Initialize the class
        this.imageScale = 4;
        this.initialize();
    }

    async initialize() {
        try {
            this.dailyCharacter = await this.fetchData('./daily_silhouette_character');
            this.removeSpaces(this.dailyCharacter)
            this.getImageBox();
            this.addSilhouetteImage(this.removedSpacesCharacterName);
            this.listenForCharacterSelect(this.silhouetteImage)
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

    getImageBox() {
        this.silhouetteImage = document.getElementById('silhouette_image');
    }


    addSilhouetteImage(character) {
        if (this.silhouetteImage && character) {
            this.silhouetteImage.style.transform = `scale(${this.imageScale})`;     
            this.silhouetteImage.src = `/_images/character_images/hero_profile_images/silhouette_character_image/${character}.png`;
        } else {
            console.error('Unable to add silhouette image. Character or image box is missing.');
        }
    }

    removeSpaces(character){
        this.removedSpacesCharacterName = character.name.replace(/\s+/g, '');
    }

    listenForCharacterSelect(image) {
        document.addEventListener('characterSelected', (event) => {
            if(this.imageScale - 0.3 > 1){
                this.imageScale -= 0.3; 
                image.style.transform = `scale(${this.imageScale})`;     
            }
        });
    }
    
}

// Instantiate the class
const getSilhouette = new GetSilhouette();
