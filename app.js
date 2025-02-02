// console.log("Hello World");

//Lab exercises HW
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    pokemon: [
        { number: 60, name: "Gasly", type: "Pioson", hp: 45, starter: false },
        { number: 19, name: "Golem", type: "Earth", hp: 39, starter: false },
        { number: 98, name: "Psyduck", type: "Water", hp: 44, starter: false },
        { number: 36, name: "Machamp", type: "Fighting", hp: 35, starter: false },
        { number: 59, name: "Arcanine", type: "Fire", hp: 90, starter: false },
        { number: 1, name: "Bulbasaur", type: "Grass/Poison", hp: 45, starter: true },
        { number: 4, name: "Charmander", type: "Fire", hp: 39, starter: true },
        { number: 7, name: "Squirtle", type: "Water", hp: 44, starter: true },
        { number: 25, name: "Pikachu", type: "Electric", hp: 35, starter: true },
    ],
  };  

  //Exercise 1 (There is no pokeman array, so i created one.)
//   console.dir(pokemon, { maxArrayLength: null });
//   console.log(game.pokemon[4].name);



  //Exercise 2
// console.log(game);

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = "Med";
// console.log(game.difficulty);
//Using dot notation

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
Solve Exercise 4 here:
*/
game.party.push(game.pokemon[6]);
// console.log(game.party);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
game.party.push(game.pokemon[1]);
game.party.push(game.pokemon[2]);
game.party.push(game.pokemon[3]);

// console.log(game.party);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
//Here is my code i could not for the life of me figure out the differnce between mine and GPT.
// for (let i = 0; i < game.gyms.length; i++) {
//   if (game.gyms[i].difficulty < 3);
//   game.gyms[i].completed = true;
// }

// console.log(game.gyms);

// Loop through each gym in the gyms array
for (let i = 0; i < game.gyms.length; i++) {
  // Check if the gym's difficulty is less than 3
  if (game.gyms[i].difficulty < 3) {
      // Set the completed property to true
      game.gyms[i].completed = true;
  }
}
// Log the updated gyms array to see the changes
// console.log(game.gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/


for (let i = 0; i < game.party.length; i++) {
  let starterPokemon = game.party[i];

  if(starterPokemon.number === 4) {
    game.party.splice(i, 1, { number: 5, name: "Charmeleon", type: "Fire", hp: 58, starter: false})
  }
}

// console.log(game.party);


/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
for (let i = 0; i < game.party.length; i++) {
  // console.log(game.party[i].name); 
}

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
for (let i = 0; i < game.pokemon.length; i++) {
  if (game.pokemon[i].starter === true) {
    // console.log(game.pokemon[i].name);
  }
  } 

  /*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
