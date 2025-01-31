//variables stored in local storage

//home_streak in localStorage
//todaysNumber in localStorage
//yesterdaysNumber in localSorage

class Streak {
    constructor() {
        this.initialize();
    }

    async initialize() {
        await this.getStreakFromStorage();
        await this.getDayTracker();
        await this.getTodaysNumber();
        await this.getYesterdaysNumber();
        await this.addToStreak();
        console.log(this.storedStreak)
        await this.appendStreak();
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

        let streakDisplay = document.getElementById("streakDisplay");
        if (!streakDisplay) {
            streakDisplay = document.createElement("div");
            streakDisplay.id = "streakDisplay";
            streakDisplay.style.position = "absolute";
            streakDisplay.style.top = "0";  // Start positioning relative to parent
            streakDisplay.style.left = "50%";  // Center horizontally
            streakDisplay.style.transform = "translate(-50%, -150%)"; // Center and adjust upward
            streakDisplay.style.color = "white";
            streakDisplay.style.fontSize = "16px";
            streakDisplay.style.fontWeight = "bold";
            streakDisplay.style.zIndex = "50";
            logoContainer.appendChild(streakDisplay);
        }

        streakDisplay.textContent = this.storedStreak;
    }

}

const streak = new Streak();
