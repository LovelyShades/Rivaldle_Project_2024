import { translations } from './language.js';


export class Language {
    constructor() {
        this.loadLanguage();
    }


    // Load the language from localStorage or default to 'en'
    loadLanguage() {
        const storedLanguage = localStorage.getItem('language') || 'en';
        this.applyLanguage(storedLanguage);
    }


    // Apply the translations to the page
    applyLanguage(language) {
        const langData = translations[language];
        if (!langData) return;
        this.updatePageContent(langData);
    }




    // Update a specific element's text content
    updatePageContent(langData) {
        document.title = langData.title;


        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (langData[key]) {
                element.textContent = langData[key];
            } else {
                console.warn(`No translation found for key: "${key}"`);
            }
        });
    }




}


export default new Language();





