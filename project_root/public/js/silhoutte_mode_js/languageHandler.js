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

    // Update a specific element's text content and placeholder attributes
    updatePageContent(langData) {
        document.title = langData.title || document.title;

        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");

            if (langData[key]) {
                if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                    element.placeholder = langData[key]; // Update placeholder for input fields
                } else {
                    element.textContent = langData[key]; // Update text content for other elements
                }
            } else {
                console.warn(`No translation found for key: "${key}"`);
            }
        });
    }
}

export default new Language();
