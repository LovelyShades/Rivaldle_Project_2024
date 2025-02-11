//variables stored in local storage

//classic_streak in localStorage
//todaysClassicNumber in localStorage
//yesterdaysClassicNumber in localSorage

class Streak {
    
    constructor() {
        this.firstDayClassicGuessed = localStorage.getItem("firstDayClassicGuessed");
        if(!this.firstDayClassicGuessed){
            this.firstDayClassicGuessed = false;
        } else {
            this.firstDayClassicGuessed = true;
        }
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
        this.storedStreak = localStorage.getItem("classic_streak");
        if (!this.storedStreak) {
            this.storedStreak = 1;
            this.addStreakToStorage();
        }
    }

    addStreakToStorage() {
        localStorage.setItem("classic_streak", this.storedStreak);
    }

    async getDayTracker() {
        this.dayTracker = await this.fetchData("day_tracker");
        if (this.dayTracker === null) {
            console.warn("Day tracker data could not be fetched.");
            this.dayTracker = 0;
        }

    }

    async getTodaysNumber() {
        this.todaysClassicNumber = localStorage.getItem("todaysClassicNumber");
        if (!this.todaysClassicNumber) {
            this.todaysClassicNumber = this.dayTracker;
            localStorage.setItem("todaysClassicNumber", this.todaysClassicNumber);
        }
    }

    async getYesterdaysNumber() {
        this.yesterdaysClassicNumber = localStorage.getItem("todaysClassicNumber");
        if (!this.yesterdaysClassicNumber) {
            this.yesterdaysClassicNumber = this.dayTracker;
            localStorage.setItem("yesterdaysClassicNumber", this.yesterdaysClassicNumber);
        }
    }

    addToStreak() {
        this.newDay = this.isNewDay();
        if (!this.newDay) return;
        console.log("ran")
        console.log(this.dayTracker, this.todaysClassicNumber)
        if (parseInt(this.dayTracker, 10) - parseInt(this.todaysClassicNumber, 10) === 1) {
            this.storedStreak = parseInt(this.storedStreak) + 1;
            console.log(this.storedStreak)
            this.streakDisplay.textContent = this.storedStreak - 1;
            this.addStreakToStorage();
        } else if (this.dayTracker != 0) {
            this.storedStreak = 2;
            this.streakDisplay.textContent = this.storedStreak - 1;
        } else {
            this.storedStreak = parseInt(this.storedStreak) + 1;
            console.log(this.storedStreak)
            this.streakDisplay.textContent = this.storedStreak - 1;
            this.addStreakToStorage();
            localStorage.setItem("firstDayClassicGuessed", true)
            this.firstDayClassicGuessed = true;
        }
        this.updatedStoredDays();
    }

    updatedStoredDays() {
        localStorage.setItem("yesterdaysClassicNumber", this.todaysClassicNumber);
        localStorage.setItem("todaysClassicNumber", this.dayTracker);
        localStorage.setItem("classic_streak", this.storedStreak)
    }

    isNewDay() {
        if(this.dayTracker == 0 && this.firstDayClassicGuessed == false) return true;
        return this.todaysClassicNumber != this.dayTracker;
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
        if(parseInt(this.dayTracker, 10) - parseInt(this.todaysClassicNumber, 10) >= 2) {
            this.storedStreak = 1;
            this.streakDisplay.textContent = "";
        }
    }

    isGameCompleted() {
        document.addEventListener('correctCharacterGuessed', async (event) => {
            this.addToStreak();
        });
    }    
}

const streak = new Streak();



