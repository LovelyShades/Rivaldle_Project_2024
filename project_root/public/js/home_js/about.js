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

    listenForClick(){
        const icon = this.icon;
        icon.addEventListener('click',() =>{
            console.log('clicked');
        })
    }

    openAboutInfo(){
        
    }
}

const about = new About();