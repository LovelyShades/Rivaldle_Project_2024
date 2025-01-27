class About{
    constructor(){
        this.initialize();
    }

    initialize(){
        this.getIcon();
        this.listenForClick();
    }

    getIcon(){
        this.icon = document.getElementById('how_to_play_icon');
    }

    getBody(){
        this.body = document.body;
    }

    listenForClick(){
        const icon = this.icon;
        icon.addEventListener('click',() =>{
            this.openAboutInfo();
        })
    }

    openAboutInfo(){
        this.getBody();
        this.darkOverlay = document.createElement('div');
        this.darkOverlay.className = 'overlay';
        this.darkOverlay.style.zIndex = '999';
        document.body.style.overflowY = 'hidden';
        document.documentElement.style.overflowY = 'hidden';
        this.body.append(this.darkOverlay);

        this.getHowToPlayContainer();
    }

    closeAboutInfo(){
        this.darkOverlay.remove();
        document.body.style.overflowY = ''
        document.documentElement.style.overflowY = ''
    }

    getHowToPlayContainer(){
        this.howToPlayContainer = document.getElementById('how_to_play_container');
    }
}

const about = new About();