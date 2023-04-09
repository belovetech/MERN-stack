#!/usr/bin/env node
'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby',  'Hummels', 'Lewandowski', 'Hummels', 'Lewandowski'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
 
};

// Loop over the game.scored
for (const [goal, playerName] of  game.scored.entries()) {
  console.log(`Goal ${goal+1}: ${playerName}`);
}

// Calculate the average odds
const gameOdds = Object.values(game.odds);
const calcOddAverage = function() {
  let sum = 0;
  for (const odd of gameOdds) sum += odd;
  console.log(`Average odd: ${sum / gameOdds.length}`);
}

calcOddAverage();

// Print the 3 odds
for (const [team, odds] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odds}`);
}

//  COMING BACK!!!!
// Create a scorer object
let scorers = {};

for (const playerName of game.scored) {
  // score += playerName in game.scored.keys() ? 1 : 0;
  // game.scored.includes(playerName) ? score + 1 : score;
  
  let score = 0;
  scorers[playerName] = score;
}
// console.log(scorers);
