class Person {
    constructor(translations) {
        this.translations = translations;
    }
  
    // Method to get translations dynamically
    get language() {
        const selectedLanguage = localStorage.getItem('language') || 'en';
        return this.translations[selectedLanguage] || this.translations['en']; // Fallback to English
    }
  }
  
  // Creating Captain America with translations
  const captainAmerica = new Person({
    en: {
        name: "Captain America",
        gender: "male",
        species: "human",
        affiliation: "avengers",
        role: "vanguard",
        eyeColor: ["blue"],
        hairColor: ["blond"],
        hp: 675,
        dateOfOrigin: 1941,
        emoji: ["⭐", "🕰️", "🛡️", "🇺🇸"],
        abilities: [
            "SENTINEL STRIKE", "FREEDOM CHARGE", "LEADING DASH",
            "VIBRANIUM ENERGY SAW", "LIBERTY RUSH", "SUPER-SOLDIER SLAM", "LIVING LEGEND"
        ],
        ult: "FREEDOM CHARGE"
    },
    es: {
        name: "Capitán América",
        gender: "masculino",
        species: "humano",
        affiliation: "vengadores",
        role: "vanguardia",
        eyeColor: ["azul"],
        hairColor: ["rubio"],
        hp: 675,
        dateOfOrigin: 1941,
        emoji: ["⭐", "🕰️", "🛡️", "🇺🇸"],
        abilities: [
            "GOLPE CENTINELA", "CARGA DE LIBERTAD", "SALTO DE LIDERAZGO",
            "SIERRA DE ENERGÍA VIBRANIUM", "IMPULSO DE LIBERTAD", "GOLPE DE SÚPER SOLDADO", "LEYENDA VIVA"
        ],
        ult: "CARGA DE LIBERTAD"
    },
    fr: {
        name: "Capitaine Amérique",
        gender: "homme",
        species: "humain",
        affiliation: "avengers",
        role: "avant-garde",
        eyeColor: ["bleu"],
        hairColor: ["blond"],
        hp: 675,
        dateOfOrigin: 1941,
        emoji: ["⭐", "🕰️", "🛡️", "🇺🇸"],
        abilities: [
            "FRAPPE SENTINELLE", "CHARGE DE LA LIBERTÉ", "RUÉE DE CHEF",
            "SCIE ÉNERGÉTIQUE VIBRANIUM", "COURSE DE LIBERTÉ", "COUP DU SUPER-SOLDAT", "LÉGENDE VIVANTE"
        ],
        ult: "CHARGE DE LA LIBERTÉ"
    },
    de: {  // German
        name: "Captain Amerika",
        gender: "männlich",
        species: "menschlich",
        affiliation: "Avengers",
        role: "Vorreiter",
        eyeColor: ["blau"],
        hairColor: ["blond"],
        hp: 675,
        dateOfOrigin: 1941,
        emoji: ["⭐", "🕰️", "🛡️", "🇺🇸"],
        abilities: [
            "WÄCHTER SCHLAG", "FREIHEITSSTURM", "FÜHRUNGSSCHLAG",
            "VIBRANIUM ENERGIESÄGE", "FREIHEITSSTURM", "SUPERSOLDATEN SCHLAG", "LEBENDIGE LEGENDE"
        ],
        ult: "FREIHEITSSTURM"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "美国队长",
        gender: "男性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "先锋",
        eyeColor: ["蓝色"],
        hairColor: ["金色"],
        hp: 675,
        dateOfOrigin: 1941,
        emoji: ["⭐", "🕰️", "🛡️", "🇺🇸"],
        abilities: [
            "哨兵打击", "自由冲锋", "领导冲刺",
            "振金能量锯", "自由突袭", "超级士兵猛击", "活传奇"
        ],
        ult: "自由冲锋"
    },
});
  
const doctorStrange = new Person({
    en: {
        name: "Doctor Strange",
        gender: "male",
        species: "human",
        affiliation: "Avengers",
        role: "Vanguard",
        eyeColor: ["green"],
        hairColor: ["brown", "grey"],
        hp: 650,
        dateOfOrigin: 1963,
        emoji: ["👁️", "📖", "✨", "🧙‍♂️"],
        abilities: [
            "DAGGERS OF DENAK", "EYE OF AGAMOTTO", "CLOAK OF LEVITATION",
            "MAELSTROM OF MADNESS", "PENTAGRAM OF FARALLAH", "SHIELD OF THE SERAPHIM"
        ],
        ult: "EYE OF AGAMOTTO"
    },
    es: {  // Spanish
        name: "Doctor Strange",
        gender: "masculino",
        species: "humano",
        affiliation: "Vengadores",
        role: "Vanguardia",
        eyeColor: ["verde"],
        hairColor: ["marrón", "gris"],
        hp: 650,
        dateOfOrigin: 1963,
        emoji: ["👁️", "📖", "✨", "🧙‍♂️"],
        abilities: [
            "DAGAS DE DENAK", "OJO DE AGAMOTTO", "CAPA DE LEVITACIÓN",
            "MAELSTROM DE LA LOCURA", "PENTAGRAMA DE FARALLAH", "ESCUDO DEL SERAFÍN"
        ],
        ult: "OJO DE AGAMOTTO"
    },
    fr: {  // French
        name: "Docteur Strange",
        gender: "homme",
        species: "humain",
        affiliation: "Avengers",
        role: "Avant-garde",
        eyeColor: ["vert"],
        hairColor: ["marron", "gris"],
        hp: 650,
        dateOfOrigin: 1963,
        emoji: ["👁️", "📖", "✨", "🧙‍♂️"],
        abilities: [
            "DAGUES DE DENAK", "ŒIL D'AGAMOTTO", "CAPE DE LÉVITATION",
            "MAELSTROM DE LA FOLIE", "PENTAGRAMME DE FARALLAH", "BOUCLIER DU SÉRAPHIN"
        ],
        ult: "ŒIL D'AGAMOTTO"
    },
    de: {  // German
        name: "Doktor Strange",
        gender: "männlich",
        species: "menschlich",
        affiliation: "Avengers",
        role: "Vorreiter",
        eyeColor: ["grün"],
        hairColor: ["braun", "grau"],
        hp: 650,
        dateOfOrigin: 1963,
        emoji: ["👁️", "📖", "✨", "🧙‍♂️"],
        abilities: [
            "DOLCHE VON DENAK", "AUGE VON AGAMOTTO", "UMHANG DER LEVITATION",
            "MAELSTROM DES WAHNSINNS", "PENTAGRAMM VON FARALLAH", "SCHILD DES SERAPHIM"
        ],
        ult: "AUGE VON AGAMOTTO"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "奇异博士",
        gender: "男性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "先锋",
        eyeColor: ["绿色"],
        hairColor: ["棕色", "灰色"],
        hp: 650,
        dateOfOrigin: 1963,
        emoji: ["👁️", "📖", "✨", "🧙‍♂️"],
        abilities: [
            "德纳克匕首", "阿戈摩托之眼", "悬浮斗篷",
            "疯狂漩涡", "法拉拉五角星", "炽天使护盾"
        ],
        ult: "阿戈摩托之眼"
    }
});

const groot = new Person({
    en: {
        name: "Groot",
        gender: "male",
        species: "Flora Colossus",
        affiliation: "Guardians",
        role: "Vanguard",
        eyeColor: ["green"],
        hairColor: ["none"],
        hp: 700,
        dateOfOrigin: 1960,
        emoji: ["🌱", "🌌", "🌳", "🪵"],
        abilities: [
            "VINE STRIKE", "STRANGLING PRISON", "THORNLASH WALL",
            "IRONWOOD WALL", "SPORE BOMB"
        ],
        ult: "STRANGLING PRISON"
    },
    es: {  // Spanish
        name: "Groot",
        gender: "masculino",
        species: "Coloso Flora",
        affiliation: "Guardianes",
        role: "Vanguardia",
        eyeColor: ["verde"],
        hairColor: ["ninguno"],
        hp: 700,
        dateOfOrigin: 1960,
        emoji: ["🌱", "🌌", "🌳", "🪵"],
        abilities: [
            "GOLPE DE VID", "PRISIÓN ESTRANGULADORA", "MURO DE LATIGAZO ESPINOSO",
            "MURO DE MADERA DE HIERRO", "BOMBA DE ESPORAS"
        ],
        ult: "PRISIÓN ESTRANGULADORA"
    },
    fr: {  // French
        name: "Groot",
        gender: "homme",
        species: "Colosse Flore",
        affiliation: "Gardiens",
        role: "Avant-garde",
        eyeColor: ["vert"],
        hairColor: ["aucun"],
        hp: 700,
        dateOfOrigin: 1960,
        emoji: ["🌱", "🌌", "🌳", "🪵"],
        abilities: [
            "FRAPPE DE LIANE", "PRISON ÉTRANGLEUSE", "MUR DE LACETS D'ÉPINES",
            "MUR DE BOIS DE FER", "BOMBE DE SPORES"
        ],
        ult: "PRISON ÉTRANGLEUSE"
    },
    de: {  // German
        name: "Groot",
        gender: "männlich",
        species: "Flora Koloss",
        affiliation: "Wächter",
        role: "Vorreiter",
        eyeColor: ["grün"],
        hairColor: ["keine"],
        hp: 700,
        dateOfOrigin: 1960,
        emoji: ["🌱", "🌌", "🌳", "🪵"],
        abilities: [
            "RANKENSCHLAG", "ERSTICKUNGSGEFÄNGNIS", "DORNENPEITSCHENWAND",
            "EISENHOLZWAND", "SPORENBOMBE"
        ],
        ult: "ERSTICKUNGSGEFÄNGNIS"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "格鲁特",
        gender: "男性",
        species: "植物巨人",
        affiliation: "银河护卫队",
        role: "先锋",
        eyeColor: ["绿色"],
        hairColor: ["无"],
        hp: 700,
        dateOfOrigin: 1960,
        emoji: ["🌱", "🌌", "🌳", "🪵"],
        abilities: [
            "藤蔓打击", "缠绕监狱", "荆棘鞭墙",
            "铁木墙", "孢子炸弹"
        ],
        ult: "缠绕监狱"
    }
});

const hulk = new Person({
    en: {
        name: "Hulk",
        gender: "male",
        species: "human",
        affiliation: "Avengers",
        role: "Vanguard",
        eyeColor: ["brown", "green"],
        hairColor: ["brown", "black"],
        hp: 650,
        dateOfOrigin: 1962,
        emoji: ["🧪", "💥", "💪", "💚"],
        abilities: [
            "GAMMA RAY GUN", "PUNY BANNER", "GAMMA GRENADE"
        ],
        ult: "PUNY BANNER"
    },
    es: {  // Spanish
        name: "Hulk",
        gender: "masculino",
        species: "humano",
        affiliation: "Vengadores",
        role: "Vanguardia",
        eyeColor: ["marrón", "verde"],
        hairColor: ["marrón", "negro"],
        hp: 650,
        dateOfOrigin: 1962,
        emoji: ["🧪", "💥", "💪", "💚"],
        abilities: [
            "PISTOLA DE RAYOS GAMMA", "DÉBIL BANNER", "GRANADA GAMMA"
        ],
        ult: "DÉBIL BANNER"
    },
    fr: {  // French
        name: "Hulk",
        gender: "homme",
        species: "humain",
        affiliation: "Avengers",
        role: "Avant-garde",
        eyeColor: ["marron", "vert"],
        hairColor: ["marron", "noir"],
        hp: 650,
        dateOfOrigin: 1962,
        emoji: ["🧪", "💥", "💪", "💚"],
        abilities: [
            "PISTOLET À RAYONS GAMMA", "FAIBLE BANNER", "GRENADE GAMMA"
        ],
        ult: "FAIBLE BANNER"
    },
    de: {  // German
        name: "Hulk",
        gender: "männlich",
        species: "menschlich",
        affiliation: "Avengers",
        role: "Vorreiter",
        eyeColor: ["braun", "grün"],
        hairColor: ["braun", "schwarz"],
        hp: 650,
        dateOfOrigin: 1962,
        emoji: ["🧪", "💥", "💪", "💚"],
        abilities: [
            "GAMMASTRAHLENKANONE", "SCHWACHER BANNER", "GAMMAGRANADE"
        ],
        ult: "SCHWACHER BANNER"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "浩克",
        gender: "男性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "先锋",
        eyeColor: ["棕色", "绿色"],
        hairColor: ["棕色", "黑色"],
        hp: 650,
        dateOfOrigin: 1962,
        emoji: ["🧪", "💥", "💪", "💚"],
        abilities: [
            "伽马射线枪", "弱小班纳", "伽马手雷"
        ],
        ult: "弱小班纳"
    }
});

