import { translations } from './language.js';

class Language {
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
        // List of headers that need the underline styling
        const headersWithUnderline = [
            'characterHeader', 'genderHeader', 'speciesHeader',
            'affiliationHeader', 'roleHeader', 'eyeColorHeader',
            'hairColorHeader', 'hpHeader'
        ];

        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");

            if (langData[key]) {
                const translatedText = langData[key];

                // If the element is an <input>, update the placeholder
                if (element.tagName === "INPUT" && element.hasAttribute("placeholder")) {
                    element.setAttribute("placeholder", translatedText);
                }
                // If the element is one of the headers with underline
                else if (headersWithUnderline.includes(key)) {
                    const underline = element.querySelector('.characterListHeadersUnderline');

                    // Set the translated text while preserving the underline
                    element.innerHTML = `${translatedText}`;

                    // If underline div is missing, re-append it
                    if (!underline) {
                        const underlineDiv = document.createElement('div');
                        underlineDiv.classList.add('characterListHeadersUnderline');
                        element.appendChild(underlineDiv);
                    } else {
                        element.appendChild(underline);
                    }
                }
                // Default case: update text content
                else {
                    element.textContent = translatedText;
                }
            } else {
                console.warn(`No translation found for key: "${key}"`);
            }
        });
    }
}

// Automatically run the script when the page loads
document.addEventListener("DOMContentLoaded", () => {
    new Language();
});
