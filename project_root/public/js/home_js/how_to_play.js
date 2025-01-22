class HowToPlay{
    constructor(){
        this.initialize();
    }

    initialize(){

    }

    getIconContainer(){
        this.iconContainer = document.getElementById('head_icon_container')
    }

    appendButton(){
        this.howToPlayButton = document.createElement('img');
        
    }
}

const howToPlay = new HowToPlay();