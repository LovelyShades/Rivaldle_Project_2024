import { globalTranslations } from '../global_js/language_js/language.js';

export const translations = {
    en: {
        ...globalTranslations.en,

        emojiHeader: "Guess the hero with 4 emojis!"
    },
    es: {
        ...globalTranslations.es,

        emojiHeader: "¡Adivina el héroe con 4 emojis!"
    },
    fr: {
        ...globalTranslations.fr,

        emojiHeader: "Devinez le héros avec 4 émojis !"
    },
    de: {
        ...globalTranslations.de,

        emojiHeader: "Errate den Helden mit 4 Emojis!"
    },
    zh: {
        ...globalTranslations.zh,

        emojiHeader: "用4个表情符号猜英雄！"
    }
};
