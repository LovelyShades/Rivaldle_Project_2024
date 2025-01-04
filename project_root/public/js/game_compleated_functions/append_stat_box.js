class StatBox{
    constructor(){
        this.initalize();
        this.numberOfTries = 0;
    }

    initalize(){
        this.isGameCompleated()
        this.listenForCharacterSelect();
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

    listenForCharacterSelect(){
        document.addEventListener('characterSelected', (event) => {
            this.numberOfTries +=1;
        });
    }

    isGameCompleated(){
        document.addEventListener('correctCharacterGuessed', async () => {
            this.dailyCharacter = await this.fetchData('./daily_silhouette_character');
            this.appendStatBoxContainter();
            this.appendStatBoxItems(this.statBoxContainter)
        });
    }

    getTime() {
        let now = new Date();
        let midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1); // Next midnight
        let timeUntilMidnight = midnight - now; // Difference in milliseconds
    
        // Convert milliseconds to hours, minutes, and seconds
        let hours = Math.floor((timeUntilMidnight / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((timeUntilMidnight / (1000 * 60)) % 60);
        let seconds = Math.floor((timeUntilMidnight / 1000) % 60);
    
        // Format the time remaining
        this.formattedTime = `${hours.toString().padStart(2, '0')}:` +
                             `${minutes.toString().padStart(2, '0')}:` +
                             `${seconds.toString().padStart(2, '0')}`;
    }
    
    appendStatBoxContainter(){
        const gameCompleatedContainer = document.getElementById('game_compleated_container');
        this.statBoxContainter = document.createElement('div');
        this.statBoxContainter.className = 'stat_box_container'
        gameCompleatedContainer.append(this.statBoxContainter)

    }

    appendStatBoxItems(container){
        this.appendHeaderText(container);
        this.appendCharacter(container);
        this.appendTries(container);
        this.appendTimeHeader(container);
        this.appendTime(container);
        this.appendFullCharacterImage(container);
        this.appendFooterLine(container);
    }

    appendHeaderText(container){
        const headerText = document.createElement('div');
        headerText.className = 'stat_box_text'
        headerText.style.fontSize = "xx-large";
        headerText.innerHTML = 'Victory!'
        container.append(headerText);
    }

    appendCharacter(container){
        const characterImageContainer = document.createElement('div');
        characterImageContainer.className = 'guessed_character_stat_container'
        container.append(characterImageContainer);

        const characterImage = document.createElement('img');
        characterImage.className = 'guessed_character_stat_icon'
        const characterNameWithoutSpaces = this.dailyCharacter.name.replace(/\s+/g, '');
        characterImage.src = `/_images/character_images/character_icon_images/${characterNameWithoutSpaces}.png`;
        characterImageContainer.append(characterImage);

        const characterText = document.createElement('div');
        characterText.className = 'stat_box_text'
        characterText.innerHTML = `You Guessed ${this.dailyCharacter.name}`;
        characterImageContainer.append(characterText);
    }

    appendTries(container){
        const numTriesText = document.createElement('div');
        numTriesText.className = 'stat_box_text'
        numTriesText.innerHTML = `Number Of Tries: ${this.numberOfTries}`;
        container.append(numTriesText);
    }

    appendTimeHeader(container){
        const timeHeader = document.createElement('div');
        timeHeader.className = 'stat_box_text';
        timeHeader.style.fontSize = 'x-large'
        timeHeader.innerHTML = 'New hero in:'
        container.append(timeHeader);
    }

    appendTime(container) {
        const timeUntilReset = document.createElement('div');
        timeUntilReset.className = 'stat_box_text';
        timeUntilReset.style.fontSize = 'xx-large'
        container.append(timeUntilReset);
    
        // Function to update the time
        const updateTime = () => {
            this.getTime(); 
            timeUntilReset.innerHTML = this.formattedTime; 
        };
    
        updateTime();
        setInterval(updateTime, 1000);
    }

    appendFullCharacterImage(container){
        const fullCharacterImage = document.createElement('img');
        fullCharacterImage.className = 'guessed_character_full_image'
        const characterNameWithoutSpaces = this.dailyCharacter.name.replace(/\s+/g, '');
        fullCharacterImage.src = `/_images/character_images/hero_profile_images/character_image/${characterNameWithoutSpaces}.png`;
        container.append(fullCharacterImage);

    }

    appendFooterLine(container){
        const footerLine = document.createElement('div');
        footerLine.className = 'footer_line';
        container.append(footerLine);
    }
}

const statBox = new StatBox();


