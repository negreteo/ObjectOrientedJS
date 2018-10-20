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

// admin inherits user
class Admin extends User {
  deleteUser(user) {
    users = users.filter(u => {
      return u.email != user.email;
    })
  }
}


var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');

var admin = new Admin('mario@mariocorp.com', 'Mario');

var users = [userOne, userTwo, admin]

//user.deleteUser(userOne); // will not work
admin.deleteUser(userOne);
console.log(users);