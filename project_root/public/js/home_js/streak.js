class Streak{
    constructor(){
        this.initialize();
    }

    initialize(){

    }

    getStreakFromStorage(){
        this.storedStreak = localStorage.getItem("home_streak");
        if(!this.storedStreak){
            this.storedStreak = 1;
        }
    }

    addStreakToStorage(){
        localStorage.setItem("home_streak", this.storedStreak);
    }
}