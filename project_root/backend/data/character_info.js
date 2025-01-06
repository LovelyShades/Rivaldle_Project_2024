class Person {
    constructor(name, gender, species, affiliation, type, level, hp, dateOfOrigin, emoji) {
        this.name = name;
        this.gender = gender;
        this.species = species;
        this.affiliation = affiliation;
        this.type = type;
        this.level = level;
        this.hp = hp;
        this.dateOfOrigin = dateOfOrigin;
        this.emoji = emoji;
    }
}

export const characters = [
    // Vanguards
    new Person(
        "Captain America",
        "male",
        "human",
        "avengers",
        "vanguard",
        "science",
        650,
        1941,
        ["⭐", "🕰️", "🛡️", "🇺🇸"]
    ),
    new Person(
        "Doctor Strange",
        "male",
        "human",
        "avengers",
        "vanguard",
        "magic",
        650,
        1963,
        ["📖", "🌀", "✨", "🧙‍♂️"]
    ),
    new Person(
        "Groot",
        "male",
        "flora colossus",
        "guardians",
        "vanguard",
        "cosmic",
        700,
        1960,
        ["🌱", "🌌", "🌳", "🪵"]
    ),
    new Person(
        "Hulk",
        "male",
        "human",
        "avengers",
        "vanguard",
        "science",
        200,
        1962,
        ["🧪", "💥", "💪", "💚"]
    ),
    new Person(
        "Thor",
        "male",
        "asgardian",
        "avengers",
        "vanguard",
        "cosmic",
        500,
        1962,
        ["☁️", "👑", "⚡", "🔨"]
    ),
    new Person(
        "Magneto",
        "male",
        "mutant",
        "x-men",
        "vanguard",
        "mutant",
        650,
        1963,
        ["🎩", "🌀", "🧲", "👨‍🎤"]
    ),
    new Person(
        "Peni Parker",
        "female",
        "human",
        "spider-verse",
        "vanguard",
        "science",
        650,
        2014,
        ["📓", "🤖", "🕸️", "🕷️"]
    ),
    new Person(
        "Venom",
        "male",
        "symbiote",
        "none",
        "vanguard",
        "cosmic",
        650,
        1988,
        ["👄", "🧪", "👅", "🖤"]
    ),
    // Duelists
    new Person(
        "Black Panther",
        "male",
        "human",
        "avengers",
        "duelist",
        "fighting",
        300,
        1966,
        ["🌍", "👑", "🐾", "🖤"]
    ),
    new Person(
        "Black Widow",
        "female",
        "human",
        "avengers",
        "duelist",
        "fighting",
        250,
        1964,
        ["🧣", "💋", "🕸️", "🕷️"]
    ),
    new Person(
        "Hawkeye",
        "male",
        "human",
        "avengers",
        "duelist",
        "fighting",
        250,
        1964,
        ["🔍", "🎯", "🏹", "🦅"]
    ),
    new Person(
        "Hela",
        "female",
        "asgardian",
        "villain",
        "duelist",
        "magic",
        275,
        1964,
        ["🕯️", "🖤", "👑", "💀"]
    ),
    new Person(
        "Iron Fist",
        "male",
        "human",
        "defenders",
        "duelist",
        "magic",
        250,
        1974,
        ["🌀", "🔥", "👊", "⚡"]
    ),
    new Person(
        "Iron Man",
        "male",
        "human",
        "avengers",
        "duelist",
        "science",
        250,
        1963,
        ["🔧", "💡", "🤖", "🛡️"]
    ),
    new Person(
        "Magik",
        "female",
        "mutant",
        "x-men",
        "duelist",
        "magic",
        250,
        1975,
        ["🧘‍♀️", "⚔️", "✨", "🌌"]
    ),
    new Person(
        "Moon Knight",
        "male",
        "human",
        "none",
        "duelist",
        "magic",
        250,
        1975,
        ["🔮", "🌙", "🩸", "⚔️"]
    ),
    new Person(
        "Namor",
        "male",
        "atlantean",
        "defenders",
        "duelist",
        "cosmic",
        275,
        1939,
        ["🌊", "👑", "💪", "🐠"]
    ),
    new Person(
        "Psylocke",
        "female",
        "mutant",
        "x-men",
        "duelist",
        "mutant",
        250,
        1976,
        ["🎭", "🌀", "⚔️", "💜"]
    ),
    new Person(
        "Scarlet Witch",
        "female",
        "mutant",
        "avengers",
        "duelist",
        "magic",
        250,
        1964,
        ["📜", "✨", "🌀", "🧙‍♀️"]
    ),
    new Person(
        "Spider Man",
        "male",
        "human",
        "spider-verse",
        "duelist",
        "science",
        250,
        1962,
        ["🧪", "🏙️", "🕸️", "🕷️"]
    ),
    new Person(
        "Squirrel Girl",
        "female",
        "mutant",
        "none",
        "duelist",
        "mutant",
        275,
        1992,
        ["🍂", "🐿️", "💪", "😂"]
    ),
    new Person(
        "Star Lord",
        "male",
        "human",
        "guardians",
        "duelist",
        "science",
        250,
        1976,
        ["🎶", "🔫", "🌌", "😎"]
    ),
    new Person(
        "Storm",
        "female",
        "mutant",
        "x-men",
        "duelist",
        "mutant",
        250,
        1975,
        ["🌧️", "☁️", "⚡", "🌪️"]
    ),
    new Person(
        "The Punisher",
        "male",
        "human",
        "none",
        "duelist",
        "fighting",
        275,
        1974,
        ["⚖️", "💀", "🔫", "🏴‍☠️"]
    ),
    new Person(
        "Winter Soldier",
        "male",
        "human",
        "avengers",
        "duelist",
        "science",
        250,
        1941,
        ["❄️", "🔧", "🛡️", "🧑‍🎤"]
    ),
    new Person(
        "Wolverine",
        "male",
        "mutant",
        "x-men",
        "duelist",
        "mutant",
        300,
        1974,
        ["🌲", "🩸", "💪", "⚔️"]
    ),
    // Strategists
    new Person(
        "Adam Warlock",
        "male",
        "sovereign",
        "guardians",
        "strategist",
        "cosmic",
        250,
        1967,
        ["🪞", "✨", "🌌", "👑"]
    ),
    new Person(
        "Rocket",
        "male",
        "raccoon",
        "guardians",
        "strategist",
        "cosmic",
        250,
        1976,
        ["🔧", "😂", "🦝", "🔫"]
    ),
    new Person(
        "Loki",
        "male",
        "asgardian",
        "villain",
        "strategist",
        "magic",
        250,
        1949,
        ["🃏", "🔥", "👑", "🪄"]
    ),
    new Person(
        "Luna Snow",
        "female",
        "human",
        "avengers",
        "strategist",
        "magic",
        275,
        2018,
        ["❄️", "🎤", "✨", "🌙"]
    ),
    new Person(
        "Mantis",
        "female",
        "empath",
        "guardians",
        "strategist",
        "cosmic",
        275,
        1973,
        ["🌸", "😌", "👾", "🌌"]
    ),
    new Person(
        "Cloak and Dagger",
        "other",
        "mutant",
        "x-men",
        "strategist",
        "mutant",
        250,
        1982,
        ["🌘", "🔗", "⚡", "🧙‍♂️"]
    ),
    new Person(
        "Jeff the Land Shark",
        "male",
        "land shark",
        "none",
        "strategist",
        "science",
        250,
        2019,
        ["🌊", "🐟", "🦈", "😂"]
    )
];
