const Potion = require('../lib/Potion');
const Character = require('./Character');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random()* 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

    // //returns an object with various player properties
    // this.getStats = function() {
    //     return {
    //         potions: this.inventory.length,
    //         health: this.health,
    //         strength: this.strength,
    //         agility: this.agility
    //     };
    // };

    // // returns the inventory array or false if empty
    // this.getInventory = function() {
    //     if (this.inventory.length) {
    //         return this.inventory;
    //     }
    //     return false;
    // };
}

// inherit prototype methods from Character here:
Player.prototype = Object.create(Character.prototype);

Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

Player.prototype.addPotion = function(potion) {
    // this will add one potion to inventory
    this.inventory.push(potion);
};

Player.prototype.usePotion = function(index) {
    // splice will remove used potion into used array
    const potion = this.getInventory().splice(index, 1)[0];

    // this will allow for which potion to use
    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
};


module.exports = Player;