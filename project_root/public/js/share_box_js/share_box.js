class ShareBox{
    constructor(){
        this.initialize()

    }

    initialize(){
        this.isGameCompleated();
    }

    isGameCompleated() {
        document.addEventListener('correctCharacterGuessed', (event) => {
            this.appendShareBox();
        });
    }

    appendShareBox(){
        const shareBoxContainer = document.getElementById('share_box_contianer')
        const shareBox = document.createElement('div');
        shareBox.className = 'shareBox'
        shareBoxContainer.append(shareBox);

        this.appendHeaderText(shareBox);
        this.appendWebUrl(shareBox);
        this.copyButton(shareBox);
    }

    appendHeaderText(shareBox){
        const headerText = document.createElement('div');
        headerText.className = 'shareBoxText'
        headerText.style.fontSize ='xx-large'
        headerText.innerHTML = `I found #Rivaldle ${this.getMode()} mode hero in ${this.getTriesText()}\n👑`
        shareBox.append(headerText);
    }

    appendWebUrl(shareBox){
        const webUrlText = document.createElement('div');
        webUrlText.className = 'shareBoxText'
        webUrlText.style.fontSize ='x-large'
        webUrlText.innerHTML = 'https://rivaldle.com'
        shareBox.append(webUrlText);
    }

    copyButton(shareBox) {
        let textToCopy = `I found #Rivaldle ${this.getMode()} mode hero in ${this.getTriesText()}🔨\nCan you beat my score?\n https://rivaldle.net`;
        const copyButton = document.createElement('button');
        copyButton.innerHTML = 'Share!😊';
        copyButton.className = 'button-43'
        copyButton.style.cursor = 'pointer';
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(textToCopy).then(() => {
                copyButton.innerHTML = 'Copied👍';
                setTimeout(() => {
                    copyButton.innerHTML = 'Share!😊';
                }, 1500);
                }).catch((error) => {
                console.error('Failed to copy text:', error);
            });
        });
    
        shareBox.append(copyButton);
    }
    
    getMode(){
        let mode = window.location.pathname.replace('/', '');
        mode = mode.replace('_', ' ');
        return mode;
    }


    
    getTries() {
        const pageKey = this.getCurrentPageKey();
        const storedCharacters = JSON.parse(localStorage.getItem(pageKey)) || [];
        return storedCharacters.length;
    }

    getTriesText() {
        const tries = this.getTries();
        if (tries === 1) {
            console.log(tries)
            return 'one shot!';
        }else{
            return `${tries} tries!`;
        }
    }

    getCurrentPageKey() {
        const path = window.location.pathname;
        return `searched_characters_${path}`;
    }
}

const shareBox = new ShareBox();