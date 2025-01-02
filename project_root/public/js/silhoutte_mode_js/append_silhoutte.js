class GetSilhoutte{
    constructor() {
        // Initialize the class
        this.initialize();
    }

    async initialize(){
        this.dailyCharacter = await this.fetchData('./daily_silhouette_character');
        console.log(this.dailyCharacter);
    }

    async fetchData(url) {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        return response.json();
    }

}

const getSilhoutte = new GetSilhoutte();
