const userInputString = prompt(
  "Please enter your list of flavors separated by commas.",
);

const stringArray = userInputString.split(",");

const flavors = [];
for (let i = 0; i < stringArray.length; i++) {
  console.log(i, stringArray[i]);
}

const flavorPicks = {
  strawberry: strawberry,
  vanilla: vanilla,
  coffee: coffee
}

console.log(Object.value(flavorPicks));