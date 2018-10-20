// class is like a blueprint 
// class with constructor

class User {

  constructor(email, name) {
    this.email = email;
    this.name = name
  }

};

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');

console.log(userOne);
console.log(userTwo);