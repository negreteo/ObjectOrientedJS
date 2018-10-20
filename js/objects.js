class User {

  constructor(email, name) {
    this.email = email;
    this.name = name;
  }

  login() {
    console.log(this.email, 'just logged in');
  }
  logout() {
    console.log(this.email, 'has logged out');
  }

};

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');

userOne.login();
userTwo.logout();