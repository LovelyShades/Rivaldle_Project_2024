import { numberToChinese } from "/js/global_js/num_to_chinese.js";
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
        this.bestStoredStreak = parseInt(localStorage.getItem("best_ability_streak")) || 0;

        this.currentStreakDisplay = document.getElementById("current_streak");
        this.bestStreakDisplay = document.getElementById("best_streak");

        if (!this.storedStreak) {
            this.storedStreak = 1;
            this.addStreakToStorage();
        }
    }

    addStreakToStorage() {
        localStorage.setItem("ability_streak", this.storedStreak);
        localStorage.setItem("best_ability_streak", this.bestStoredStreak);

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
        if (parseInt(this.dayTracker, 10) - parseInt(this.todaysAbilityNumber, 10) === 1) {
            this.storedStreak = parseInt(this.storedStreak) + 1;
            this.addStreakToStorage();
        } else if (this.dayTracker != 0) {
            this.storedStreak = 2;
        } else {
            this.storedStreak = parseInt(this.storedStreak) + 1;
            this.addStreakToStorage();
            localStorage.setItem("firstDayAbilityGuessed", true)
            this.firstDayAbilityGuessed = true;
        }
        this.updatedStoredDays();
        this.appendStreak();
    }

    updatedStoredDays() {
        localStorage.setItem("yesterdaysAbilityNumber", this.todaysAbilityNumber);
        localStorage.setItem("todaysAbilityNumber", this.dayTracker);
        localStorage.setItem("ability_streak", this.storedStreak)
        localStorage.setItem("best_ability_streak", this.bestStoredStreak)
    }

    isNewDay() {
        if(this.dayTracker == 0 && this.firstDayAbilityGuessed == false) return true;
        return this.todaysAbilityNumber != this.dayTracker;
    }

    appendStreak() {
        if (this.storedStreak == 0) return;
        if(this.storedStreak >= this.bestStoredStreak){
            this.bestStoredStreak = this.storedStreak;
        }
        this.currentStreakDisplay.innerHTML = this.translatedNumber(this.storedStreak - 1);
        this.bestStreakDisplay.innerHTML = this.translatedNumber(this.bestStoredStreak - 1);
    }

    translatedNumber(number){
        this.language = localStorage.getItem('language');
        if(this.language != 'zh'){
            return number;
        } 
        return numberToChinese(number);
    }

    isGameCompleted() {
        document.addEventListener('correctCharacterGuessed', async (event) => {
            this.addToStreak();
        });
    }    
}

const streak = new Streak();



