#!/usr/bin/env node

'use strict';

// TEST DATA 1:
// Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]

// TEST DATA 2:
// Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// Create a function 'checkDogs', which accept2 2 arrays of dog's aes ('dogsJulia' and 'dogsKate').

console.log(`_____Challenge 1______`);
const checkDogs = function (dogsJulia, dogsKate) {
  // removes first and last two cats' age in Julias' dog's data

  // const dogsJuliacorrectData = dogsJulia.slice(1, -2);
  const dogsJuliacorrectData = dogsJulia.slice();
  dogsJuliacorrectData.splice(0, 1);
  dogsJuliacorrectData.splice(-2);

  // Create dogData with Julia's corrected and Kate's data
  const dogData = dogsJuliacorrectData.concat(dogsKate);

  // check whether dog is an adult(3years+) or puppy(-3years)
  dogData.forEach(function (dogAge, i) {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('\n');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// CONVERT dogs' age to human's age and calculate its average

console.log(`\n_____Challenge 2______`);
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  const adults = humanAges.filter(age => age >= 18);

  const adultAverageAge = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  console.log(`Human age: [${humanAges}]`);
  console.log(`Adult age: [${adults}]`);

  return adultAverageAge;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

// Chaining methods
console.log(`\n_____Challenge 3______`);
const calcAverageHumanAge2 = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg3 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const avg4 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
console.log(avg3, avg4);
