var userOne = {
  email: 'ryu@ninjas.com',
  name: 'Ryu',
  login() {
    console.log(this.email, ' has logged in');
  },
  logout() {
    console.log(this.email, ' has logged out');
  }
}

userOne.name = 'Yoshi';
userOne['name'] = 'Mario';

var prop = 'email';

console.log(userOne[prop]);

userOne.age = 25;
console.log(userOne);

userOne.LogInfo = function () {};