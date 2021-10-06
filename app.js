const friendsAsis = ["nico", "lynn", "dal", "mark"];

const friendsTobe = Array.of("nico", "lynn", "dal", "mark");

console.log(friendsAsis);
console.log(friendsTobe);

const getarray = document.querySelectorAll("button");

console.log(getarray);

const buttonclass = document.getElementsByClassName("btn");

console.log(buttonclass);

Array.from(buttonclass).forEach((buttonclass) => {
  buttonclass.addEventListener("click", () =>
    console.log("i have been clicked")
  );
});

buttonclass?.forEach((button) =>
  button.addEventListener("click", () => console.log("clicked"))
);
