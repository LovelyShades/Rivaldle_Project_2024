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
            this.appendOverlay();
            this.showAboutContainer();
        })
    }

    appendOverlay(){
        this.getBody();
        this.darkOverlay = document.createElement('div');
        this.darkOverlay.className = 'overlay';
        this.darkOverlay.style.zIndex = '999';
        document.body.style.overflowY = 'hidden';
        document.documentElement.style.overflowY = 'hidden';
        this.body.append(this.darkOverlay);
    }

    removeOverlay(){
        this.darkOverlay.remove();
        document.body.style.overflowY = ''
        document.documentElement.style.overflowY = ''
    }

    getAboutContainer(){
        this.howToPlayContainer = document.getElementById('about_container');
    }

    showAboutContainer(){
        this.getAboutContainer();
        this.howToPlayContainer.style.display = 'flex';
        this.listenForXClick();
    }

    removeAboutContainer(){
        this.howToPlayContainer.style.display = 'none';
    }

    getXIcon(){
        this.x = document.getElementById('x_icon');
    }

    listenForXClick(){
        this.getXIcon();
        this.x.addEventListener('click',()=>{
            this.removeOverlay();
            this.removeAboutContainer();
        })
    }
}

const about = new About();