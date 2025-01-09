class AppendAbility{
    constructor(){
        this.initialize()
    }

    async initialize(){
        this.dailyCharacter = await this.fetchData('./daily_ability_character');
        this.dailyCharacterAbility = await this.fetchData('./daily_character_ability');
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