import { numberToChinese } from "/js/global_js/num_to_chinese.js";
import { globalTranslations } from '../global_js/language_js/language.js';

//variables stored in local storage

//home_streak in localStorage
//todaysNumber in localStorage
//yesterdaysNumber in localSorage

class Streak {
    
    constructor() {
        this.language = localStorage.getItem('language');
        this.currentStreakDisplay = document.getElementById("current_streak");
        this.bestStreadDisplay = document.getElementById("best_streak");
        this.initialize();
    }

    async initialize() {
        await this.getStreakFromStorage();
        await this.getDayTracker();
        await this.getTodaysNumber();
        await this.getYesterdaysNumber();
        await this.addToStreak();
        await this.appendStreak();
        this.listenForLanguageSelection();
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
        this.bestStoredStreak = parseInt(localStorage.getItem("best_home_streak")) || 0;
        if (!this.storedStreak) {
            this.storedStreak = 1;
            this.addStreakToStorage();
        }
    }

    addStreakToStorage() {
        localStorage.setItem("home_streak", this.storedStreak);
        localStorage.setItem("best_home_streak", this.bestStoredStreak);
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
        localStorage.setItem("best_home_streak", this.bestStoredStreak)
    }

    isNewDay() {
        return this.todaysNumber != this.dayTracker;
    }

    appendStreak() {
        if (this.storedStreak == 0) return;
        if(this.storedStreak >= this.bestStoredStreak){
            this.bestStoredStreak = this.storedStreak;
        }
        this.currentStreakDisplay.innerHTML = this.translatedNumber(this.storedStreak);
        this.bestStreadDisplay.innerHTML = this.translatedNumber(this.bestStoredStreak);
    }

    translatedNumber(number){
        if(this.language != 'zh'){
            return number;
        } 
        return numberToChinese(number);
    }
    listenForLanguageSelection() {
        // Get the language dropdown
        const languageSelect = document.getElementById('language_select');

        // Listen for changes in the dropdown
        languageSelect.addEventListener('change', (e) => {
            this.language = e.target.value;

            console.log(this.language)
            this.currentStreakDisplay.innerHTML = this.translatedNumber(this.storedStreak);
            this.bestStreadDisplay.innerHTML = this.translatedNumber(this.bestStoredStreak);    
        });
    }

}

const streak = new Streak();