const thor = new Person({
    en: {
        name: "Thor",
        gender: "male",
        species: "Asgardian",
        affiliation: "Avengers",
        role: "Vanguard",
        eyeColor: ["blue"],
        hairColor: ["blond"],
        hp: 525,
        dateOfOrigin: 1962,
        emoji: ["☁️", "👑", "⚡", "🔨"],
        abilities: [
            "Mjolnir Bash", "Hammer Throw", "Lightning Realm",
            "Storm Surge", "Awakening Rune", "God of Thunder"
        ],
        ult: "God of Thunder"
    },
    es: {  // Spanish
        name: "Thor",
        gender: "masculino",
        species: "Asgardiano",
        affiliation: "Vengadores",
        role: "Vanguardia",
        eyeColor: ["azul"],
        hairColor: ["rubio"],
        hp: 525,
        dateOfOrigin: 1962,
        emoji: ["☁️", "👑", "⚡", "🔨"],
        abilities: [
            "GOLPE DE MJOLNIR", "LANZAMIENTO DE MARTILLO", "REINO DEL RAYO",
            "OLEADA DE TORMENTA", "RUNA DEL DESPERTAR", "DIOS DEL TRUENO"
        ],
        ult: "DIOS DEL TRUENO"
    },
    fr: {  // French
        name: "Thor",
        gender: "homme",
        species: "Asgardien",
        affiliation: "Avengers",
        role: "Avant-garde",
        eyeColor: ["bleu"],
        hairColor: ["blond"],
        hp: 525,
        dateOfOrigin: 1962,
        emoji: ["☁️", "👑", "⚡", "🔨"],
        abilities: [
            "COUP DE MJOLNIR", "LANCER DE MARTEAU", "ROYAUME DE FOUDRE",
            "SURGE DE TEMPÊTE", "RUNE DE L'ÉVEIL", "DIEU DU TONNERRE"
        ],
        ult: "DIEU DU TONNERRE"
    },
    de: {  // German
        name: "Thor",
        gender: "männlich",
        species: "Asgardian",
        affiliation: "Avengers",
        role: "Vorreiter",
        eyeColor: ["blau"],
        hairColor: ["blond"],
        hp: 525,
        dateOfOrigin: 1962,
        emoji: ["☁️", "👑", "⚡", "🔨"],
        abilities: [
            "MJOLNIR-SCHLAG", "HAMMERWURF", "BLITZREICH",
            "STURMWOGE", "ERWECKUNGSRUNE", "DONNERGOTT"
        ],
        ult: "DONNERGOTT"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "索尔",
        gender: "男性",
        species: "阿斯加德人",
        affiliation: "复仇者联盟",
        role: "先锋",
        eyeColor: ["蓝色"],
        hairColor: ["金色"],
        hp: 525,
        dateOfOrigin: 1962,
        emoji: ["☁️", "👑", "⚡", "🔨"],
        abilities: [
            "雷神之锤重击", "锤子投掷", "雷电领域",
            "风暴激流", "觉醒符文", "雷霆之神"
        ],
        ult: "雷霆之神"
    }
});

const magneto = new Person({
    en: {
        name: "Magneto",
        gender: "male",
        species: "mutant",
        affiliation: "X-Men",
        role: "Vanguard",
        eyeColor: ["blue"],
        hairColor: ["white"],
        hp: 650,
        dateOfOrigin: 1963,
        emoji: ["🪖", "🧲", "🌀", "🦹‍♂️"],
        abilities: [
            "IRON VOLLEY", "METEOR M", "METALLIC CURTAIN",
            "METAL BULWARK", "IRON BULWARK", "MAG-CANNON", "MAGNETIC DESCENT"
        ],
        ult: "METEOR M"
    },
    es: {  // Spanish
        name: "Magneto",
        gender: "masculino",
        species: "mutante",
        affiliation: "X-Men",
        role: "Vanguardia",
        eyeColor: ["azul"],
        hairColor: ["blanco"],
        hp: 650,
        dateOfOrigin: 1963,
        emoji: ["🪖", "🧲", "🌀", "🦹‍♂️"],
        abilities: [
            "DESCARGA DE HIERRO", "METEORO M", "CORTINA METÁLICA",
            "BALUARTE METÁLICO", "BALUARTE DE HIERRO", "CANÓN MAGNÉTICO", "DESCENSO MAGNÉTICO"
        ],
        ult: "METEORO M"
    },
    fr: {  // French
        name: "Magnéto",
        gender: "homme",
        species: "mutant",
        affiliation: "X-Men",
        role: "Avant-garde",
        eyeColor: ["bleu"],
        hairColor: ["blanc"],
        hp: 650,
        dateOfOrigin: 1963,
        emoji: ["🪖", "🧲", "🌀", "🦹‍♂️"],
        abilities: [
            "RAFALE DE FER", "MÉTÉORE M", "RIDEAU MÉTALLIQUE",
            "REMPLISSEMENT MÉTALLIQUE", "REMPLISSEMENT DE FER", "CANON MAGNÉTIQUE", "DESCENTE MAGNÉTIQUE"
        ],
        ult: "MÉTÉORE M"
    },
    de: {  // German
        name: "Magneto",
        gender: "männlich",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Vorreiter",
        eyeColor: ["blau"],
        hairColor: ["weiß"],
        hp: 650,
        dateOfOrigin: 1963,
        emoji: ["🪖", "🧲", "🌀", "🦹‍♂️"],
        abilities: [
            "EISEN-SALVE", "METEOR M", "METALLVORHANG",
            "METALLWALL", "EISENWALL", "MAGNETKANONE", "MAGNETISCHER ABSTIEG"
        ],
        ult: "METEOR M"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "万磁王",
        gender: "男性",
        species: "变种人",
        affiliation: "X战警",
        role: "先锋",
        eyeColor: ["蓝色"],
        hairColor: ["白色"],
        hp: 650,
        dateOfOrigin: 1963,
        emoji: ["🪖", "🧲", "🌀", "🦹‍♂️"],
        abilities: [
            "铁雨", "陨石M", "金属幕帘",
            "金属壁垒", "钢铁壁垒", "磁力炮", "磁力下降"
        ],
        ult: "陨石M"
    }
});

const peniParker = new Person({
    en: {
        name: "Peni Parker",
        gender: "female",
        species: "human",
        affiliation: "Spider-Verse",
        role: "Vanguard",
        eyeColor: ["blue"],
        hairColor: ["black"],
        hp: 650,
        dateOfOrigin: 2014,
        emoji: ["📓", "🤖", "🕸️", "🕷️"],
        abilities: [
            "CYBER-WEB CLUSTER", "SPIDER-SWEEPER", "BIONIC SPIDER-NEST",
            "ARACHNO-MINE", "CYBER-BOND", "WALL CRAWL", "CYBER-WEB SNARE"
        ],
        ult: "SPIDER-SWEEPER"
    },
    es: {  // Spanish
        name: "Peni Parker",
        gender: "femenino",
        species: "humana",
        affiliation: "Spider-Verso",
        role: "Vanguardia",
        eyeColor: ["azul"],
        hairColor: ["negro"],
        hp: 650,
        dateOfOrigin: 2014,
        emoji: ["📓", "🤖", "🕸️", "🕷️"],
        abilities: [
            "CLÚSTER DE CIBER-RED", "LIMPIADOR DE ARAÑAS", "NIDO BIÓNICO DE ARAÑAS",
            "MINA ARÁCNIDA", "VÍNCULO CIBERNÉTICO", "TREPAR MUROS", "TRAMPA DE CIBER-RED"
        ],
        ult: "LIMPIADOR DE ARAÑAS"
    },
    fr: {  // French
        name: "Peni Parker",
        gender: "féminin",
        species: "humaine",
        affiliation: "Spider-Verse",
        role: "Avant-garde",
        eyeColor: ["bleu"],
        hairColor: ["noir"],
        hp: 650,
        dateOfOrigin: 2014,
        emoji: ["📓", "🤖", "🕸️", "🕷️"],
        abilities: [
            "GRAPPE DE TOILE CYBERNÉTIQUE", "NETTOYEUR D'ARAIGNÉES", "NID BIONIQUE D'ARAIGNÉES",
            "MINE ARACHNÉENNE", "LIEN CYBERNÉTIQUE", "ESCALADE MURALE", "PIÈGE DE TOILE CYBERNÉTIQUE"
        ],
        ult: "NETTOYEUR D'ARAIGNÉES"
    },
    de: {  // German
        name: "Peni Parker",
        gender: "weiblich",
        species: "menschlich",
        affiliation: "Spider-Versum",
        role: "Vorreiter",
        eyeColor: ["blau"],
        hairColor: ["schwarz"],
        hp: 650,
        dateOfOrigin: 2014,
        emoji: ["📓", "🤖", "🕸️", "🕷️"],
        abilities: [
            "CYBER-NETZCLUSTER", "SPINNEN-KEHRMASCHINE", "BIONISCHES SPINNENNEST",
            "ARACHNO-MINE", "CYBER-BINDUNG", "WANDKLETTERN", "CYBER-NETZFALLE"
        ],
        ult: "SPINNEN-KEHRMASCHINE"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "佩妮·帕克",
        gender: "女性",
        species: "人类",
        affiliation: "蜘蛛宇宙",
        role: "先锋",
        eyeColor: ["蓝色"],
        hairColor: ["黑色"],
        hp: 650,
        dateOfOrigin: 2014,
        emoji: ["📓", "🤖", "🕸️", "🕷️"],
        abilities: [
            "网络集群", "蜘蛛清扫者", "仿生蜘蛛巢",
            "蛛形地雷", "网络羁绊", "攀墙", "网络陷阱"
        ],
        ult: "蜘蛛清扫者"
    }
});

const venom = new Person({
    en: {
        name: "Venom",
        gender: "male",
        species: "Symbiote",
        affiliation: "None",
        role: "Vanguard",
        eyeColor: ["white"],
        hairColor: ["none"],
        hp: 650,
        dateOfOrigin: 1988,
        emoji: ["🕷️", "🦠", "👅", "🖤"],
        abilities: [
            "Dark Predation", "Cellular Corrosion", "Symbiotic Resilience",
            "Frenzied Arrival", "Feast of the Abyss"
        ],
        ult: "Feast of the Abyss"
    },
    es: {  // Spanish
        name: "Venom",
        gender: "masculino",
        species: "Simbionte",
        affiliation: "Ninguno",
        role: "Vanguardia",
        eyeColor: ["blanco"],
        hairColor: ["ninguno"],
        hp: 650,
        dateOfOrigin: 1988,
        emoji: ["🕷️", "🦠", "👅", "🖤"],
        abilities: [
            "DEPREDACIÓN OSCURA", "CORROSIÓN CELULAR", "RESILIENCIA SIMBIÓTICA",
            "LLEGADA FRENÉTICA", "BANQUETE DEL ABISMO"
        ],
        ult: "BANQUETE DEL ABISMO"
    },
    fr: {  // French
        name: "Venom",
        gender: "homme",
        species: "Symbiote",
        affiliation: "Aucune",
        role: "Avant-garde",
        eyeColor: ["blanc"],
        hairColor: ["aucun"],
        hp: 650,
        dateOfOrigin: 1988,
        emoji: ["🕷️", "🦠", "👅", "🖤"],
        abilities: [
            "PRÉDATION OBSCURE", "CORROSION CELLULAIRE", "RÉSILIENCE SYMBIOTIQUE",
            "ARRIVÉE FRÉNÉTIQUE", "FESTIN DE L'ABÎME"
        ],
        ult: "FESTIN DE L'ABÎME"
    },
    de: {  // German
        name: "Venom",
        gender: "männlich",
        species: "Symbiont",
        affiliation: "Keine",
        role: "Vorreiter",
        eyeColor: ["weiß"],
        hairColor: ["keine"],
        hp: 650,
        dateOfOrigin: 1988,
        emoji: ["🕷️", "🦠", "👅", "🖤"],
        abilities: [
            "DUNKLE PRÄDATION", "ZELLKORROSION", "SYMBIOTISCHE RESILIENZ",
            "FRENZIERTE ANKUNFT", "BANKETT DES ABGRUNDS"
        ],
        ult: "BANKETT DES ABGRUNDS"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "毒液",
        gender: "男性",
        species: "共生体",
        affiliation: "无",
        role: "先锋",
        eyeColor: ["白色"],
        hairColor: ["无"],
        hp: 650,
        dateOfOrigin: 1988,
        emoji: ["🕷️", "🦠", "👅", "🖤"],
        abilities: [
            "黑暗捕食", "细胞腐蚀", "共生体适应",
            "狂暴降临", "深渊盛宴"
        ],
        ult: "深渊盛宴"
    }
});

const blackPanther = new Person({
    en: {
        name: "Black Panther",
        gender: "male",
        species: "human",
        affiliation: "Avengers",
        role: "Duelist",
        eyeColor: ["brown"],
        hairColor: ["black"],
        hp: 300,
        dateOfOrigin: 1966,
        emoji: ["🌍", "👑", "🐾", "🖤"],
        abilities: [
            "VIBRANIUM CLAWS", "BAST'S DESCENT", "SPIRIT REND",
            "SUBTLE STEP", "SPEAR TOSS"
        ],
        ult: "BAST'S DESCENT"
    },
    es: {  // Spanish
        name: "Pantera Negra",
        gender: "masculino",
        species: "humano",
        affiliation: "Vengadores",
        role: "Duelista",
        eyeColor: ["marrón"],
        hairColor: ["negro"],
        hp: 300,
        dateOfOrigin: 1966,
        emoji: ["🌍", "👑", "🐾", "🖤"],
        abilities: [
            "GARRAS DE VIBRANIUM", "DESCENSO DE BAST", "DESGARRA ESPIRITUAL",
            "PASO SUTIL", "LANZAMIENTO DE LANZA"
        ],
        ult: "DESCENSO DE BAST"
    },
    fr: {  // French
        name: "Panthère Noire",
        gender: "homme",
        species: "humain",
        affiliation: "Avengers",
        role: "Duelliste",
        eyeColor: ["marron"],
        hairColor: ["noir"],
        hp: 300,
        dateOfOrigin: 1966,
        emoji: ["🌍", "👑", "🐾", "🖤"],
        abilities: [
            "GRIFFES EN VIBRANIUM", "DESCENTE DE BAST", "DÉCHIREMENT SPIRITUEL",
            "PAS DISCRET", "LANCER DE LANCE"
        ],
        ult: "DESCENTE DE BAST"
    },
    de: {  // German
        name: "Schwarzer Panther",
        gender: "männlich",
        species: "menschlich",
        affiliation: "Avengers",
        role: "Duellant",
        eyeColor: ["braun"],
        hairColor: ["schwarz"],
        hp: 300,
        dateOfOrigin: 1966,
        emoji: ["🌍", "👑", "🐾", "🖤"],
        abilities: [
            "VIBRANIUMKRALLEN", "BASTS ABSTIEG", "GEISTERSCHNITT",
            "SUBTILER SCHRITT", "SPEERWURF"
        ],
        ult: "BASTS ABSTIEG"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "黑豹",
        gender: "男性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "决斗者",
        eyeColor: ["棕色"],
        hairColor: ["黑色"],
        hp: 300,
        dateOfOrigin: 1966,
        emoji: ["🌍", "👑", "🐾", "🖤"],
        abilities: [
            "振金之爪", "巴斯特降临", "灵魂撕裂",
            "潜行步伐", "长矛投掷"
        ],
        ult: "巴斯特降临"
    }
});

