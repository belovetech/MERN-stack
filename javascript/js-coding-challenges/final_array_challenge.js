#!/usr/bin/env node

'use strict';

// TEST DATA
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// CHALLENGE 1: Calculate recommended food portion
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

// CHALLENGE 2: Find Sarah's dog
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(
  `Sarah's dog eating too ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'much!' : 'little!'
  }`
);

// CHALLENGE 3: find ownerEatTooMuch and ownerEatTooLittle
const ownerEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownerEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownerEatTooMuch);
console.log(ownerEatTooLittle);

// CHALLENGE 4: Print to the console
console.log(`${ownerEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownerEatTooLittle.join(' and ')}'s dogs eat too little!`);

// CHALLENGE 5: Exactly Recommended food
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// CHALLENGE 6: Check if any dogs eating OKAY FOOD
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// CHALLENGE 7: Create array of dog eating OKAY FOOD
console.log(dogs.filter(checkEatingOkay));

// CHALLENGE 8: Create Shallow copy of dogs and sort
const sortedDog = dogs
  .slice()
  .map(dog => dog.recommendedFood)
  .sort((a, b) => a - b);

console.log(dogs);
console.log(sortedDog);
