class AppendAbility{
    constructor(){
        this.initialize()
    }

    async initialize(){
        this.language = localStorage.getItem('language')
        this.dailyCharacter = await this.fetchData('./daily_ability_character');
        this.dailyCharacterAbility = await this.fetchData('./daily_character_ability');
        console.log(this.dailyCharacter.translations[this.language].abilities[this.dailyCharacterAbility])
        this.dailyCharacterAbility = this.dailyCharacter.translations[this.language].abilities[this.dailyCharacterAbility];
        this.appendAbility()
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

    appendAbility(){
        const abilityTextContainer = document.getElementById('ability_text_container')
        const abilityText = document.createElement('div')
        abilityText.className = 'ability_text';
        abilityText.innerHTML = this.dailyCharacterAbility
        abilityTextContainer.append(abilityText);
    }
}

const appendAbility = new AppendAbility();