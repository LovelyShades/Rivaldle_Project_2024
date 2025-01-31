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

    // Update page content for language-specific elements
    updatePageContent(langData) {
        document.title = langData.title;
        this.updateElement('title', langData.title);
        this.updateElement('mode_classic', langData.mode_classic);
        this.updateElement('mode_silhouette', langData.mode_silhouette);
        this.updateElement('mode_emoji', langData.mode_emoji);
        this.updateElement('mode_character_ability', langData.mode_character_ability);
        this.updateElement('aboutHeader', langData.aboutHeader);
        this.updateElement('aboutText1', langData.aboutText1);
        this.updateElement('aboutText2', langData.aboutText2);
        this.updateElement('aboutText3', langData.aboutText3);
        this.updateElement('languageHeader', langData.languageHeader);
        this.updateElement('languagePrompt', langData.languagePrompt);
        this.updateElement('english', langData.english);
        this.updateElement('spanish', langData.spanish);
        this.updateElement('french', langData.french);
        this.updateElement('german', langData.german);
        this.updateElement('chinese', langData.chinese);
        this.updateElement('howToPlayHeader', langData.howToPlayHeader);
        this.updateElement('howToPlayText1', langData.howToPlayText1);
        this.updateElement('howToPlayText2', langData.howToPlayText2);
        this.updateElement('howToPlayText3', langData.howToPlayText3);

        this.updateElement('selectBackground', langData.selectBackground);
        this.updateElement('footerText1', langData.footerText1);
        this.updateElement('footerText2', langData.footerText2);
        this.updateElement('privacyPolicy', langData.privacyPolicy);

    }

    // Update a specific element's text content
    updateElement(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        } else {
            console.warn(`Element with ID "${id}" not found.`);
        }
    }

    // Set the language and save to localStorage
    setLanguage(language) {
        localStorage.setItem('language', language);
        this.applyLanguage(language);
    }
}

export default new Language();
