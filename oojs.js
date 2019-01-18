function Pet(name, species) {
  this.name = name;
  this.species = species;
  this.greeting = function() {
    console.log('Hi! I\'m ' + this.name + ' the ' + this.species + '. Wazzzzup!?');
  };
}

let pet1 = new Pet('Bobo', 'dog');
let pet2 = new Pet('Molly', 'penguin');