const blackWidow = new Person({
    en: {
        name: "Black Widow",
        gender: "female",
        species: "human",
        affiliation: "Avengers",
        role: "Duelist",
        eyeColor: ["blue"],
        hairColor: ["red"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["🧣", "💋", "🕸️", "🕷️"],
        abilities: [
            "WIDOW'S BITE BATON", "RED ROOM RIFLE", "ELECTRO-PLASMA EXPLOSION",
            "FLEET FOOT", "EDGE DANCER", "STRAIGHT SHOOTER"
        ],
        ult: "ELECTRO-PLASMA EXPLOSION"
    },
    es: {  // Spanish
        name: "Viuda Negra",
        gender: "femenino",
        species: "humana",
        affiliation: "Vengadores",
        role: "Duelista",
        eyeColor: ["azul"],
        hairColor: ["rojo"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["🧣", "💋", "🕸️", "🕷️"],
        abilities: [
            "BASTÓN DE MORDEDURA DE VIUDA", "RIFLE DE LA HABITACIÓN ROJA", "EXPLOSIÓN ELECTRO-PLASMA",
            "PASO ÁGIL", "BAILARINA FILOSA", "TIRADORA PRECISA"
        ],
        ult: "EXPLOSIÓN ELECTRO-PLASMA"
    },
    fr: {  // French
        name: "Veuve Noire",
        gender: "féminin",
        species: "humaine",
        affiliation: "Avengers",
        role: "Duelliste",
        eyeColor: ["bleu"],
        hairColor: ["rouge"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["🧣", "💋", "🕸️", "🕷️"],
        abilities: [
            "BÂTON DE MORSURE DE LA VEUVRE", "FUSIL DE LA CHAMBRE ROUGE", "EXPLOSION ÉLECTRO-PLASMA",
            "DÉMARCHE RAPIDE", "DANSEUR DE LAME", "TIREUSE D'ÉLITE"
        ],
        ult: "EXPLOSION ÉLECTRO-PLASMA"
    },
    de: {  // German
        name: "Schwarze Witwe",
        gender: "weiblich",
        species: "menschlich",
        affiliation: "Avengers",
        role: "Duellant",
        eyeColor: ["blau"],
        hairColor: ["rot"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["🧣", "💋", "🕸️", "🕷️"],
        abilities: [
            "WITWENBISS-STOCK", "ROTER RAUM GEWEHR", "ELEKTRO-PLASMA-EXPLOSION",
            "FLINKER SCHRITT", "KLINGENTÄNZER", "PRÄZISIONSSCHÜTZE"
        ],
        ult: "ELEKTRO-PLASMA-EXPLOSION"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "黑寡妇",
        gender: "女性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["红色"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["🧣", "💋", "🕸️", "🕷️"],
        abilities: [
            "寡妇之咬棍棒", "红屋步枪", "电浆爆炸",
            "迅捷步伐", "刀锋舞者", "神枪手"
        ],
        ult: "电浆爆炸"
    }
});

const hawkeye = new Person({
    en: {
        name: "Hawkeye",
        gender: "male",
        species: "human",
        affiliation: "Avengers",
        role: "Duelist",
        eyeColor: ["green"],
        hairColor: ["blond"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["🔍", "🎯", "🏹", "🦅"],
        abilities: [
            "PIERCING ARROW", "BLAST ARROW", "HUNTER'S SIGHT",
            "CRESCENT SLASH", "HYPERSONIC ARROW", "RONIN SLASH", "SKYWARD LEAP"
        ],
        ult: "HUNTER'S SIGHT"
    },
    es: {  // Spanish
        name: "Ojo de Halcón",
        gender: "masculino",
        species: "humano",
        affiliation: "Vengadores",
        role: "Duelista",
        eyeColor: ["verde"],
        hairColor: ["rubio"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["🔍", "🎯", "🏹", "🦅"],
        abilities: [
            "FLECHA PERFORANTE", "FLECHA EXPLOSIVA", "VISTA DEL CAZADOR",
            "TAJADA CRECIENTE", "FLECHA HIPERSÓNICA", "CORTE RONIN", "SALTO CELESTIAL"
        ],
        ult: "VISTA DEL CAZADOR"
    },
    fr: {  // French
        name: "Oeil-de-Faucon",
        gender: "homme",
        species: "humain",
        affiliation: "Avengers",
        role: "Duelliste",
        eyeColor: ["vert"],
        hairColor: ["blond"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["🔍", "🎯", "🏹", "🦅"],
        abilities: [
            "FLÈCHE PERÇANTE", "FLÈCHE EXPLOSIVE", "REGARD DU CHASSEUR",
            "ENTAILLE CROISSANTE", "FLÈCHE HYPERSONIQUE", "COUP RONIN", "SAUT CÉLESTE"
        ],
        ult: "REGARD DU CHASSEUR"
    },
    de: {  // German
        name: "Falkenauge",
        gender: "männlich",
        species: "menschlich",
        affiliation: "Avengers",
        role: "Duellant",
        eyeColor: ["grün"],
        hairColor: ["blond"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["🔍", "🎯", "🏹", "🦅"],
        abilities: [
            "DURCHDRINGENDER PFEIL", "SPRENGPFEIL", "BLICK DES JÄGERS",
            "MONDSICHEL-SCHLAG", "HYPERSONISCHER PFEIL", "RONIN-SCHNITT", "HIMMELSSPRUNG"
        ],
        ult: "BLICK DES JÄGERS"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "鹰眼",
        gender: "男性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "决斗者",
        eyeColor: ["绿色"],
        hairColor: ["金色"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["🔍", "🎯", "🏹", "🦅"],
        abilities: [
            "穿透箭", "爆炸箭", "猎人之眼",
            "弧月斩", "超音速箭", "浪人斩", "天跃"
        ],
        ult: "猎人之眼"
    }
});

const hela = new Person({
    en: {
        name: "Hela",
        gender: "female",
        species: "Asgardian",
        affiliation: "Villain",
        role: "Duelist",
        eyeColor: ["green"],
        hairColor: ["none"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["⚔️", "🖤", "👑", "💀"],
        abilities: [
            "NIGHTSWORD THORN", "GODDESS OF DEATH", "ASTRAL FLOCK",
            "SOUL DRAINER", "PIERCING NIGHT"
        ],
        ult: "GODDESS OF DEATH"
    },
    es: {  // Spanish
        name: "Hela",
        gender: "femenino",
        species: "Asgardiana",
        affiliation: "Villana",
        role: "Duelista",
        eyeColor: ["verde"],
        hairColor: ["ninguno"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["⚔️", "🖤", "👑", "💀"],
        abilities: [
            "ESPINA DE LA ESPADA NOCTURNA", "DIOSA DE LA MUERTE", "BANDADA ASTRAL",
            "DRENADOR DE ALMAS", "NOCHE PERFORANTE"
        ],
        ult: "DIOSA DE LA MUERTE"
    },
    fr: {  // French
        name: "Hela",
        gender: "féminin",
        species: "Asgardienne",
        affiliation: "Méchant",
        role: "Duelliste",
        eyeColor: ["vert"],
        hairColor: ["aucun"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["⚔️", "🖤", "👑", "💀"],
        abilities: [
            "ÉPINE DE L'ÉPÉE NOIRE", "DÉESSE DE LA MORT", "ESSAIM ASTRAL",
            "DRAIN D'ÂME", "NUIT PERÇANTE"
        ],
        ult: "DÉESSE DE LA MORT"
    },
    de: {  // German
        name: "Hela",
        gender: "weiblich",
        species: "Asgardian",
        affiliation: "Schurke",
        role: "Duellant",
        eyeColor: ["grün"],
        hairColor: ["keine"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["⚔️", "🖤", "👑", "💀"],
        abilities: [
            "NACHTSCHWERTDORN", "GÖTTIN DES TODES", "ASTRALSCHWARM",
            "SEELENENTZIEHER", "DURCHBOHRENDE NACHT"
        ],
        ult: "GÖTTIN DES TODES"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "海拉",
        gender: "女性",
        species: "阿斯加德人",
        affiliation: "反派",
        role: "决斗者",
        eyeColor: ["绿色"],
        hairColor: ["无"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["⚔️", "🖤", "👑", "💀"],
        abilities: [
            "夜剑荆棘", "死亡女神", "星界群鸦",
            "灵魂吸取", "穿透黑夜"
        ],
        ult: "死亡女神"
    }
});

const ironFist = new Person({
    en: {
        name: "Iron Fist",
        gender: "male",
        species: "human",
        affiliation: "Defenders",
        role: "Duelist",
        eyeColor: ["brown"],
        hairColor: ["black"],
        hp: 250,
        dateOfOrigin: 1974,
        emoji: ["🎭", "🐉", "👊", "🔥"],
        abilities: [
            "JEET KUNE DO", "YAT JEE CHUNG KUEN", "LIVING CHI",
            "K'UN-LUN KICK", "HARMONY RECOVERY", "CRANE LEAP",
            "DRAGON'S DEFENSE", "WALL RUNNER"
        ],
        ult: "LIVING CHI"
    },
    es: {  // Spanish
        name: "Puño de Hierro",
        gender: "masculino",
        species: "humano",
        affiliation: "Defensores",
        role: "Duelista",
        eyeColor: ["marrón"],
        hairColor: ["negro"],
        hp: 250,
        dateOfOrigin: 1974,
        emoji: ["🎭", "🐉", "👊", "🔥"],
        abilities: [
            "JEET KUNE DO", "YAT JEE CHUNG KUEN", "CHI VIVIENTE",
            "PATADA DE K'UN-LUN", "RECUPERACIÓN ARMÓNICA", "SALTO DE GRULLA",
            "DEFENSA DEL DRAGÓN", "CORREDOR DE MUROS"
        ],
        ult: "CHI VIVIENTE"
    },
    fr: {  // French
        name: "Poing d'Acier",
        gender: "homme",
        species: "humain",
        affiliation: "Défenseurs",
        role: "Duelliste",
        eyeColor: ["marron"],
        hairColor: ["noir"],
        hp: 250,
        dateOfOrigin: 1974,
        emoji: ["🎭", "🐉", "👊", "🔥"],
        abilities: [
            "JEET KUNE DO", "YAT JEE CHUNG KUEN", "CHI VIVANT",
            "COUP DE PIED K'UN-LUN", "RÉCUPÉRATION HARMONIQUE", "SAUT DE GRUE",
            "DÉFENSE DU DRAGON", "COUREUR MURAL"
        ],
        ult: "CHI VIVANT"
    },
    de: {  // German
        name: "Eiserne Faust",
        gender: "männlich",
        species: "menschlich",
        affiliation: "Verteidiger",
        role: "Duellant",
        eyeColor: ["braun"],
        hairColor: ["schwarz"],
        hp: 250,
        dateOfOrigin: 1974,
        emoji: ["🎭", "🐉", "👊", "🔥"],
        abilities: [
            "JEET KUNE DO", "YAT JEE CHUNG KUEN", "LEBENDIGES CHI",
            "K'UN-LUN-KICK", "HARMONISCHE ERHOLUNG", "KRANICHSCHNUNG",
            "DRACHENVERTEIDIGUNG", "WANDLÄUFER"
        ],
        ult: "LEBENDIGES CHI"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "铁拳",
        gender: "男性",
        species: "人类",
        affiliation: "捍卫者联盟",
        role: "决斗者",
        eyeColor: ["棕色"],
        hairColor: ["黑色"],
        hp: 250,
        dateOfOrigin: 1974,
        emoji: ["🎭", "🐉", "👊", "🔥"],
        abilities: [
            "截拳道", "一指冲拳", "活生生的气",
            "昆仑踢", "和谐恢复", "仙鹤跳跃",
            "龙之防御", "跑墙者"
        ],
        ult: "活生生的气"
    }
});

const ironMan = new Person({
    en: {
        name: "Iron Man",
        gender: "male",
        species: "human",
        affiliation: "Avengers",
        role: "Duelist",
        eyeColor: ["blue"],
        hairColor: ["brown"],
        hp: 250,
        dateOfOrigin: 1963,
        emoji: ["🔧", "💡", "🤖", "🛑"],
        abilities: [
            "REPULSOR BLAST", "UNIBEAM", "INVINCIBLE PULSE CANNON",
            "HYPER-VELOCITY", "ARMOR OVERDRIVE", "MICRO-MISSILE BARRAGE"
        ],
        ult: "INVINCIBLE PULSE CANNON"
    },
    es: {  // Spanish
        name: "Hombre de Hierro",
        gender: "masculino",
        species: "humano",
        affiliation: "Vengadores",
        role: "Duelista",
        eyeColor: ["azul"],
        hairColor: ["marrón"],
        hp: 250,
        dateOfOrigin: 1963,
        emoji: ["🔧", "💡", "🤖", "🛑"],
        abilities: [
            "EXPLOSIÓN REPULSORA", "RAYO UNIBEAM", "CAÑÓN PULSO INVENCIBLE",
            "HIPER-VELOCIDAD", "SOBRECARGA DE ARMADURA", "BARRERA DE MICRO-MISILES"
        ],
        ult: "CAÑÓN PULSO INVENCIBLE"
    },
    fr: {  // French
        name: "Homme de Fer",
        gender: "homme",
        species: "humain",
        affiliation: "Avengers",
        role: "Duelliste",
        eyeColor: ["bleu"],
        hairColor: ["marron"],
        hp: 250,
        dateOfOrigin: 1963,
        emoji: ["🔧", "💡", "🤖", "🛑"],
        abilities: [
            "EXPLOSION RÉPULSEUR", "UNIBEAM", "CANON À IMPULSIONS INVINCIBLE",
            "HYPER-VÉLOCITÉ", "SURCHARGE D'ARMURE", "BARRAGE DE MICRO-MISSILES"
        ],
        ult: "CANON À IMPULSIONS INVINCIBLE"
    },
    de: {  // German
        name: "Iron Man",
        gender: "männlich",
        species: "menschlich",
        affiliation: "Avengers",
        role: "Duellant",
        eyeColor: ["blau"],
        hairColor: ["braun"],
        hp: 250,
        dateOfOrigin: 1963,
        emoji: ["🔧", "💡", "🤖", "🛑"],
        abilities: [
            "REPULSORSTRAHL", "UNIBEAM", "UNBESIEGBARER IMPULSKANONE",
            "HYPERGESCHWINDIGKEIT", "RÜSTUNGSÜBERLASTUNG", "MIKRO-MISSILENBARRAGE"
        ],
        ult: "UNBESIEGBARER IMPULSKANONE"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "钢铁侠",
        gender: "男性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["棕色"],
        hp: 250,
        dateOfOrigin: 1963,
        emoji: ["🔧", "💡", "🤖", "🛑"],
        abilities: [
            "驱动爆破", "单向光束", "无敌脉冲炮",
            "超高速", "装甲超载", "微型导弹弹幕"
        ],
        ult: "无敌脉冲炮"
    }
});

const magik = new Person({
    en: {
        name: "Magik",
        gender: "female",
        species: "mutant",
        affiliation: "X-Men",
        role: "Duelist",
        eyeColor: ["blue", "red"],
        hairColor: ["blond", "white"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["👩", "🗡️", "🌠", "🔥"],
        abilities: [
            "SOULSWORD", "DARKCHILD", "STEPPING DISCS",
            "UMBRAL INCURSION", "ELDRITCH WHIRL", "MAGIK SLASH", "DEMON'S RAGE"
        ],
        ult: "DARKCHILD"
    },
    es: {  // Spanish
        name: "Magik",
        gender: "femenino",
        species: "mutante",
        affiliation: "X-Men",
        role: "Duelista",
        eyeColor: ["azul", "rojo"],
        hairColor: ["rubio", "blanco"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["👩", "🗡️", "🌠", "🔥"],
        abilities: [
            "ESPADA ALMA", "NIÑA OSCURA", "DISCOS DE TELETRANSPORTE",
            "INCURSIÓN UMBRAL", "TORBELLINO ESOTÉRICO", "CORTE MÁGICO", "FURIA DEMONÍACA"
        ],
        ult: "NIÑA OSCURA"
    },
    fr: {  // French
        name: "Magik",
        gender: "féminin",
        species: "mutante",
        affiliation: "X-Men",
        role: "Duelliste",
        eyeColor: ["bleu", "rouge"],
        hairColor: ["blond", "blanc"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["👩", "🗡️", "🌠", "🔥"],
        abilities: [
            "ÉPÉE D'ÂME", "ENFANT SOMBRE", "DISQUES DE TÉLÉPORTATION",
            "INCURSION UMBRALE", "TOURBILLON OCCULTE", "ENTAILLE MAGIQUE", "RAGE DÉMONIAQUE"
        ],
        ult: "ENFANT SOMBRE"
    },
    de: {  // German
        name: "Magik",
        gender: "weiblich",
        species: "Mutantin",
        affiliation: "X-Men",
        role: "Duellant",
        eyeColor: ["blau", "rot"],
        hairColor: ["blond", "weiß"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["👩", "🗡️", "🌠", "🔥"],
        abilities: [
            "SEELENSCHWERT", "DUNKLES KIND", "TELEPORTATIONSSCHEIBEN",
            "SCHATTENINVASION", "OKKULTES WIRBELN", "MAGIK-SCHNITT", "DÄMONENZORN"
        ],
        ult: "DUNKLES KIND"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "魔法",
        gender: "女性",
        species: "变种人",
        affiliation: "X战警",
        role: "决斗者",
        eyeColor: ["蓝色", "红色"],
        hairColor: ["金色", "白色"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["👩", "🗡️", "🌠", "🔥"],
        abilities: [
            "灵魂之剑", "黑暗之子", "传送圆盘",
            "幽影入侵", "奥术旋风", "魔法斩击", "恶魔之怒"
        ],
        ult: "黑暗之子"
    }
});

const moonKnight = new Person({
    en: {
        name: "Moon Knight",
        gender: "male",
        species: "human",
        affiliation: "Midnight Sons",
        role: "Duelist",
        eyeColor: ["blue"],
        hairColor: ["none"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["🔮", "🎭", "🏺", "🌙"],
        abilities: [
            "CRESCENT DART", "HAND OF KHONSHU", "NIGHT GLIDER",
            "ANCIENT ANKH", "MOONLIGHT HOOK", "RISING LEAP",
            "MOON BLADE", "TRIPLE ECLIPSE"
        ],
        ult: "HAND OF KHONSHU"
    },
    es: {  // Spanish
        name: "Caballero Luna",
        gender: "masculino",
        species: "humano",
        affiliation: "Hijos de la Medianoche",
        role: "Duelista",
        eyeColor: ["azul"],
        hairColor: ["ninguno"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["🔮", "🎭", "🏺", "🌙"],
        abilities: [
            "DARDOS CRESCENT", "MANO DE KHONSHU", "PLANEADOR NOCTURNO",
            "ANKH ANCESTRAL", "GANCHO LUNAR", "SALTO ASCENDENTE",
            "ESPADA LUNAR", "ECLIPSE TRIPLE"
        ],
        ult: "MANO DE KHONSHU"
    },
    fr: {  // French
        name: "Chevalier de la Lune",
        gender: "homme",
        species: "humain",
        affiliation: "Fils de Minuit",
        role: "Duelliste",
        eyeColor: ["bleu"],
        hairColor: ["aucun"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["🔮", "🎭", "🏺", "🌙"],
        abilities: [
            "FLÉCHETTE CROISSANTE", "MAIN DE KHONSHU", "PLANEUR NOCTURNE",
            "ANKH ANCESTRAL", "CROCHET DE LUNE", "SAUT ÉLEVÉ",
            "LAME LUNAIRE", "ÉCLIPSE TRIPLE"
        ],
        ult: "MAIN DE KHONSHU"
    },
    de: {  // German
        name: "Mondritter",
        gender: "männlich",
        species: "menschlich",
        affiliation: "Mitternachtssöhne",
        role: "Duellant",
        eyeColor: ["blau"],
        hairColor: ["keine"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["🔮", "🎭", "🏺", "🌙"],
        abilities: [
            "MONDDART", "HAND VON KHONSHU", "NACHTGLEITER",
            "URANKE", "MONDHAKEN", "AUFSTEIGENDER SPRUNG",
            "MONDKLINGE", "DREIFACHER ECLIPSE"
        ],
        ult: "HAND VON KHONSHU"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "月光骑士",
        gender: "男性",
        species: "人类",
        affiliation: "午夜之子",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["无"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["🔮", "🎭", "🏺", "🌙"],
        abilities: [
            "新月飞镖", "孔苏之手", "夜间滑翔",
            "古代安卡", "月光钩", "升跃",
            "月刃", "三重日食"
        ],
        ult: "孔苏之手"
    }
});

const namor = new Person({
    en: {
        name: "Namor",
        gender: "male",
        species: "Atlantean",
        affiliation: "Defenders",
        role: "Duelist",
        eyeColor: ["blue"],
        hairColor: ["blond", "green"],
        hp: 250,
        dateOfOrigin: 1939,
        emoji: ["🌊", "👑", "💪", "🐠"],
        abilities: [
            "TRIDENT OF NEPTUNE", "HORN OF PROTEUS", "BLESSING OF THE DEEP",
            "AQUATIC DOMINION", "WRATH OF THE SEVEN SEAS"
        ],
        ult: "HORN OF PROTEUS"
    },
    es: {  // Spanish
        name: "Namor",
        gender: "masculino",
        species: "Atlante",
        affiliation: "Defensores",
        role: "Duelista",
        eyeColor: ["azul"],
        hairColor: ["rubio", "verde"],
        hp: 250,
        dateOfOrigin: 1939,
        emoji: ["🌊", "👑", "💪", "🐠"],
        abilities: [
            "TRIDENTE DE NEPTUNO", "CUERNO DE PROTEO", "BENDICIÓN DE LAS PROFUNDIDADES",
            "DOMINIO ACUÁTICO", "IRA DE LOS SIETE MARES"
        ],
        ult: "CUERNO DE PROTEO"
    },
    fr: {  // French
        name: "Namor",
        gender: "homme",
        species: "Atlante",
        affiliation: "Défenseurs",
        role: "Duelliste",
        eyeColor: ["bleu"],
        hairColor: ["blond", "vert"],
        hp: 250,
        dateOfOrigin: 1939,
        emoji: ["🌊", "👑", "💪", "🐠"],
        abilities: [
            "TRIDENT DE NEPTUNE", "CORNE DE PROTÉE", "BÉNÉDICTION DES PROFONDEURS",
            "DOMINATION AQUATIQUE", "COLÈRE DES SEPT MERS"
        ],
        ult: "CORNE DE PROTÉE"
    },
    de: {  // German
        name: "Namor",
        gender: "männlich",
        species: "Atlante",
        affiliation: "Verteidiger",
        role: "Duellant",
        eyeColor: ["blau"],
        hairColor: ["blond", "grün"],
        hp: 250,
        dateOfOrigin: 1939,
        emoji: ["🌊", "👑", "💪", "🐠"],
        abilities: [
            "DREIZACK VON NEPTUN", "HORN VON PROTEUS", "SEGEN DER TIEFE",
            "AQUATISCHE HERRSCHAFT", "ZORN DER SIEBEN MEERE"
        ],
        ult: "HORN VON PROTEUS"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "纳摩",
        gender: "男性",
        species: "亚特兰蒂斯人",
        affiliation: "捍卫者联盟",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["金色", "绿色"],
        hp: 250,
        dateOfOrigin: 1939,
        emoji: ["🌊", "👑", "💪", "🐠"],
        abilities: [
            "海王三叉戟", "普洛透斯之角", "深海祝福",
            "水域统治", "七海之怒"
        ],
        ult: "普洛透斯之角"
    }
});

const psylocke = new Person({
    en: {
        name: "Psylocke",
        gender: "female",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Duelist",
        eyeColor: ["blue"],
        hairColor: ["purple"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🗡️", "👁️‍🗨️", "🦋", "💜"],
        abilities: [
            "PSIONIC CROSSBOW", "DANCE OF THE BUTTERFLY", "PSI-BLADE DASH",
            "PSYCHIC STEALTH", "WING SHURIKENS"
        ],
        ult: "DANCE OF THE BUTTERFLY"
    },
    es: {  // Spanish
        name: "Psylocke",
        gender: "femenino",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Duelista",
        eyeColor: ["azul"],
        hairColor: ["púrpura"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🗡️", "👁️‍🗨️", "🦋", "💜"],
        abilities: [
            "BALLESTA PSIÓNICA", "DANZA DE LA MARIPOSA", "CARGA DE HOJA PSI",
            "SIGILO PSÍQUICO", "SHURIKENS ALADOS"
        ],
        ult: "DANZA DE LA MARIPOSA"
    },
    fr: {  // French
        name: "Psylocke",
        gender: "féminin",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Duelliste",
        eyeColor: ["bleu"],
        hairColor: ["violet"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🗡️", "👁️‍🗨️", "🦋", "💜"],
        abilities: [
            "ARBALETE PSIONIQUE", "DANSE DU PAPILLON", "RUÉE DE LAME PSI",
            "FURTIVITÉ PSYCHIQUE", "SHURIKENS AILÉS"
        ],
        ult: "DANSE DU PAPILLON"
    },
    de: {  // German
        name: "Psylocke",
        gender: "weiblich",
        species: "Mutantin",
        affiliation: "X-Men",
        role: "Duellant",
        eyeColor: ["blau"],
        hairColor: ["lila"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🗡️", "👁️‍🗨️", "🦋", "💜"],
        abilities: [
            "PSIONISCHE ARMBRUST", "TANZ DES SCHMETTERLINGS", "PSI-KLINGENSTURM",
            "PSYCHISCHE TARNUNG", "FLÜGELSHURIKENS"
        ],
        ult: "TANZ DES SCHMETTERLINGS"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "灵蝶",
        gender: "女性",
        species: "变种人",
        affiliation: "X战警",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["紫色"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🗡️", "👁️‍🗨️", "🦋", "💜"],
        abilities: [
            "灵能弩", "蝶舞", "灵刃冲刺",
            "心灵潜行", "翼手里剑"
        ],
        ult: "蝶舞"
    }
});

const scarletWitch = new Person({
    en: {
        name: "Scarlet Witch",
        gender: "female",
        species: "Mutant",
        affiliation: "Avengers",
        role: "Duelist",
        eyeColor: ["green"],
        hairColor: ["auburn"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["📜", "🔮", "🟥", "🧙‍♀️"],
        abilities: [
            "CHAOS CONTROL", "REALITY ERASURE", "MYSTIC PROJECTION",
            "DARK SEAL", "TELEKINESIS", "CHTHONIAN BURST"
        ],
        ult: "REALITY ERASURE"
    },
    es: {  // Spanish
        name: "Bruja Escarlata",
        gender: "femenino",
        species: "Mutante",
        affiliation: "Vengadores",
        role: "Duelista",
        eyeColor: ["verde"],
        hairColor: ["caoba"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["📜", "🔮", "🟥", "🧙‍♀️"],
        abilities: [
            "CONTROL DEL CAOS", "BORRADO DE LA REALIDAD", "PROYECCIÓN MÍSTICA",
            "SELLO OSCURO", "TELEQUINESIS", "EXPLOSIÓN CTHONIANA"
        ],
        ult: "BORRADO DE LA REALIDAD"
    },
    fr: {  // French
        name: "Sorcière Rouge",
        gender: "féminin",
        species: "Mutante",
        affiliation: "Avengers",
        role: "Duelliste",
        eyeColor: ["vert"],
        hairColor: ["auburn"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["📜", "🔮", "🟥", "🧙‍♀️"],
        abilities: [
            "CONTRÔLE DU CHAOS", "EFFACEMENT DE LA RÉALITÉ", "PROJECTION MYSTIQUE",
            "SCEAU OBSCUR", "TÉLÉKINÉSIE", "EXPLOSION CTHONIENNE"
        ],
        ult: "EFFACEMENT DE LA RÉALITÉ"
    },
    de: {  // German
        name: "Scharlachhexe",
        gender: "weiblich",
        species: "Mutantin",
        affiliation: "Avengers",
        role: "Duellant",
        eyeColor: ["grün"],
        hairColor: ["kastanienbraun"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["📜", "🔮", "🟥", "🧙‍♀️"],
        abilities: [
            "CHAOS-KONTROLLE", "REALITÄTSAUSLÖSCHUNG", "MYSTISCHE PROJEKTION",
            "DUNKLES SIEGEL", "TELEKINESE", "CTHONISCHE EXPLOSION"
        ],
        ult: "REALITÄTSAUSLÖSCHUNG"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "猩红女巫",
        gender: "女性",
        species: "变种人",
        affiliation: "复仇者联盟",
        role: "决斗者",
        eyeColor: ["绿色"],
        hairColor: ["赤褐色"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["📜", "🔮", "🟥", "🧙‍♀️"],
        abilities: [
            "混沌控制", "现实抹除", "神秘投射",
            "黑暗封印", "念动力", "克苏鲁爆破"
        ],
        ult: "现实抹除"
    }
});

const spiderMan = new Person({
    en: {
        name: "Spider-Man",
        gender: "male",
        species: "Human",
        affiliation: "Spider-Verse",
        role: "Duelist",
        eyeColor: ["hazel"],
        hairColor: ["brown"],
        hp: 250,
        dateOfOrigin: 1962,
        emoji: ["🧪", "🏙️", "🕸️", "🕷️"],
        abilities: [
            "Spider-Power", "Cyber-Web Cluster", "Thwip and Flip",
            "Wall Crawl", "Web-Swing", "Amazing Combo",
            "Get Over Here!", "Spectacular Spin"
        ],
        ult: "Spectacular Spin"
    },
    es: {  // Spanish
        name: "Hombre Araña",
        gender: "masculino",
        species: "Humano",
        affiliation: "Spider-Verso",
        role: "Duelista",
        eyeColor: ["avellana"],
        hairColor: ["marrón"],
        hp: 250,
        dateOfOrigin: 1962,
        emoji: ["🧪", "🏙️", "🕸️", "🕷️"],
        abilities: [
            "PODER ARÁCNIDO", "CLÚSTER DE CIBER-RED", "THWIP Y VOLTERETA",
            "TREPAR MUROS", "BALANCEO CON TELARAÑA", "COMBO ASOMBROSO",
            "¡VEN AQUÍ!", "GIRO ESPECTACULAR"
        ],
        ult: "GIRO ESPECTACULAR"
    },
    fr: {  // French
        name: "Spider-Man",
        gender: "homme",
        species: "Humain",
        affiliation: "Spider-Verse",
        role: "Duelliste",
        eyeColor: ["noisette"],
        hairColor: ["marron"],
        hp: 250,
        dateOfOrigin: 1962,
        emoji: ["🧪", "🏙️", "🕸️", "🕷️"],
        abilities: [
            "POUVOIR D'ARAIGNÉE", "GRAPPE DE TOILE CYBERNÉTIQUE", "THWIP ET FLIP",
            "ESCALADE MURALE", "BALANCEMENT AVEC TOILE", "COMBO INCROYABLE",
            "VIENS ICI !", "TOURNOIEMENT SPECTACULAIRE"
        ],
        ult: "TOURNOIEMENT SPECTACULAIRE"
    },
    de: {  // German
        name: "Spider-Man",
        gender: "männlich",
        species: "Mensch",
        affiliation: "Spider-Versum",
        role: "Duellant",
        eyeColor: ["haselnussbraun"],
        hairColor: ["braun"],
        hp: 250,
        dateOfOrigin: 1962,
        emoji: ["🧪", "🏙️", "🕸️", "🕷️"],
        abilities: [
            "SPINNENKRAFT", "CYBER-NETZCLUSTER", "THWIP UND FLIP",
            "WANDKLETTERN", "NETZSCHWINGEN", "ERSTAUNLICHES KOMBO",
            "KOMM HER!", "SPEKTAKULÄRE DREHUNG"
        ],
        ult: "SPEKTAKULÄRE DREHUNG"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "蜘蛛侠",
        gender: "男性",
        species: "人类",
        affiliation: "蜘蛛宇宙",
        role: "决斗者",
        eyeColor: ["榛色"],
        hairColor: ["棕色"],
        hp: 250,
        dateOfOrigin: 1962,
        emoji: ["🧪", "🏙️", "🕸️", "🕷️"],
        abilities: [
            "蜘蛛能力", "网络集群", "蛛丝翻转",
            "攀墙", "蜘蛛摆荡", "惊人连击",
            "过来吧！", "壮观旋转"
        ],
        ult: "壮观旋转"
    }
});

const squirrelGirl = new Person({
    en: {
        name: "Squirrel Girl",
        gender: "female",
        species: "Mutant",
        affiliation: "None",
        role: "Duelist",
        eyeColor: ["green"],
        hairColor: ["ginger"],
        hp: 275,
        dateOfOrigin: 1992,
        emoji: ["🍂", "😂", "💪", "🐿️"],
        abilities: [
            "Burst Acorn", "Squirrel Blockade", "Tail Bounce",
            "Mammal Bond", "Unbeatable Squirrel Tsunami"
        ],
        ult: "Unbeatable Squirrel Tsunami"
    },
    es: {  // Spanish
        name: "Chica Ardilla",
        gender: "femenino",
        species: "Mutante",
        affiliation: "Ninguno",
        role: "Duelista",
        eyeColor: ["verde"],
        hairColor: ["pelirrojo"],
        hp: 275,
        dateOfOrigin: 1992,
        emoji: ["🍂", "😂", "💪", "🐿️"],
        abilities: [
            "BELLOTA EXPLOSIVA", "BLOQUEO DE ARDILLA", "REBOTE DE COLA",
            "VÍNCULO MAMÍFERO", "TSUNAMI DE ARDILLAS INDESTRUCTIBLE"
        ],
        ult: "TSUNAMI DE ARDILLAS INDESTRUCTIBLE"
    },
    fr: {  // French
        name: "Fille Écureuil",
        gender: "féminin",
        species: "Mutante",
        affiliation: "Aucune",
        role: "Duelliste",
        eyeColor: ["vert"],
        hairColor: ["roux"],
        hp: 275,
        dateOfOrigin: 1992,
        emoji: ["🍂", "😂", "💪", "🐿️"],
        abilities: [
            "GLAND EXPLOSIF", "BARRICADE D'ÉCUREUIL", "REBONDISSEMENT DE QUEUE",
            "LIEN MAMMIFÈRE", "TSUNAMI D'ÉCUREUILS INDESTRUCTIBLE"
        ],
        ult: "TSUNAMI D'ÉCUREUILS INDESTRUCTIBLE"
    },
    de: {  // German
        name: "Eichhörnchen-Mädchen",
        gender: "weiblich",
        species: "Mutantin",
        affiliation: "Keine",
        role: "Duellant",
        eyeColor: ["grün"],
        hairColor: ["rotbraun"],
        hp: 275,
        dateOfOrigin: 1992,
        emoji: ["🍂", "😂", "💪", "🐿️"],
        abilities: [
            "EICHEL-EXPLOSION", "EICHHÖRNCHEN-SPERRUNG", "SCHWANZSPRUNG",
            "SÄUGETIER-BINDUNG", "UNSCHLAGBARE EICHHÖRNCHEN-TSUNAMI"
        ],
        ult: "UNSCHLAGBARE EICHHÖRNCHEN-TSUNAMI"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "松鼠女孩",
        gender: "女性",
        species: "变种人",
        affiliation: "无",
        role: "决斗者",
        eyeColor: ["绿色"],
        hairColor: ["姜色"],
        hp: 275,
        dateOfOrigin: 1992,
        emoji: ["🍂", "😂", "💪", "🐿️"],
        abilities: [
            "爆裂橡果", "松鼠封锁", "尾巴弹跳",
            "哺乳动物羁绊", "无敌松鼠海啸"
        ],
        ult: "无敌松鼠海啸"
    }
});

const starLord = new Person({
    en: {
        name: "Star-Lord",
        gender: "male",
        species: "Human",
        affiliation: "Guardians",
        role: "Duelist",
        eyeColor: ["hazel"],
        hairColor: ["blond"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🎶", "🔫", "🌌", "😎"],
        abilities: [
            "Element Guns", "Stellar Shift", "Blaster Barrage",
            "Rocket Propulsion", "Galactic Legend"
        ],
        ult: "Galactic Legend"
    },
    es: {  // Spanish
        name: "Señor de las Estrellas",
        gender: "masculino",
        species: "Humano",
        affiliation: "Guardianes",
        role: "Duelista",
        eyeColor: ["avellana"],
        hairColor: ["rubio"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🎶", "🔫", "🌌", "😎"],
        abilities: [
            "PISTOLAS ELEMENTALES", "CAMBIO ESTELAR", "BARRAGE DE BLÁSTERES",
            "PROPULSIÓN COHETE", "LEYENDA GALÁCTICA"
        ],
        ult: "LEYENDA GALÁCTICA"
    },
    fr: {  // French
        name: "Star-Lord",
        gender: "homme",
        species: "Humain",
        affiliation: "Gardiens",
        role: "Duelliste",
        eyeColor: ["noisette"],
        hairColor: ["blond"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🎶", "🔫", "🌌", "😎"],
        abilities: [
            "PISTOLETS ÉLÉMENTAIRES", "DÉPLACEMENT STELLAIRE", "BARRAGE DE BLASTERS",
            "PROPULSION À RÉACTION", "LÉGENDE GALACTIQUE"
        ],
        ult: "LÉGENDE GALACTIQUE"
    },
    de: {  // German
        name: "Star-Lord",
        gender: "männlich",
        species: "Mensch",
        affiliation: "Wächter",
        role: "Duellant",
        eyeColor: ["haselnussbraun"],
        hairColor: ["blond"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🎶", "🔫", "🌌", "😎"],
        abilities: [
            "ELEMENTARWAFFEN", "STELLARER SCHRITT", "BLASTER-BARRAGE",
            "RAKETENANTRIEB", "GALAKTISCHE LEGENDE"
        ],
        ult: "GALAKTISCHE LEGENDE"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "星爵",
        gender: "男性",
        species: "人类",
        affiliation: "银河护卫队",
        role: "决斗者",
        eyeColor: ["榛色"],
        hairColor: ["金色"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🎶", "🔫", "🌌", "😎"],
        abilities: [
            "元素枪", "星际突进", "爆能枪弹幕",
            "火箭推进", "银河传奇"
        ],
        ult: "银河传奇"
    }
});

const storm = new Person({
    en: {
        name: "Storm",
        gender: "female",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Duelist",
        eyeColor: ["blue"],
        hairColor: ["white"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["🌧️", "☁️", "⚡", "🌪️"],
        abilities: [
            "Wind Blade", "Bolt Rush", "Goddess Boost",
            "Weather Control", "Omega Hurricane"
        ],
        ult: "Omega Hurricane"
    },
    es: {  // Spanish
        name: "Tormenta",
        gender: "femenino",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Duelista",
        eyeColor: ["azul"],
        hairColor: ["blanco"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["🌧️", "☁️", "⚡", "🌪️"],
        abilities: [
            "ESPADA DE VIENTO", "CARGA RELÁMPAGO", "IMPULSO DE DIOSA",
            "CONTROL CLIMÁTICO", "HURACÁN OMEGA"
        ],
        ult: "HURACÁN OMEGA"
    },
    fr: {  // French
        name: "Tornade",
        gender: "féminin",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Duelliste",
        eyeColor: ["bleu"],
        hairColor: ["blanc"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["🌧️", "☁️", "⚡", "🌪️"],
        abilities: [
            "LAME DE VENT", "RUÉE FOUDROYANTE", "BOOST DE DÉESSE",
            "CONTRÔLE DU CLIMAT", "OURAGAN OMÉGA"
        ],
        ult: "OURAGAN OMÉGA"
    },
    de: {  // German
        name: "Sturm",
        gender: "weiblich",
        species: "Mutantin",
        affiliation: "X-Men",
        role: "Duellant",
        eyeColor: ["blau"],
        hairColor: ["weiß"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["🌧️", "☁️", "⚡", "🌪️"],
        abilities: [
            "WINDSCHNEIDE", "BLITZSTURM", "GÖTTIN-SCHUB",
            "WETTERKONTROLLE", "OMEGA-HURRIKAN"
        ],
        ult: "OMEGA-HURRIKAN"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "暴风女",
        gender: "女性",
        species: "变种人",
        affiliation: "X战警",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["白色"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["🌧️", "☁️", "⚡", "🌪️"],
        abilities: [
            "风刃", "雷霆突袭", "女神增益",
            "天气控制", "欧米茄飓风"
        ],
        ult: "欧米茄飓风"
    }
});

const punisher = new Person({
    en: {
        name: "The Punisher",
        gender: "male",
        species: "Human",
        affiliation: "None",
        role: "Duelist",
        eyeColor: ["blue"],
        hairColor: ["brown"],
        hp: 300,
        dateOfOrigin: 1974,
        emoji: ["⚖️", "💀", "🔫", "🏴‍☠️"],
        abilities: [
            "Adjudication", "Deliverance", "Scourge Grenade",
            "Culling Turret", "Vantage Connection", "Final Judgement", "Warrior's Gaze"
        ],
        ult: "Final Judgement"
    },
    es: {  // Spanish
        name: "El Castigador",
        gender: "masculino",
        species: "Humano",
        affiliation: "Ninguno",
        role: "Duelista",
        eyeColor: ["azul"],
        hairColor: ["marrón"],
        hp: 300,
        dateOfOrigin: 1974,
        emoji: ["⚖️", "💀", "🔫", "🏴‍☠️"],
        abilities: [
            "ADJUDICACIÓN", "LIBERACIÓN", "GRANADA DEL AZOTE",
            "TORRETA DE ELIMINACIÓN", "CONEXIÓN ESTRATÉGICA", "JUICIO FINAL", "MIRADA GUERRERA"
        ],
        ult: "JUICIO FINAL"
    },
    fr: {  // French
        name: "Le Punisher",
        gender: "homme",
        species: "Humain",
        affiliation: "Aucune",
        role: "Duelliste",
        eyeColor: ["bleu"],
        hairColor: ["marron"],
        hp: 300,
        dateOfOrigin: 1974,
        emoji: ["⚖️", "💀", "🔫", "🏴‍☠️"],
        abilities: [
            "ADJUDICATION", "DÉLIVRANCE", "GRENADE FLÉAU",
            "TOURELLE D'ÉLIMINATION", "CONNEXION STRATÉGIQUE", "JUGEMENT FINAL", "REGARD DU GUERRIER"
        ],
        ult: "JUGEMENT FINAL"
    },
    de: {  // German
        name: "Der Bestrafer",
        gender: "männlich",
        species: "Mensch",
        affiliation: "Keine",
        role: "Duellant",
        eyeColor: ["blau"],
        hairColor: ["braun"],
        hp: 300,
        dateOfOrigin: 1974,
        emoji: ["⚖️", "💀", "🔫", "🏴‍☠️"],
        abilities: [
            "RICHERT", "BEFREIUNG", "GEISSLEGRANATE",
            "AUSMERZUNGSGESCHÜTZ", "TAKTISCHE VERBINDUNG", "ENDGÜLTIGES URTEIL", "KRIEGERBLICK"
        ],
        ult: "ENDGÜLTIGES URTEIL"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "惩罚者",
        gender: "男性",
        species: "人类",
        affiliation: "无",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["棕色"],
        hp: 300,
        dateOfOrigin: 1974,
        emoji: ["⚖️", "💀", "🔫", "🏴‍☠️"],
        abilities: [
            "裁决", "救赎", "天罚手雷",
            "清算炮塔", "战略连接", "终极审判", "战士凝视"
        ],
        ult: "终极审判"
    }
});

const winterSoldier = new Person({
    en: {
        name: "Winter Soldier",
        gender: "male",
        species: "Human",
        affiliation: "Avengers",
        role: "Duelist",
        eyeColor: ["blue"],
        hairColor: ["brown"],
        hp: 275,
        dateOfOrigin: 1941,
        emoji: ["❄️", "🔧", "🦾", "🧑‍🎤"],
        abilities: [
            "Roterstern", "Bionic Hook", "Tainted Voltage",
            "Trooper's Fist", "Ceaseless Charge", "Kraken Impact", "Infinite Grit"
        ],
        ult: "Kraken Impact"
    },
    es: {  // Spanish
        name: "Soldado de Invierno",
        gender: "masculino",
        species: "Humano",
        affiliation: "Vengadores",
        role: "Duelista",
        eyeColor: ["azul"],
        hairColor: ["marrón"],
        hp: 275,
        dateOfOrigin: 1941,
        emoji: ["❄️", "🔧", "🦾", "🧑‍🎤"],
        abilities: [
            "ROTERSTERN", "GANCHO BIÓNICO", "VOLTAJE CORRUPTO",
            "PUÑO DE SOLDADO", "CARGA INCESANTE", "IMPACTO DEL KRAKEN", "DETERMINACIÓN INFINITA"
        ],
        ult: "IMPACTO DEL KRAKEN"
    },
    fr: {  // French
        name: "Soldat de l'Hiver",
        gender: "homme",
        species: "Humain",
        affiliation: "Avengers",
        role: "Duelliste",
        eyeColor: ["bleu"],
        hairColor: ["marron"],
        hp: 275,
        dateOfOrigin: 1941,
        emoji: ["❄️", "🔧", "🦾", "🧑‍🎤"],
        abilities: [
            "ROTERSTERN", "CROCHET BIONIQUE", "TENSION CORROMPUE",
            "POING DU TROUPE", "CHARGE INCESSANTE", "IMPACT DU KRAKEN", "GRIT INFINI"
        ],
        ult: "IMPACT DU KRAKEN"
    },
    de: {  // German
        name: "Wintersoldat",
        gender: "männlich",
        species: "Mensch",
        affiliation: "Avengers",
        role: "Duellant",
        eyeColor: ["blau"],
        hairColor: ["braun"],
        hp: 275,
        dateOfOrigin: 1941,
        emoji: ["❄️", "🔧", "🦾", "🧑‍🎤"],
        abilities: [
            "ROTERSTERN", "BIONISCHER HAKEN", "VERDERBTE SPANNUNG",
            "FAUST DES SOLDATEN", "UNAUFHÖRLICHER ANGRIFF", "KRAKEN-EINSCHLAG", "UNENDLICHE ENTSCHLOSSENHEIT"
        ],
        ult: "KRAKEN-EINSCHLAG"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "冬日战士",
        gender: "男性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["棕色"],
        hp: 275,
        dateOfOrigin: 1941,
        emoji: ["❄️", "🔧", "🦾", "🧑‍🎤"],
        abilities: [
            "红星", "仿生钩爪", "腐蚀电压",
            "士兵之拳", "无尽冲锋", "海妖冲击", "无限坚韧"
        ],
        ult: "海妖冲击"
    }
});

const wolverine = new Person({
    en: {
        name: "Wolverine",
        gender: "male",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Duelist",
        eyeColor: ["brown"],
        hairColor: ["black"],
        hp: 350,
        dateOfOrigin: 1974,
        emoji: ["🐺", "⚔️", "🛡️", "🦾"],
        abilities: [
            "Savage Claw", "Feral Leap", "Undying Animal",
            "Vicious Rampage", "Regenerative Healing Factor",
            "Berserker Rage", "Last Stand"
        ],
        ult: "Last Stand"
    },
    es: {  // Spanish
        name: "Lobezno",
        gender: "masculino",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Duelista",
        eyeColor: ["marrón"],
        hairColor: ["negro"],
        hp: 350,
        dateOfOrigin: 1974,
        emoji: ["🐺", "⚔️", "🛡️", "🦾"],
        abilities: [
            "GARRA SALVAJE", "SALTO FEROZ", "ANIMAL INMORTAL",
            "DESTRUCCIÓN IMPLACABLE", "FACTOR DE CURACIÓN REGENERATIVA",
            "FURIA BERSERKER", "ÚLTIMA RESISTENCIA"
        ],
        ult: "ÚLTIMA RESISTENCIA"
    },
    fr: {  // French
        name: "Wolverine",
        gender: "homme",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Duelliste",
        eyeColor: ["marron"],
        hairColor: ["noir"],
        hp: 350,
        dateOfOrigin: 1974,
        emoji: ["🐺", "⚔️", "🛡️", "🦾"],
        abilities: [
            "GRIFFE SAUVAGE", "SAUT FÉROCE", "ANIMAL IMMORTEL",
            "RAGE VICIEUSE", "FACTEUR DE GUÉRISON RÉGÉNÉRATIF",
            "RAGE BERSERKER", "DERNIER COMBAT"
        ],
        ult: "DERNIER COMBAT"
    },
    de: {  // German
        name: "Wolverine",
        gender: "männlich",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Duellant",
        eyeColor: ["braun"],
        hairColor: ["schwarz"],
        hp: 350,
        dateOfOrigin: 1974,
        emoji: ["🐺", "⚔️", "🛡️", "🦾"],
        abilities: [
            "WILDE KLAUE", "WILDER SPRUNG", "UNSTERBLICHES TIER",
            "BÖSARTIGE RAMPAGE", "REGENERIERENDER HEILFAKTOR",
            "BERSERKERWUT", "LETZTER STAND"
        ],
        ult: "LETZTER STAND"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "金刚狼",
        gender: "男性",
        species: "变种人",
        affiliation: "X战警",
        role: "决斗者",
        eyeColor: ["棕色"],
        hairColor: ["黑色"],
        hp: 350,
        dateOfOrigin: 1974,
        emoji: ["🐺", "⚔️", "🛡️", "🦾"],
        abilities: [
            "野蛮之爪", "野性跳跃", "不朽野兽",
            "残暴狂暴", "再生治愈因子",
            "狂战士之怒", "最后防线"
        ],
        ult: "最后防线"
    }
});

const misterFantastic = new Person({
    en: {
        name: "Mister Fantastic",
        gender: "male",
        species: "Human",
        affiliation: "Fantastic 4",
        role: "Duelist",
        eyeColor: ["brown"],
        hairColor: ["brown", "grey"],
        hp: 350,
        dateOfOrigin: 1961,
        emoji: ["🧑‍🔬", "🔵", "🧠", "🔬"],
        abilities: [
            "STRETCH PUNCH", "BRAINIAC BOUNCE", "REFLEXIVE RUBBER",
            "FLEXIBLE ELONGATION", "DISTENDED GRIP", "ELASTIC STRENGTH"
        ],
        ult: "BRAINIAC BOUNCE"
    },
    es: {  // Spanish
        name: "Señor Fantástico",
        gender: "masculino",
        species: "Humano",
        affiliation: "Los 4 Fantásticos",
        role: "Duelista",
        eyeColor: ["marrón"],
        hairColor: ["marrón", "gris"],
        hp: 350,
        dateOfOrigin: 1961,
        emoji: ["🧑‍🔬", "🔵", "🧠", "🔬"],
        abilities: [
            "PUÑETAZO ELÁSTICO", "REBOTE CEREBRAL", "GOMA REFLEJA",
            "ALARGAMIENTO FLEXIBLE", "AGARRE EXTENDIDO", "FUERZA ELÁSTICA"
        ],
        ult: "REBOTE CEREBRAL"
    },
    fr: {  // French
        name: "Mister Fantastique",
        gender: "homme",
        species: "Humain",
        affiliation: "Les 4 Fantastiques",
        role: "Duelliste",
        eyeColor: ["marron"],
        hairColor: ["marron", "gris"],
        hp: 350,
        dateOfOrigin: 1961,
        emoji: ["🧑‍🔬", "🔵", "🧠", "🔬"],
        abilities: [
            "COUP DE POING ÉLASTIQUE", "REBONDISSEMENT CERVEAU", "CAOUTCHOUC RÉFLEXIF",
            "ALLONGEMENT FLEXIBLE", "PRISE ÉTIRÉE", "FORCE ÉLASTIQUE"
        ],
        ult: "REBONDISSEMENT CERVEAU"
    },
    de: {  // German
        name: "Mister Fantastisch",
        gender: "männlich",
        species: "Mensch",
        affiliation: "Fantastischen Vier",
        role: "Duellant",
        eyeColor: ["braun"],
        hairColor: ["braun", "grau"],
        hp: 350,
        dateOfOrigin: 1961,
        emoji: ["🧑‍🔬", "🔵", "🧠", "🔬"],
        abilities: [
            "STRECKSCHLAG", "GEHIRN-HÜPFER", "REFLEXIVES GUMMI",
            "FLEXIBLE DEHNUNG", "AUSGEDEHNTER GRIFF", "ELASTISCHE KRAFT"
        ],
        ult: "GEHIRN-HÜPFER"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "神奇先生",
        gender: "男性",
        species: "人类",
        affiliation: "神奇四侠",
        role: "决斗者",
        eyeColor: ["棕色"],
        hairColor: ["棕色", "灰色"],
        hp: 350,
        dateOfOrigin: 1961,
        emoji: ["🧑‍🔬", "🔵", "🧠", "🔬"],
        abilities: [
            "伸展拳", "智者弹跳", "反射橡胶",
            "灵活延展", "拉长抓握", "弹性力量"
        ],
        ult: "智者弹跳"
    }
});

const adamWarlock = new Person({
    en: {
        name: "Adam Warlock",
        gender: "male",
        species: "Sovereign",
        affiliation: "Guardians",
        role: "Strategist",
        eyeColor: ["white"],
        hairColor: ["gold"],
        hp: 250,
        dateOfOrigin: 1967,
        emoji: ["🪞", "✨", "🌌", "👑"],
        abilities: [
            "QUANTUM MAGIC", "KARMIC REVIVAL", "SOUL BOND",
            "AVATAR LIFE STREAM", "COSMIC CLUSTER"
        ],
        ult: "KARMIC REVIVAL"
    },
    es: {  // Spanish
        name: "Adam Warlock",
        gender: "masculino",
        species: "Soberano",
        affiliation: "Guardianes",
        role: "Estratega",
        eyeColor: ["blanco"],
        hairColor: ["dorado"],
        hp: 250,
        dateOfOrigin: 1967,
        emoji: ["🪞", "✨", "🌌", "👑"],
        abilities: [
            "MAGIA CUÁNTICA", "RENACIMIENTO KÁRMICO", "VÍNCULO ALMA",
            "CORRIENTE VITAL AVATAR", "CLÚSTER CÓSMICO"
        ],
        ult: "RENACIMIENTO KÁRMICO"
    },
    fr: {  // French
        name: "Adam Warlock",
        gender: "homme",
        species: "Souverain",
        affiliation: "Gardiens",
        role: "Stratège",
        eyeColor: ["blanc"],
        hairColor: ["doré"],
        hp: 250,
        dateOfOrigin: 1967,
        emoji: ["🪞", "✨", "🌌", "👑"],
        abilities: [
            "MAGIE QUANTIQUE", "RÉVIVISCENCE KARMATIQUE", "LIEN D'ÂME",
            "FLUX DE VIE AVATAR", "AGRÉGAT COSMIQUE"
        ],
        ult: "RÉVIVISCENCE KARMATIQUE"
    },
    de: {  // German
        name: "Adam Warlock",
        gender: "männlich",
        species: "Souverän",
        affiliation: "Wächter",
        role: "Stratege",
        eyeColor: ["weiß"],
        hairColor: ["gold"],
        hp: 250,
        dateOfOrigin: 1967,
        emoji: ["🪞", "✨", "🌌", "👑"],
        abilities: [
            "QUANTENMAGIE", "KARMISCHE WIEDERGEBURT", "SEELENBUND",
            "AVATAR-LEBENSSTROM", "KOSMISCHES CLUSTER"
        ],
        ult: "KARMISCHE WIEDERGEBURT"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "亚当·沃洛克",
        gender: "男性",
        species: "至尊族",
        affiliation: "银河护卫队",
        role: "战略家",
        eyeColor: ["白色"],
        hairColor: ["金色"],
        hp: 250,
        dateOfOrigin: 1967,
        emoji: ["🪞", "✨", "🌌", "👑"],
        abilities: [
            "量子魔法", "业力复生", "灵魂羁绊",
            "化身生命流", "宇宙聚合"
        ],
        ult: "业力复生"
    }
});

const rocket = new Person({
    en: {
        name: "Rocket",
        gender: "male",
        species: "Raccoon",
        affiliation: "Guardians",
        role: "Strategist",
        eyeColor: ["red"],
        hairColor: ["black", "brown", "white"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🔧", "😂", "🦝", "🔫"],
        abilities: [
            "BOMBARD MODE", "REPAIR MODE", "C.Y.A.",
            "JETPACK DASH", "B.R.B.", "WILD CRAWL", "FLYING ACE"
        ],
        ult: "C.Y.A."
    },
    es: {  // Spanish
        name: "Rocket",
        gender: "masculino",
        species: "Mapache",
        affiliation: "Guardianes",
        role: "Estratega",
        eyeColor: ["rojo"],
        hairColor: ["negro", "marrón", "blanco"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🔧", "😂", "🦝", "🔫"],
        abilities: [
            "MODO BOMBARDEO", "MODO REPARACIÓN", "C.Y.A.",
            "IMPULSO JETPACK", "B.R.B.", "TREPA SALVAJE", "AS VOLADOR"
        ],
        ult: "C.Y.A."
    },
    fr: {  // French
        name: "Rocket",
        gender: "homme",
        species: "Raton laveur",
        affiliation: "Gardiens",
        role: "Stratège",
        eyeColor: ["rouge"],
        hairColor: ["noir", "marron", "blanc"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🔧", "😂", "🦝", "🔫"],
        abilities: [
            "MODE BOMBARDEMENT", "MODE RÉPARATION", "C.Y.A.",
            "PROPULSION JETPACK", "B.R.B.", "GRIMPÉE SAUVAGE", "AS VOLANT"
        ],
        ult: "C.Y.A."
    },
    de: {  // German
        name: "Rocket",
        gender: "männlich",
        species: "Waschbär",
        affiliation: "Wächter",
        role: "Stratege",
        eyeColor: ["rot"],
        hairColor: ["schwarz", "braun", "weiß"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🔧", "😂", "🦝", "🔫"],
        abilities: [
            "BOMBARDIERUNGSMODUS", "REPARATURMODUS", "C.Y.A.",
            "JETPACK-SPRINT", "B.R.B.", "WILDER KRABBEL", "FLIEGERASS"
        ],
        ult: "C.Y.A."
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "火箭浣熊",
        gender: "男性",
        species: "浣熊",
        affiliation: "银河护卫队",
        role: "战略家",
        eyeColor: ["红色"],
        hairColor: ["黑色", "棕色", "白色"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🔧", "😂", "🦝", "🔫"],
        abilities: [
            "轰炸模式", "维修模式", "C.Y.A.",
            "喷气背包冲刺", "B.R.B.", "狂野爬行", "飞行王牌"
        ],
        ult: "C.Y.A."
    }
});

const loki = new Person({
    en: {
        name: "Loki",
        gender: "fluid",
        species: "Asgardian",
        affiliation: "Villain",
        role: "Strategist",
        eyeColor: ["green"],
        hairColor: ["black"],
        hp: 250,
        dateOfOrigin: 1949,
        emoji: ["🃏", "🟢", "👑", "🪄"],
        abilities: [
            "MYSTICAL MISSILE", "GOD OF MISCHIEF", "REGENERATION DOMAIN",
            "DOPPELGANGER", "DEVIOUS EXCHANGE", "BACKSTAB", "DECEPTION"
        ],
        ult: "GOD OF MISCHIEF"
    },
    es: {  // Spanish
        name: "Loki",
        gender: "fluido",
        species: "Asgardiano",
        affiliation: "Villano",
        role: "Estratega",
        eyeColor: ["verde"],
        hairColor: ["negro"],
        hp: 250,
        dateOfOrigin: 1949,
        emoji: ["🃏", "🟢", "👑", "🪄"],
        abilities: [
            "MISIL MÍSTICO", "DIOS DEL ENGAÑO", "DOMINIO REGENERADOR",
            "DOBLE FANTASMA", "INTERCAMBIO ENGAÑOSO", "PUÑALADA TRAPERA", "ILUSIÓN"
        ],
        ult: "DIOS DEL ENGAÑO"
    },
    fr: {  // French
        name: "Loki",
        gender: "fluide",
        species: "Asgardien",
        affiliation: "Méchant",
        role: "Stratège",
        eyeColor: ["vert"],
        hairColor: ["noir"],
        hp: 250,
        dateOfOrigin: 1949,
        emoji: ["🃏", "🟢", "👑", "🪄"],
        abilities: [
            "MISSILE MYSTIQUE", "DIEU DE LA MALICE", "DOMAINE DE RÉGÉNÉRATION",
            "DOPPELGÄNGER", "ÉCHANGE MALICIEUX", "COUP DANS LE DOS", "ILLUSION"
        ],
        ult: "DIEU DE LA MALICE"
    },
    de: {  // German
        name: "Loki",
        gender: "flüssig",
        species: "Asgardian",
        affiliation: "Schurke",
        role: "Stratege",
        eyeColor: ["grün"],
        hairColor: ["schwarz"],
        hp: 250,
        dateOfOrigin: 1949,
        emoji: ["🃏", "🟢", "👑", "🪄"],
        abilities: [
            "MYSTISCHES GESCHOSS", "GOTT DES SCHABERNACKS", "REGENERATIONSZONE",
            "DOPPELGÄNGER", "HINTERLISTIGER TAUSCH", "HINTERHÄLTIGER STICH", "TÄUSCHUNG"
        ],
        ult: "GOTT DES SCHABERNACKS"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "洛基",
        gender: "流动",
        species: "阿斯加德人",
        affiliation: "反派",
        role: "战略家",
        eyeColor: ["绿色"],
        hairColor: ["黑色"],
        hp: 250,
        dateOfOrigin: 1949,
        emoji: ["🃏", "🟢", "👑", "🪄"],
        abilities: [
            "神秘飞弹", "恶作剧之神", "再生领域",
            "幻影分身", "狡诈换位", "背刺", "欺骗"
        ],
        ult: "恶作剧之神"
    }
});

const lunaSnow = new Person({
    en: {
        name: "Luna Snow",
        gender: "female",
        species: "Human",
        affiliation: "Avengers",
        role: "Strategist",
        eyeColor: ["blue", "brown"],
        hairColor: ["black", "white"],
        hp: 275,
        dateOfOrigin: 2018,
        emoji: ["❄️", "🎤", "✨", "🌙"],
        abilities: [
            "LIGHT & DARK ICE", "FATE OF BOTH WORLDS", "ICE ARTS",
            "SHARE THE STAGE", "ABSOLUTE ZERO", "CRYO HEART", "SMOOTH SKATE"
        ],
        ult: "FATE OF BOTH WORLDS"
    },
    es: {  // Spanish
        name: "Luna Snow",
        gender: "femenino",
        species: "Humana",
        affiliation: "Vengadores",
        role: "Estratega",
        eyeColor: ["azul", "marrón"],
        hairColor: ["negro", "blanco"],
        hp: 275,
        dateOfOrigin: 2018,
        emoji: ["❄️", "🎤", "✨", "🌙"],
        abilities: [
            "HIELO CLARO Y OSCURO", "DESTINO DE DOS MUNDOS", "ARTES DEL HIELO",
            "COMPARTE EL ESCENARIO", "CERO ABSOLUTO", "CORAZÓN CRIOGÉNICO", "PATINAJE SUAVE"
        ],
        ult: "DESTINO DE DOS MUNDOS"
    },
    fr: {  // French
        name: "Luna Snow",
        gender: "féminin",
        species: "Humaine",
        affiliation: "Avengers",
        role: "Stratège",
        eyeColor: ["bleu", "marron"],
        hairColor: ["noir", "blanc"],
        hp: 275,
        dateOfOrigin: 2018,
        emoji: ["❄️", "🎤", "✨", "🌙"],
        abilities: [
            "GLACE LUMINEUSE ET SOMBRE", "DESTIN DES DEUX MONDES", "ARTS DE LA GLACE",
            "PARTAGE DE SCÈNE", "ZÉRO ABSOLU", "CŒUR CRYOGÉNIQUE", "PATINAGE FLUIDE"
        ],
        ult: "DESTIN DES DEUX MONDES"
    },
    de: {  // German
        name: "Luna Snow",
        gender: "weiblich",
        species: "Mensch",
        affiliation: "Avengers",
        role: "Stratege",
        eyeColor: ["blau", "braun"],
        hairColor: ["schwarz", "weiß"],
        hp: 275,
        dateOfOrigin: 2018,
        emoji: ["❄️", "🎤", "✨", "🌙"],
        abilities: [
            "LICHT & DUNKLES EIS", "SCHICKSAL BEIDER WELTEN", "EISKÜNSTE",
            "BÜHNE TEILEN", "ABSOLUTER NULLPUNKT", "KRYO-HERZ", "SANFTES SCHLITTERN"
        ],
        ult: "SCHICKSAL BEIDER WELTEN"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "露娜·雪",
        gender: "女性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "战略家",
        eyeColor: ["蓝色", "棕色"],
        hairColor: ["黑色", "白色"],
        hp: 275,
        dateOfOrigin: 2018,
        emoji: ["❄️", "🎤", "✨", "🌙"],
        abilities: [
            "光暗之冰", "双界命运", "冰之艺术",
            "共享舞台", "绝对零度", "冰冻之心", "流畅滑行"
        ],
        ult: "双界命运"
    }
});

const mantis = new Person({
    en: {
        name: "Mantis",
        gender: "female",
        species: "Empath",
        affiliation: "Guardians",
        role: "Strategist",
        eyeColor: ["black"],
        hairColor: ["black"],
        hp: 275,
        dateOfOrigin: 1973,
        emoji: ["🌸", "😌", "👾", "🌌"],
        abilities: [
            "LIFE ENERGY BLAST", "SOUL RESURGENCE", "SPORE SLUMBER",
            "ALLIED INSPIRATION", "NATURAL ANGER", "HEALING FLOWER",
            "NATURE'S FAVOR", "NATURE'S SOUL"
        ],
        ult: "SOUL RESURGENCE"
    },
    es: {  // Spanish
        name: "Mantis",
        gender: "femenino",
        species: "Émpata",
        affiliation: "Guardianes",
        role: "Estratega",
        eyeColor: ["negro"],
        hairColor: ["negro"],
        hp: 275,
        dateOfOrigin: 1973,
        emoji: ["🌸", "😌", "👾", "🌌"],
        abilities: [
            "EXPLOSIÓN DE ENERGÍA VITAL", "RESURGIMIENTO DEL ALMA", "SUEÑO DE ESPORAS",
            "INSPIRACIÓN ALIADA", "IRA NATURAL", "FLOR CURATIVA",
            "FAVOR DE LA NATURALEZA", "ALMA DE LA NATURALEZA"
        ],
        ult: "RESURGIMIENTO DEL ALMA"
    },
    fr: {  // French
        name: "Mantis",
        gender: "féminin",
        species: "Empathe",
        affiliation: "Gardiens",
        role: "Stratège",
        eyeColor: ["noir"],
        hairColor: ["noir"],
        hp: 275,
        dateOfOrigin: 1973,
        emoji: ["🌸", "😌", "👾", "🌌"],
        abilities: [
            "EXPLOSION D'ÉNERGIE VITALE", "RÉSURGENCE DE L'ÂME", "SOMMEIL DES SPORES",
            "INSPIRATION ALLIÉE", "COLÈRE NATURELLE", "FLEUR GUÉRISSEUSE",
            "FAVEUR DE LA NATURE", "ÂME DE LA NATURE"
        ],
        ult: "RÉSURGENCE DE L'ÂME"
    },
    de: {  // German
        name: "Mantis",
        gender: "weiblich",
        species: "Empath",
        affiliation: "Wächter",
        role: "Stratege",
        eyeColor: ["schwarz"],
        hairColor: ["schwarz"],
        hp: 275,
        dateOfOrigin: 1973,
        emoji: ["🌸", "😌", "👾", "🌌"],
        abilities: [
            "LEBENSENERGIE-EXPLOSION", "SEELEN-WIEDERBELEBUNG", "SPORENSCHLAF",
            "VERBÜNDETE INSPIRATION", "NATÜRLICHER ZORN", "HEILENDE BLUME",
            "GUNST DER NATUR", "SEELE DER NATUR"
        ],
        ult: "SEELEN-WIEDERBELEBUNG"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "螳螂女",
        gender: "女性",
        species: "共感者",
        affiliation: "银河护卫队",
        role: "战略家",
        eyeColor: ["黑色"],
        hairColor: ["黑色"],
        hp: 275,
        dateOfOrigin: 1973,
        emoji: ["🌸", "😌", "👾", "🌌"],
        abilities: [
            "生命能量爆破", "灵魂复苏", "孢子沉眠",
            "盟友激励", "自然之怒", "治愈之花",
            "自然之恩", "自然之魂"
        ],
        ult: "灵魂复苏"
    }
});

const cloakAndDagger = new Person({
    en: {  // English
        name: "Cloak And Dagger",
        gender: "other",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Strategist",
        eyeColor: ["grey", "blue"],
        hairColor: ["black", "blond"],
        hp: 250,
        dateOfOrigin: 1982,
        emoji: ["🌘", "🔗", "🗡️", "🌌"],
        abilities: [
            "DARKFORCE CLOAK", "ETERNAL BOND", "LIGHT'S EMBRACE",
            "TERROR CAPE", "DARK TELEPORTATION"
        ],
        ult: "ETERNAL BOND"
    },
    es: {  // Spanish
        name: "Capa y Daga",
        gender: "otro",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Estratega",
        eyeColor: ["gris", "azul"],
        hairColor: ["negro", "rubio"],
        hp: 250,
        dateOfOrigin: 1982,
        emoji: ["🌘", "🔗", "🗡️", "🌌"],
        abilities: [
            "MANTO DE FUERZA OSCURA", "VÍNCULO ETERNO", "ABRAZO DE LUZ",
            "CAPA DEL TERROR", "TELETRANSPORTE OSCURO"
        ],
        ult: "VÍNCULO ETERNO"
    },
    fr: {  // French
        name: "Cape et Dague",
        gender: "autre",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Stratège",
        eyeColor: ["gris", "bleu"],
        hairColor: ["noir", "blond"],
        hp: 250,
        dateOfOrigin: 1982,
        emoji: ["🌘", "🔗", "🗡️", "🌌"],
        abilities: [
            "CAPE DE FORCE OBSCURE", "LIEN ÉTERNEL", "ÉTREINTE DE LUMIÈRE",
            "CAPE DE TERREUR", "TÉLÉPORTATION OBSCURE"
        ],
        ult: "LIEN ÉTERNEL"
    },
    de: {  // German
        name: "Umhang und Dolch",
        gender: "andere",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Stratege",
        eyeColor: ["grau", "blau"],
        hairColor: ["schwarz", "blond"],
        hp: 250,
        dateOfOrigin: 1982,
        emoji: ["🌘", "🔗", "🗡️", "🌌"],
        abilities: [
            "DUNKELKRAFT-UMHANG", "EWIGE BINDUNG", "UMARMUNG DES LICHTS",
            "TERROR-UMHANG", "DUNKLE TELEPORTATION"
        ],
        ult: "EWIGE BINDUNG"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "斗篷与匕首",
        gender: "其他",
        species: "变种人",
        affiliation: "X战警",
        role: "战略家",
        eyeColor: ["灰色", "蓝色"],
        hairColor: ["黑色", "金色"],
        hp: 250,
        dateOfOrigin: 1982,
        emoji: ["🌘", "🔗", "🗡️", "🌌"],
        abilities: [
            "黑暗能量斗篷", "永恒羁绊", "光之拥抱",
            "恐惧斗篷", "黑暗传送"
        ],
        ult: "永恒羁绊"
    }
});

const jeffTheLandShark = new Person({
    en: {  // English
        name: "Jeff The Land Shark",
        gender: "male",
        species: "Land Shark",
        affiliation: "None",
        role: "Strategist",
        eyeColor: ["black"],
        hairColor: ["none"],
        hp: 250,
        dateOfOrigin: 2019,
        emoji: ["🌊", "🐟", "🦈", "😂"],
        abilities: [
            "JOYFUL SPLASH", "AQUA BURST", "IT'S JEFF!", 
            "HIDE AND SEEK", "HEALING BUBBLE", "OBLIVIOUS CUTENESS"
        ],
        ult: "IT'S JEFF!"
    },
    es: {  // Spanish
        name: "Jeff el Tiburón Terrestre",
        gender: "masculino",
        species: "Tiburón Terrestre",
        affiliation: "Ninguna",
        role: "Estratega",
        eyeColor: ["negro"],
        hairColor: ["ninguno"],
        hp: 250,
        dateOfOrigin: 2019,
        emoji: ["🌊", "🐟", "🦈", "😂"],
        abilities: [
            "SALPICADURA ALEGRE", "EXPLOSIÓN ACUÁTICA", "¡ES JEFF!", 
            "ESCÓNDETE Y BUSCA", "BURBUJA CURATIVA", "TERNURA INGENUA"
        ],
        ult: "¡ES JEFF!"
    },
    fr: {  // French
        name: "Jeff le Requin Terrestre",
        gender: "masculin",
        species: "Requin Terrestre",
        affiliation: "Aucune",
        role: "Stratège",
        eyeColor: ["noir"],
        hairColor: ["aucun"],
        hp: 250,
        dateOfOrigin: 2019,
        emoji: ["🌊", "🐟", "🦈", "😂"],
        abilities: [
            "ÉCLABOUSSURE JOYEUSE", "EXPLOSION AQUATIQUE", "C'EST JEFF!", 
            "CACHE-CACHE", "BULLE GUÉRISSANTE", "ADORABLEMENT NAÏF"
        ],
        ult: "C'EST JEFF!"
    },
    de: {  // German
        name: "Jeff der Landhai",
        gender: "männlich",
        species: "Landhai",
        affiliation: "Keine",
        role: "Stratege",
        eyeColor: ["schwarz"],
        hairColor: ["keine"],
        hp: 250,
        dateOfOrigin: 2019,
        emoji: ["🌊", "🐟", "🦈", "😂"],
        abilities: [
            "FREUDIGER SPRITZER", "AQUA-EXPLOSION", "ES IST JEFF!", 
            "VERSTECKEN", "HEILENDE BLASE", "UNBEWUSSTE SÜßIGKEIT"
        ],
        ult: "ES IST JEFF!"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "陆地鲨杰夫",
        gender: "男性",
        species: "陆地鲨",
        affiliation: "无",
        role: "战略家",
        eyeColor: ["黑色"],
        hairColor: ["无"],
        hp: 250,
        dateOfOrigin: 2019,
        emoji: ["🌊", "🐟", "🦈", "😂"],
        abilities: [
            "欢乐水花", "水波爆发", "是杰夫！", 
            "捉迷藏", "治愈气泡", "呆萌可爱"
        ],
        ult: "是杰夫！"
    }
});

const invisibleWoman = new Person({
    en: {  // English
        name: "Invisible Woman",
        gender: "female",
        species: "Human",
        affiliation: "Fantastic 4",
        role: "Strategist",
        eyeColor: ["blue"],
        hairColor: ["blond"],
        hp: 275,
        dateOfOrigin: 1961,
        emoji: [" ", "🌫️", "🛡️", "💎"],
        abilities: [
            "ORB PROJECTION", "INVISIBLE BOUNDARY", "PSIONIC VORTEX", 
            "FORCE PHYSICS", "AGILE STRIKE", "VEILED STEP", 
            "GUARDIAN SHIELD", "COVERT ADVANCE"
        ],
        ult: "INVISIBLE BOUNDARY"
    },
    es: {  // Spanish
        name: "Mujer Invisible",
        gender: "femenino",
        species: "Humana",
        affiliation: "Los 4 Fantásticos",
        role: "Estratega",
        eyeColor: ["azul"],
        hairColor: ["rubio"],
        hp: 275,
        dateOfOrigin: 1961,
        emoji: [" ", "🌫️", "🛡️", "💎"],
        abilities: [
            "PROYECCIÓN ORB", "BARRERA INVISIBLE", "VÓRTICE PSIÓNICO", 
            "FÍSICA DE FUERZA", "ATAQUE ÁGIL", "PASO VELADO", 
            "ESCUDO GUARDIÁN", "AVANCE ENCUBIERTO"
        ],
        ult: "BARRERA INVISIBLE"
    },
    fr: {  // French
        name: "Femme Invisible",
        gender: "féminin",
        species: "Humaine",
        affiliation: "Les 4 Fantastiques",
        role: "Stratège",
        eyeColor: ["bleu"],
        hairColor: ["blond"],
        hp: 275,
        dateOfOrigin: 1961,
        emoji: [" ", "🌫️", "🛡️", "💎"],
        abilities: [
            "PROJECTION D'ORBE", "BARRIÈRE INVISIBLE", "VORTEX PSIONIQUE", 
            "PHYSIQUE DE FORCE", "FRAPPE AGILE", "PAS VOILÉ", 
            "BOUCLIER GARDIEN", "AVANCÉE CACHÉE"
        ],
        ult: "BARRIÈRE INVISIBLE"
    },
    de: {  // German
        name: "Unsichtbare Frau",
        gender: "weiblich",
        species: "Mensch",
        affiliation: "Fantastischen 4",
        role: "Stratege",
        eyeColor: ["blau"],
        hairColor: ["blond"],
        hp: 275,
        dateOfOrigin: 1961,
        emoji: [" ", "🌫️", "🛡️", "💎"],
        abilities: [
            "ORB-PROJEKTION", "UNSICHTBARE GRENZE", "PSIONISCHER WIRBEL", 
            "KRAFTPHYSIK", "AGILER SCHLAG", "VERSCHLEIERTER SCHRITT", 
            "WÄCHTERSCHILD", "GEHEIMER VORSTOß"
        ],
        ult: "UNSICHTBARE GRENZE"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "隐形女",
        gender: "女性",
        species: "人类",
        affiliation: "神奇四侠",
        role: "战略家",
        eyeColor: ["蓝色"],
        hairColor: ["金色"],
        hp: 275,
        dateOfOrigin: 1961,
        emoji: [" ", "🌫️", "🛡️", "💎"],
        abilities: [
            "能量球投射", "隐形屏障", "心灵漩涡", 
            "力量物理", "敏捷打击", "隐秘步伐", 
            "守护之盾", "秘密推进"
        ],
        ult: "隐形屏障"
    }
});

  export const characters = [
    captainAmerica,
    doctorStrange,
    groot,
    hulk,
    thor,
    magneto,
    peniParker,
    venom,
    blackPanther,
    blackWidow,
    hawkeye,
    hela,
    ironFist,
    ironMan,
    magik,
    moonKnight,
    namor,
    psylocke,
    scarletWitch,
    spiderMan,
    squirrelGirl,
    starLord,
    storm,
    punisher,
    winterSoldier,
    wolverine,
    misterFantastic,
    adamWarlock,
    rocket,
    loki, 
    lunaSnow,
    mantis,
    cloakAndDagger,
    jeffTheLandShark,
    invisibleWoman
];