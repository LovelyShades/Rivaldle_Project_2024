import { globalTranslations } from '../global_js/language_js/language.js';

export const translations = {

    en: {
        ...globalTranslations.en,
        abilityHeader: "Guess the abilities character"
    },
    es: {
        ...globalTranslations.es,
        abilityHeader: "Adivina el personaje por sus habilidades"
    },
    fr: {
        ...globalTranslations.fr,
        abilityHeader: "Devinez le personnage par ses capacités"
    },
    de: {
        ...globalTranslations.de,
        abilityHeader: "Errate den Charakter anhand seiner Fähigkeiten"
    },
    zh: {
        ...globalTranslations.zh,
        abilityHeader: "猜猜这个角色的技能"
    }

    // Other languages...
};
