//variables stored in local storage

//home_streak in localStorage
//todaysNumber in localStorage
//yesterdaysNumber in localSorage

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
        await this.addToStreak();
        await this.appendStreak();
        this.listenForChange();
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

    listenForChange(){
        document.addEventListener("languageChange", (event) => {
            this.language = localStorage.getItem('language');
            console.log(streakDisplay.textContent)
            streakDisplay.textContent = this.translatedNumber(this.storedStreak)
        });
    }
    async getStreakFromStorage() {
        this.storedStreak = localStorage.getItem("home_streak");
        if (!this.storedStreak) {
            this.storedStreak = 1;
            this.addStreakToStorage();
        }
    }

    addStreakToStorage() {
        localStorage.setItem("home_streak", this.storedStreak);
    }

    async getDayTracker() {
        this.dayTracker = await this.fetchData("day_tracker");
        if (this.dayTracker === null) {
            console.warn("Day tracker data could not be fetched.");
            this.dayTracker = 0;
        }

    }

    async getTodaysNumber() {
        this.todaysNumber = localStorage.getItem("todaysNumber");
        if (!this.todaysNumber) {
            this.todaysNumber = this.dayTracker;
            localStorage.setItem("todaysNumber", this.todaysNumber);
        }
    }

    async getYesterdaysNumber() {
        this.yesterdaysNumber = localStorage.getItem("todaysNumber");
        if (!this.yesterdaysNumber) {
            this.yesterdaysNumber = this.dayTracker;
            localStorage.setItem("yesterdaysNumber", this.yesterdaysNumber);
        }
    }

    addToStreak() {
        this.newDay = this.isNewDay();
        console.log(this.newDay);
        if (!this.newDay) return;
        console.log(this.dayTracker, this.todaysNumber)
        if (parseInt(this.dayTracker, 10) - parseInt(this.todaysNumber, 10) === 1) {
            this.storedStreak = parseInt(this.storedStreak) + 1;
            this.addStreakToStorage();
        } else if (this.dayTracker != 0) {
            this.storedStreak = 1;
        }
        this.updatedStoredDays();
    }

    updatedStoredDays() {
        localStorage.setItem("yesterdaysNumber", this.todaysNumber);
        localStorage.setItem("todaysNumber", this.dayTracker);
        localStorage.setItem("home_streak", this.storedStreak)
    }

    isNewDay() {
        return this.todaysNumber != this.dayTracker;
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
            this.streakDisplay.style.top = "38%";  // Start positioning relative to parent
            this.streakDisplay.style.left = "61%";  // Center horizontally
            this.streakDisplay.style.color = "#dce1f4";


            this.streakDisplay.style.fontSize = "17px";
            this.streakDisplay.style.fontWeight = "bold";
            this.streakDisplay.style.pointerEvents = "none"; // Make it non-clickable
            this.streakDisplay.style.zIndex = "0";
            logoContainer.appendChild(this.streakDisplay);
        }
        this.streakDisplay.textContent = this.storedStreak;
    }
}

const streak = new Streak();
