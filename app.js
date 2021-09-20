///////////////////// Basic Class /////////////////////

class User {
  constructor({ username, lastName, email, password }) {
    this.username = username;
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

const user1 = new User({
  username: "Jinwook",
  lastName: "Song",
  email: "wlsdnr129@naver.com",
  password: "123",
});

user1.updatePassword("he123adf", "132");
user1.getProfile();
user1.updatePassword("he123adf", "123");
user1.getProfile();

///////////////////// Extending Class /////////////////////

class Admin extends User {
  constructor({ username, lastName, email, password, superAdmin, isActive }) {
    // call the User constructure
    super({ username, lastName, email, password });
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }
  deleteWebsite() {
    console.log("Deleting the whole website...");
  }
}

const admin1 = new Admin({
  username: "Jinwook",
  lastName: "Song",
  email: "wlsdnr129@naver.com",
  password: "123",
  superAdmin: true,
  isActive: true,
});

admin1.deleteWebsite();
