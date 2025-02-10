//variables stored in local storage

//silhoutte_steak in localStorage
//todaysSilhoutteNumber in localStorage
//yesterdaysSilhoutteNumber in localSorage

class Streak {
    
    constructor() {
        this.language = localStorage.getItem('language');
        this.initialize();
    }

    async initialize() {
        await this.getStreakFromStorage();
        await this.getDayTracker();
        await this.getTodaysNumber();
        await this.getYesterdaysNumber();
        await this.appendStreak();
        this.isGameCompleted();
    }

    async fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getStreakFromStorage() {
        this.storedStreak = localStorage.getItem("silhoutte_steak");
        if (!this.storedStreak) {
            this.storedStreak = 1;
            this.addStreakToStorage();
        }
    }

    addStreakToStorage() {
        localStorage.setItem("silhoutte_steak", this.storedStreak);
    }

    async getDayTracker() {
        this.dayTracker = await this.fetchData("day_tracker");
        if (this.dayTracker === null) {
            console.warn("Day tracker data could not be fetched.");
            this.dayTracker = 0;
        }

    }

    async getTodaysNumber() {
        this.todaysSilhoutteNumber = localStorage.getItem("todaysSilhoutteNumber");
        if (!this.todaysSilhoutteNumber) {
            this.todaysSilhoutteNumber = this.dayTracker;
            localStorage.setItem("todaysSilhoutteNumber", this.todaysSilhoutteNumber);
        }
    }

    async getYesterdaysNumber() {
        this.yesterdaysSilhoutteNumber = localStorage.getItem("todaysSilhoutteNumber");
        if (!this.yesterdaysSilhoutteNumber) {
            this.yesterdaysSilhoutteNumber = this.dayTracker;
            localStorage.setItem("yesterdaysSilhoutteNumber", this.yesterdaysSilhoutteNumber);
        }
    }

    addToStreak() {
        this.newDay = this.isNewDay();
        if (!this.newDay) return;
        console.log(this.dayTracker, this.todaysSilhoutteNumber)
        if (parseInt(this.dayTracker, 10) - parseInt(this.todaysSilhoutteNumber, 10) === 1) {
            this.storedStreak = parseInt(this.storedStreak) + 1;
            this.streakDisplay.textContent = this.storedStreak - 1;
            this.addStreakToStorage();
        } else if (this.dayTracker != 0) {
            this.storedStreak = 2;
            this.streakDisplay.textContent = this.storedStreak - 1;
        }
        this.updatedStoredDays();
    }

    updatedStoredDays() {
        localStorage.setItem("yesterdaysSilhoutteNumber", this.todaysSilhoutteNumber);
        localStorage.setItem("todaysSilhoutteNumber", this.dayTracker);
        localStorage.setItem("silhoutte_steak", this.storedStreak)
    }

    isNewDay() {
        return this.todaysSilhoutteNumber != this.dayTracker;
    }

    appendStreak() {
        if (this.storedStreak == 0) return;

        const logo = document.getElementById("streak_icon");
        if (!logo) {
            console.error("Logo element not found!");
            return;
        }

        let logoContainer = logo.parentElement;
        if (!logoContainer) {
            console.error("Streak icon has no parent container!");
            return;
        }
        logoContainer.style.position = "relative";

        this.streakDisplay = document.getElementById("streakDisplay");
        if (!this.streakDisplay) {
            this.streakDisplay = document.createElement("div");
            this.streakDisplay.id = "streakDisplay";
            this. streakDisplay.style.position = "absolute";
            this.streakDisplay.style.top = "40%";  // Start positioning relative to parent
            this.streakDisplay.style.left = "94.1%";  // Center horizontally
            this.streakDisplay.style.color = "#dce1f4";


            this.streakDisplay.style.fontSize = "17px";
            this.streakDisplay.style.fontWeight = "bold";
            this.streakDisplay.style.pointerEvents = "none"; // Make it non-clickable
            this.streakDisplay.style.zIndex = "0";
            logoContainer.appendChild(this.streakDisplay);
        }
        if(this.storedStreak == 0){
            this.streakDisplay.textContent = "";
        } else {
            this.streakDisplay.textContent = this.storedStreak - 1;
        }
        if(parseInt(this.dayTracker, 10) - parseInt(this.todaysSilhoutteNumber, 10) >= 2) {
            this.storedStreak = 1;
            this.streakDisplay.textContent = "";
        }
    }

    isGameCompleted() {
        document.addEventListener('correctCharacterGuessed', async (event) => {
            console.log("guessed")
            this.addToStreak();
        });
    }    
}

const streak = new Streak();



