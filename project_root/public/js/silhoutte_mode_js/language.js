import { globalTranslations } from '../global_js/language_js/language.js';

export const translations = {
    en: {
        ...globalTranslations.en,
        silhouetteHeader: "Which character is this a silhouette of?",
        silhouetteFooter: "Each try zooms out a bit"
    },
    es: {
        silhouetteHeader: "¿De qué personaje es esta silueta?",
        silhouetteFooter: "Cada intento hace que se acerque un poco más"
    },
    fr: {
        silhouetteHeader: "De quel personnage est cette silhouette ?",
        silhouetteFooter: "Chaque essai zoom un peu plus"
    },
    de: {
        silhouetteHeader: "Von welchem Charakter ist diese Silhouette?",
        silhouetteFooter: "Jeder Versuch zoomt ein wenig heraus"
    },
    zh: {
        silhouetteHeader: "这是谁的剪影？",
        silhouetteFooter: "每次尝试都会稍微放大"
    }

    // Other languages...
};
