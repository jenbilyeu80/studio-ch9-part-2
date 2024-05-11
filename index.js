const input = require("readline-sync");

let protein = ["chicken", "pork", "tofu", "beef", "fish", "beans"];
let grain = ["rice", "pasta", "corn", "potato", "quinoa", "crackers"];
let vegetable = [
  "peas",
  "green beans",
  "kale",
  "edamame",
  "broccoli",
  "asparagus",
];
let beverage = ["juice", "milk", "water", "soy milk", "soda", "tea"];
let dessert = [
  "apple",
  "banana",
  "more kale",
  "ice cream",
  "chocolate",
  "kiwi",
];
let pantry = [protein, grain, vegetable, beverage, dessert];
let userInput = 0;
while (userInput < 1 || userInput > 6) {
  userInput = input.question("How many meals would you like to create? (1-6)");
  userInput = Number(userInput);
  if (userInput >= 1 && userInput <= 6)
    for (let i = 0; i < userInput; i++) {
      let meal= [];
      for(let j = 0; j < pantry.length; j++){
        meal.push(pantry[j][i]);
      }
console.log(`I'm about to enjoy ${meal[0]} with some ${meal[1]}, ${meal[2]}, ${meal[3]}, and ${meal[4]}!`);
  for(let j = 0; j < meal.length; j++){
  if(meal[j].includes("kale")){
    console.log("Don't worry, you can have double chocolate tomorrow.");
  }
  }
    }


  
        
      

  const userLikedMeal = input.question("Did you enjoy your meal? (Y/N)");
  if (userLikedMeal === "N") {
    userInput = 0;
  }
}
