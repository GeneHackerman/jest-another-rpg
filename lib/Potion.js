// function Potion(name) {
//     this.types = ['strength', 'agility', 'health'];

//     // this will generate a random potion
//     this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

//     if (this.name === 'health') {
//         this.value = Math.floor(Math.random() * 10 + 30);
//     } else {
//         this.value = Math.floor(Math.random() * 5 + 7);
//     }
// };

// class replaces function and constructor will pass argument
// through to the class
// the result will still be the same as normal constructor function
class Potion {
    constructor(name) {
        this.types = ['strength', 'agility', 'health'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

        if (this.name === 'health') {
            this.value = Math.floor(Math.random() * 10 + 30);
        } else {
            this.value = Math.floor(Math.random() * 5 + 7);
        }
    }
}

module.exports = Potion;