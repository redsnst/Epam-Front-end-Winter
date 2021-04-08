class Entity {
    constructor(name) {
        this.name = name;
    }
};

class Box extends Entity {
    stuff = [];
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    addStuff(newStuff) {
        this.stuff.push(newStuff);
    }

    removeStuff(newStuff) {
        const index = this.stuff.findIndex(n => n.id === newStuff.id);
        if (index !== -1) {
            this.stuff.splice(index, 1);
        }
    }

    printInfo() {
        console.log(`This box have ${this.stuff.length} stuff's`)
        this.stuff.forEach(i => i.printInfo())
    }
};

class Stuff extends Entity {
    constructor(name, count, id) {
        super(name);
        this.count = count;
        this.id = id
    }

    printInfo() {
        console.log(`Stuff: ${this.name} Count: ${this.count}`);
    }

};

class User extends Entity {
    box = [];
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    addBox(newBox) {
        this.box.push(newBox);
    }
    removeBox(newBox) {
        const index = this.box.findIndex(n => n.id === newBox.id);
        if (index !== -1) {
            this.box.splice(index, 1);
        }
    }

    printInfo() {
        console.log(`User: ${this.name} have ${this.box.length} box`);
        this.box.map(i => i.printInfo());
    }
};
let stuffId = 0;
let boxId = 0;

let volodia = new User("Volodia", 23);
let car = new Stuff("car", 1, stuffId);
let firstBox = new Box("firstBox", boxId);
let toy = new Stuff("toy", 3, ++stuffId);

firstBox.addStuff(car);
firstBox.addStuff(toy);
volodia.addBox(firstBox);
volodia.printInfo();
console.log(volodia);
firstBox.removeStuff(car);
console.log(volodia);
volodia.printInfo();