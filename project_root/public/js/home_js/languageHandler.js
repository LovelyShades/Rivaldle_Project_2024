import { translations } from './language.js';

export class Language {
    constructor() {
        this.loadLanguage();
        this.setupLanguageDropdown(); // Set up event listener for the dropdown
    }

    // Load the language from localStorage or default to 'en'
    loadLanguage() {
        const storedLanguage = localStorage.getItem('language') || 'en';
        this.applyLanguage(storedLanguage);
        this.updateDropdown(storedLanguage); // Update the dropdown to reflect the selected language
    }

    // Update the dropdown to reflect the selected language
    updateDropdown(language) {
        const languageSelect = document.getElementById('language_select');
        if (languageSelect) {
            languageSelect.value = language; // Set the value to match the stored language
        }
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
    setLanguage(language) {
        localStorage.setItem('language', language);
        this.applyLanguage(language);
        this.updateDropdown(language);  // Update the dropdown after setting the language

        // Dispatch a custom event to notify other parts of the application
        const event = new CustomEvent("languageChange");
        document.dispatchEvent(event);
    }

    // Handle dropdown change event
    changeLanguage(event) {
        const selectedLanguage = event.target.value;
        this.setLanguage(selectedLanguage);
    }

    // Set up event listener for language dropdown
    setupLanguageDropdown() {
        const languageSelect = document.getElementById("language_select");
        if (languageSelect) {
            languageSelect.addEventListener("change", (event) => this.changeLanguage(event));
        }
    }
}

export default new Language();
