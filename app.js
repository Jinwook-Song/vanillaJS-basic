const nico = {
  name: "Nico",
  age: 24,
  addYaer: () => {
    this.age++;
  },
  addYaerFuncion() {
    this.age++;
  },
};

console.log(nico.age); // 24
nico.addYaer();
nico.addYaer();
console.log(nico.age); // 24
nico.addYaerFuncion();
nico.addYaerFuncion();
console.log(nico.age); // 26
