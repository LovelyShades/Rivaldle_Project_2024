import { numberToChinese } from "/js/global_js/num_to_chinese.js";
import { globalTranslations } from '../global_js/language_js/language.js';
//variables stored in local storage

//silhoutte in localStorage
//todaysEmojiNumber in localStorage
//yesterdaysEmojiNumber in localSorage

class Streak {
    
    constructor() {
        this.firstDayEmojiGuessed = localStorage.getItem("firstDayEmojiGuessed");
        if(!this.firstDayEmojiGuessed){
            this.firstDayEmojiGuessed = false;
        } else {
            this.firstDayEmojiGuessed = true;
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
        this.storedStreak = localStorage.getItem("emoji_streak");
        this.bestStoredStreak = parseInt(localStorage.getItem("best_emoji_streak")) || 0;

        this.currentStreakDisplay = document.getElementById("current_streak");
        this.bestStreakDisplay = document.getElementById("best_streak");

        if (!this.storedStreak) {
            this.storedStreak = 1;
            this.addStreakToStorage();
        }
    }

    addStreakToStorage() {
        localStorage.setItem("emoji_streak", this.storedStreak);
        localStorage.setItem("best_emoji_streak", this.bestStoredStreak);
    }

    async getDayTracker() {
        this.dayTracker = await this.fetchData("day_tracker");
        if (this.dayTracker === null) {
            console.warn("Day tracker data could not be fetched.");
            this.dayTracker = 0;
        }

    }

    async getTodaysNumber() {
        this.todaysEmojiNumber = localStorage.getItem("todaysEmojiNumber");
        if (!this.todaysEmojiNumber) {
            this.todaysEmojiNumber = this.dayTracker;
            localStorage.setItem("todaysEmojiNumber", this.todaysEmojiNumber);
        }
    }

    async getYesterdaysNumber() {
        this.yesterdaysEmojiNumber = localStorage.getItem("todaysEmojiNumber");
        if (!this.yesterdaysEmojiNumber) {
            this.yesterdaysEmojiNumber = this.dayTracker;
            localStorage.setItem("yesterdaysEmojiNumber", this.yesterdaysEmojiNumber);
        }
    }

    addToStreak() {
        this.newDay = this.isNewDay();
        if (!this.newDay) return;
        console.log("ran")
        console.log(this.dayTracker, this.todaysEmojiNumber)
        if (parseInt(this.dayTracker, 10) - parseInt(this.todaysEmojiNumber, 10) === 1) {
            this.storedStreak = parseInt(this.storedStreak) + 1;
            this.addStreakToStorage();
        } else if (this.dayTracker != 0) {
            this.storedStreak = 2;
        } else {
            this.storedStreak = parseInt(this.storedStreak) + 1;
            this.addStreakToStorage();
            localStorage.setItem("firstDayEmojiGuessed", true)
            this.firstDayEmojiGuessed = true;
        }
        this.updatedStoredDays();
        this.appendStreak();
    }

    updatedStoredDays() {
        localStorage.setItem("yesterdaysEmojiNumber", this.todaysEmojiNumber);
        localStorage.setItem("todaysEmojiNumber", this.dayTracker);
        localStorage.setItem("emoji_streak", this.storedStreak)
        localStorage.setItem("best_emoji_streak", this.bestStoredStreak)
    }

    isNewDay() {
        if(this.dayTracker == 0 && this.firstDayEmojiGuessed == false) return true;
        return this.todaysEmojiNumber != this.dayTracker;
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



