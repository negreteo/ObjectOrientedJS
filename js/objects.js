class User {

  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0
  }

  login() {
    console.log(this.email, 'just logged in');
    return this;
  }
  logout() {
    console.log(this.email, 'has logged out');
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, 'score is now', this.score);
    return this; // return instance of the object, required for chaining
  }
}


var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');

userOne.login().updateScore().updateScore().logout();