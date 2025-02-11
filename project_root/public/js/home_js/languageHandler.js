import { translations } from './language.js';

export class Language {
    constructor() {
        this.loadLanguage();
    }

    // Load the language from localStorage or default to 'en'
    // Load the language from localStorage or default to 'en'
    loadLanguage() {
        const storedLanguage = localStorage.getItem('language') || 'en';
        this.applyLanguage(storedLanguage);
        this.updateDropdown(storedLanguage); // Update the dropdown to reflect the selected language
    }

    // Update the dropdown to reflect the selected language
    updateDropdown(language) {
        const languageSelect = document.getElementById('language_select');
        languageSelect.value = language; // Set the value to match the stored language
    }


    // Apply the translations to the page
    applyLanguage(language) {
        const langData = translations[language];
        if (!langData) return;
        this.updatePageContent(langData);
    }

    // Update a specific element's text content
    updatePageContent(langData) {
        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (langData[key]) {
                element.textContent = langData[key];
            } else {
                console.warn(`No translation found for key: "${key}"`);
            }
        });
    }

    // Set the language and save to localStorage
    // Set the language and save to localStorage
    setLanguage(language) {
        // If setting to English, we can clear localStorage to avoid conflicts
        if (language === 'en') {
            localStorage.setItem('language', 'en');
        } else {
            localStorage.setItem('language', language);
        }
        this.applyLanguage(language);
        this.updateDropdown(language);  // Update the dropdown after setting the language
        const event = new CustomEvent("languageChange", {
        });
        document.dispatchEvent(event);
    }

}

export default new Language();
