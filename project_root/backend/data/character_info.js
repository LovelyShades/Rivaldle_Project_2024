class Person {
    constructor(name, gender, species, affiliation, type, level, hp, dateOfOrigin) {
        this.name = name;
        this.gender = gender;
        this.species = species;
        this.affiliation = affiliation;
        this.type = type;
        this.level = level;
        this.hp = hp;
        this.dateOfOrigin = dateOfOrigin;
    }
}

// Vanguards
const CaptainAmerica = new Person("Captain America", "male", "human", "avengers", "vanguard", "science", 650, 1941);
const DoctorStrange = new Person("Doctor Strange", "male", "human", "avengers", "vanguard", "magic", 650, 1963);
const Groot = new Person("Groot", "male", "flora colossus", "guardians", "vanguard", "cosmic", 700, 1960);
const Hulk = new Person("Hulk", "male", "human", "avengers", "vanguard", "science", 200, 1962);
const Thor = new Person("Thor", "male", "asgardian", "avengers", "vanguard", "cosmic", 500, 1962);
const Magneto = new Person("Magneto", "male", "mutant", "x-men", "vanguard", "mutant", 650, 1963);
const PeniParker = new Person("Peni Parker", "female", "human", "spider-verse", "vanguard", "science", 650, 2014);
const Venom = new Person("Venom", "male", "symbiote", "none", "vanguard", "cosmic", 650, 1988);

// Duelists
const BlackPanther = new Person("Black Panther", "male", "human", "avengers", "duelist", "fighting", 300, 1966);
const BlackWidow = new Person("Black Widow", "female", "human", "avengers", "duelist", "fighting", 250, 1964);
const Hawkeye = new Person("Hawkeye", "male", "human", "avengers", "duelist", "fighting", 250, 1964);
const Hela = new Person("Hela", "female", "asgardian", "villain", "duelist", "magic", 275, 1964);
const IronFist = new Person("Iron Fist", "male", "human", "defenders", "duelist", "magic", 250, 1974);
const IronMan = new Person("Iron Man", "male", "human", "avengers", "duelist", "science", 250, 1963);
const Magik = new Person("Magik", "female", "mutant", "x-men", "duelist", "magic", 250, 1975);
const MoonKnight = new Person("Moon Knight", "male", "human", "none", "duelist", "magic", 250, 1975);
const Namor = new Person("Namor", "male", "atlantean", "defenders", "duelist", "cosmic", 275, 1939);
const Psylocke = new Person("Psylocke", "female", "mutant", "x-men", "duelist", "mutant", 250, 1976);
const ScarletWitch = new Person("Scarlet Witch", "female", "mutant", "avengers", "duelist", "magic", 250, 1964);
const SpiderMan = new Person("Spider Man", "male", "human", "spider-verse", "duelist", "science", 250, 1962);
const SquirrelGirl = new Person("Squirrel Girl", "male", "mutant", "none", "duelist", "mutant", 275, 1992);
const StarLord = new Person("Star Lord", "male", "human", "guardians", "duelist", "science", 250, 1976);
const Storm = new Person("Storm", "female", "mutant", "x-men", "duelist", "mutant", 250, 1975);
const ThePunisher = new Person("The Punisher", "male", "human", "none", "duelist", "fighting", 275, 1974);
const WinterSoldier = new Person("Winter Soldier", "male", "human", "avengers", "duelist", "science", 250, 1941);
const Wolverine = new Person("Wolverine", "male", "mutant", "x-men", "duelist", "mutant", 300, 1974);

// Strategists
const AdamWarlock = new Person("Adam Warlock", "male", "sovereign", "guardians", "strategist", "cosmic", 250, 1967);
const CloakAndDagger = new Person("Cloak and Dagger", "other", "mutant", "x-men", "strategist", "mutant", 250, 1982);
const JeffTheLandShark = new Person("Jeff the Land Shark", "male", "land shark", "none", "strategist", "science", 250, 2019);
const Loki = new Person("Loki", "male", "asgardian", "villain", "strategist", "magic", 250, 1949);
const LunaSnow = new Person("Luna Snow", "female", "human", "avengers", "strategist", "magic", 275, 2018);
const Mantis = new Person("Mantis", "female", "empath", "guardians", "strategist", "cosmic", 275, 1973);
const Rocket = new Person("Rocket", "male", "raccoon", "guardians", "strategist", "cosmic", 250, 1976);

// Export array
export const characters = [
    CaptainAmerica,
    DoctorStrange,
    Groot,
    Hulk,
    Thor,
    Magneto,
    PeniParker,
    Venom,
    BlackPanther,
    BlackWidow,
    Hawkeye,
    Hela,
    IronFist,
    IronMan,
    Magik,
    MoonKnight,
    Namor,
    Psylocke,
    ScarletWitch,
    SpiderMan,
    SquirrelGirl,
    StarLord,
    Storm,
    ThePunisher,
    WinterSoldier,
    Wolverine,
    AdamWarlock,
    CloakAndDagger,
    JeffTheLandShark,
    Loki,
    LunaSnow,
    Mantis,
    Rocket,
];
