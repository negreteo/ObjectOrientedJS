// constructor function
function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

// prototype property 
User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in")
}

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged out")
}

function Admin(...args) {
  //console.log(args);
  User.apply(this, args);
  this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (u) {
  users = users.filter(user => {
    return user.email != u.email;
  })
};

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');
var admin = new Admin('mario@mariocorp.com', 'Mario');

var users = [userOne, userTwo, admin];

console.log(userOne);
console.log(admin);
console.log(admin.login());
console.log(users);
admin.deleteUser(users[1]);
console.log(users)