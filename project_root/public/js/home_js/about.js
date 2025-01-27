class About{
    constructor(){
        this.initialize();
    }

    initialize(){
        this.getIcons();
        this.listenForClicks();
        this.aboutPopupIsActive = false;
        this.howToPlayPopupIsActive = false;
    }

    getIcons(){
        this.aboutIcon = document.getElementById('about_icon');
        this.howToPlayIcon = document.getElementById('how_to_play_icon');
    }

    getBody(){
        this.body = document.body;
    }

    listenForClicks(){
        const aboutIcon = this.aboutIcon;
        aboutIcon.addEventListener('click',() =>{
            this.appendOverlay();
            this.showAboutContainer();
            this.aboutPopupIsActive = true;
        })

        const howToPlayIcon = this.howToPlayIcon;
        howToPlayIcon.addEventListener('click',() =>{
            this.appendOverlay();
            this.showHowToPlayContainer();
            this.howToPlayPopupIsActive = true;
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
        this.aboutContainer = document.getElementById('about_container');
    }

    getHowToPlayContainer(){
        this.howToPlayContainer = document.getElementById('how_to_play_container');
    } 

    showAboutContainer(){
        this.getAboutContainer();
        this.aboutContainer.style.display = 'flex';
        this.listenForXClick();
    }

    showHowToPlayContainer(){
        this.getHowToPlayContainer();
        this.howToPlayContainer.style.display = 'flex'
        this.listenForXClick();
    }

    removeContainer(){

        if(this.aboutPopupIsActive){
            this.aboutContainer.style.display = 'none';
            this.aboutPopupIsActive = false;
        }
        if(this.howToPlayPopupIsActive){
            this.howToPlayContainer.style.display = 'none';
            this.howToPlayPopupIsActive = false;
        }

    }
  
    listenForXClick() {
        const xIcons = document.querySelectorAll('.x_icon'); 
        xIcons.forEach((x) => {
            x.addEventListener('click', () => {
                this.removeOverlay();
                this.removeContainer();
            });
        });
    }
}

const about = new About();