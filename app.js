const settings = {
  color: {
    chosen_color: "dark",
  },
};

const {
  color: { chosen_color = "light" },
} = settings;

console.log(chosen_color);

const chosenColor = settings.color.chosen_color || "light";
console.log(chosenColor);

const {
  color: { chosen_color2: chosenColor2 = "light" },
} = settings;
console.log(chosenColor2);

let chosenColor3 = "blue";
console.log(chosenColor3);

({
  color: { chosen_color: chosenColor3 = "lightblue" },
} = settings);

console.log(chosenColor3);
