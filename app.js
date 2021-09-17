///////////////////// Basic Class /////////////////////

class User {
  constructor(
    name = "JW",
    lastName = "Song",
    email = "jinwook129@gmail.con",
    password = "pas123"
  ) {
    this.username = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.username}`);
  }
  getProfile() {
    console.log(`${this.username} ${this.email} ${this.password}`);
  }
  updatePassword(newPassword, currentPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
      console.log("Password updated!");
    } else {
      console.log("Can't change password.");
    }
  }
}

const user1 = new User("Jinwook", "Song", "wlsdnr129@naver.com", "123");
const user2 = new User("Nico");

console.log(user1);
console.log(user2.username);

user1.sayHello();
user2.sayHello();

user1.updatePassword("he123adf", "132");
user1.getProfile();
user1.updatePassword("he123adf", "123");
user1.getProfile();

///////////////////// Extending Class /////////////////////

class Admin extends User {
  deleteWebsite() {
    console.log("Deleting the whole website...");
  }
}

const admin1 = new Admin();

admin1.deleteWebsite();

console.log(admin1.username);
