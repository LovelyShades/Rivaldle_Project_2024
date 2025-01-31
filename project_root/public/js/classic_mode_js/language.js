document.addEventListener('DOMContentLoaded', function () {
    // Get the language from localStorage (or default to 'en' if not found)
    const storedLanguage = localStorage.getItem('language') || 'en';

    // Apply language to the page based on the stored language
    applyLanguage(storedLanguage);
});

// Function to apply translations to the page based on the selected language
function applyLanguage(language) {
    const translations = {
        en: {
            background: "Select a Background",
            resetBackground: "Reset Background",
            gameInstructions: "Color Indicators",
            correct: "Correct",
            partial: "Partial",
            incorrect: "Incorrect"
        },
        es: {
            background: "Seleccionar un fondo",
            resetBackground: "Restablecer fondo",
            gameInstructions: "Indicadores de color",
            correct: "Correcto",
            partial: "Parcial",
            incorrect: "Incorrecto"
        },
        // Add other languages here...
    };

    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}
