function Pet(first, last, species, breed, mood, hobbies, snackInterests) {
  this.name = {
    'first': first,
    'last' : last
  };
  this.species = species;
  this.breed = breed;
  this.mood = mood;
  this.hobbies = hobbies;
  this.snackInterests = snackInterests;
  this.bio = function() {
    console.log(this.name.first + ' ' + this.name.last + ' is a ' + this.mood + ' ' + this.breed + ' who loves ' + this.hobbies[0] + ' and eating ' + this.snackInterests[0] + '.');
  };
  this.greeting = function() {
    console.log('Hi! I\'m ' + this.name.first + ' ' + this.name.last + '. Wazzzzup!?');
  };
}

let pet1 = new Pet('Birdtrude', 'Stein', 'bird', 'Starling', 'happy', ['singing', 'speaking', 'playing bells'], ['brocolli', 'dry mix']);
let pet2 = new Pet('Milo', 'Rehmer', 'cat', 'Grey Tabby', 'playful', ['running', 'jumping', 'cuddling'], ['expensive Urinary SO Cat Food', 'yarn']);