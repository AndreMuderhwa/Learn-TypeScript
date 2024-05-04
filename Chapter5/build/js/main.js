"use strict";
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello i'm ${this.age}`;
    }
}
const Andrew = new Coder("Andrew", "zouk", 25, "TypeScript");
// console.log(Andrew.getAge())
const Gla = new Coder("Andrew", "zouk", 25);
// console.log(Gla.getAge())
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Lydia = new WebDev("Asus zenbook 16X", "Lydia", "zouk", 24);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Chrison = new Guitarist("Chrison", "guitar");
console.log(Chrison.play("strums"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
//console.log(Peeps.count)
// console.log(Amy.id)
//------------------------------------------------------------------------------------------------------------------
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Parameter is not a string array");
    }
}
const mybands = new Bands();
mybands.data = ['Hello', 'Hi', 'Coucou'];
console.log(mybands.data);
mybands.data = [...mybands.data, 'Salut', 'bonjour', 'bonsoir'];
console.log(mybands.data);
