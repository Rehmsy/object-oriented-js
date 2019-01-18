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
    let string = this.name.first + ' ' + this.name.last + ' is a ' + this.mood + ' ' + this.breed + '. ' + this.name.first + ' enjoys ';

    if(this.hobbies.length === 1) {
      string += this.hobbies[0] + '.';
    } else if(this.hobbies.length === 2) {
      string += this.hobbies[0] + ' and ' + this.hobbies[1] + '.';
    } else {
      for(let i = 0; i < this.hobbies.length; i++) {
        if(i === this.hobbies.length - 1) {
          string += 'and ' + this.hobbies[i] + '.';
        } else {
          string += this.hobbies[i] + ', ';
        }
      }
    }
    console.log(string);
  };
  this.greeting = function() {
    console.log('Hi! I\'m ' + this.name.first + ' ' + this.name.last + '. Wazzzzup!?');
  };
}

let pet1 = new Pet('Birdtrude', 'Stein', 'bird', 'Starling', 'happy', ['singing', 'speaking', 'playing bells'], 'broccoli');
let pet2 = new Pet('Milo', 'Rehmer', 'cat', 'Grey Tabby', 'playful', ['running', 'jumping', 'cuddling'], 'expensive Urinary SO Cat Food');