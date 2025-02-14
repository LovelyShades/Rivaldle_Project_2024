import { numberToChinese } from "/js/global_js/num_to_chinese.js";
import { globalTranslations } from '../global_js/language_js/language.js';

//variables stored in local storage

//classic_streak in localStorage
//todaysClassicNumber in localStorage
//yesterdaysClassicNumber in localSorage

class Streak {
    
    constructor() {
        this.firstDayClassicGuessed = localStorage.getItem("firstDayClassicGuessed");
        this.language = localStorage.getItem('language');

        if(!this.firstDayClassicGuessed){
            this.firstDayClassicGuessed = false;
        } else {
            this.firstDayClassicGuessed = true;
        }
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
        this.bestStoredStreak = parseInt(localStorage.getItem("best_classic_streak")) || 0;

        this.currentStreakDisplay = document.getElementById("current_streak");
        this.bestStreakDisplay = document.getElementById("best_streak");

        if (!this.storedStreak) {
            this.storedStreak = 1;
            this.addStreakToStorage();
        }
    }

    addStreakToStorage() {
        localStorage.setItem("classic_streak", this.storedStreak);
        localStorage.setItem("best_classic_streak", this.bestStoredStreak);
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
        console.log(this.newDay);
        if (!this.newDay) return;
        console.log(this.dayTracker, this.todaysClassicNumber)
        if (parseInt(this.dayTracker, 10) - parseInt(this.todaysClassicNumber, 10) === 1) {
            this.storedStreak = parseInt(this.storedStreak) + 1;
            this.addStreakToStorage();
        } else if (this.dayTracker != 0) {
            this.storedStreak = 2;
        }else {
            this.storedStreak = parseInt(this.storedStreak) + 1;
            this.addStreakToStorage();
            localStorage.setItem("firstDayClassicGuessed", true)
            this.firstDayClassicGuessed = true;
        }
        this.updatedStoredDays();
        this.appendStreak();
    }

    updatedStoredDays() {
        localStorage.setItem("yesterdaysClassicNumber", this.todaysClassicNumber);
        localStorage.setItem("todaysClassicNumber", this.dayTracker);
        localStorage.setItem("classic_streak", this.storedStreak)
        localStorage.setItem("best_classic_streak", this.bestStoredStreak)
    }

    isNewDay() {
        if(this.dayTracker == 0 && this.firstDayClassicGuessed == false) return true;
        return this.todaysClassicNumber != this.dayTracker;
    }

    appendStreak() {
        if (this.storedStreak == 0) return;
        if(this.storedStreak >= this.bestStoredStreak){
            this.bestStoredStreak = this.storedStreak;
        }
        
        this.currentStreakDisplay.innerHTML = this.getTranslation('currentStreak', this.language) + " " + this.translatedNumber(this.storedStreak - 1);
        this.bestStreakDisplay.innerHTML = this.getTranslation('bestStreak', this.language) + " " + this.translatedNumber(this.bestStoredStreak - 1);    
    }

    getTranslation(key, lang ) {
        return globalTranslations[lang]?.[key] || key;
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



