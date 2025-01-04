class StatBox{
    constructor(){
        this.initalize();
    }

    initalize(){
        this.isGameCompleated()
    }

    isGameCompleated(){
        document.addEventListener('correctCharacterGuessed', () => {
            this.appendStatBoxContainter();
            this.appendStatBoxItems(this.statBoxContainter)
        });
    }

    appendStatBoxContainter(){
        const gameCompleatedContainer = document.getElementById('game_compleated_container');
        this.statBoxContainter = document.createElement('div');
        this.statBoxContainter.className = 'stat_box_container'
        gameCompleatedContainer.append(this.statBoxContainter)

    }

    appendStatBoxItems(container){
        this.appendHeaderText(container);
    }

    appendHeaderText(container){
        const headerText = document.createElement('div');
        headerText.className = 'stat_box_header'
        headerText.innerHTML = 'GG EZ'
        container.append(headerText);
    }
}

const statBox = new StatBox();


