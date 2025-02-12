//variables stored in local storage

//silhoutte in localStorage
//todaysAbilityNumber in localStorage
//yesterdaysAbilityNumber in localSorage

class Streak {
    
    constructor() {
        this.firstDayAbilityGuessed = localStorage.getItem("firstDayAbilityGuessed");
        if(!this.firstDayAbilityGuessed){
            this.firstDayAbilityGuessed = false;
        } else {
            this.firstDayAbilityGuessed = true;
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
        this.storedStreak = localStorage.getItem("ability_streak");
        if (!this.storedStreak) {
            this.storedStreak = 1;
            this.addStreakToStorage();
        }
    }

    addStreakToStorage() {
        localStorage.setItem("ability_streak", this.storedStreak);
    }

    async getDayTracker() {
        this.dayTracker = await this.fetchData("day_tracker");
        if (this.dayTracker === null) {
            console.warn("Day tracker data could not be fetched.");
            this.dayTracker = 0;
        }

    }

    async getTodaysNumber() {
        this.todaysAbilityNumber = localStorage.getItem("todaysAbilityNumber");
        if (!this.todaysAbilityNumber) {
            this.todaysAbilityNumber = this.dayTracker;
            localStorage.setItem("todaysAbilityNumber", this.todaysAbilityNumber);
        }
    }

    async getYesterdaysNumber() {
        this.yesterdaysAbilityNumber = localStorage.getItem("todaysAbilityNumber");
        if (!this.yesterdaysAbilityNumber) {
            this.yesterdaysAbilityNumber = this.dayTracker;
            localStorage.setItem("yesterdaysAbilityNumber", this.yesterdaysAbilityNumber);
        }
    }

    addToStreak() {
        this.newDay = this.isNewDay();
        if (!this.newDay) return;
        console.log("ran")
        console.log(this.dayTracker, this.todaysAbilityNumber)
        if (parseInt(this.dayTracker, 10) - parseInt(this.todaysAbilityNumber, 10) === 1) {
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
            localStorage.setItem("firstDayAbilityGuessed", true)
            this.firstDayAbilityGuessed = true;
        }
        this.updatedStoredDays();
    }

    updatedStoredDays() {
        localStorage.setItem("yesterdaysAbilityNumber", this.todaysAbilityNumber);
        localStorage.setItem("todaysAbilityNumber", this.dayTracker);
        localStorage.setItem("ability_streak", this.storedStreak)
    }

    isNewDay() {
        if(this.dayTracker == 0 && this.firstDayAbilityGuessed == false) return true;
        return this.todaysAbilityNumber != this.dayTracker;
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
        if(parseInt(this.dayTracker, 10) - parseInt(this.todaysAbilityNumber, 10) >= 2) {
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



