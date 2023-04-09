#!/usr/bin/node

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
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
 
};

// Create player for the two teams
const [player1, player2] = game.players;

// Create gk and fieldPlayers for team1
const [gk, ...fieldPlayers] = player1;

// Create all players of team1 and team2
const allPlayers = [...player1, ...player2];

// Create finalPlayer for the team1
const finalPlayers = [...player1, "Thiago", "Coutinho", "Perisic"];

// Create odds for team1, draw and team2
// const {team1, x:draw, team2} = game.odds;
const {odds: {team1, x:draw, team2}} = game;

// create printGoals method along with the number of goals
const printGoals = function(...players) {
    for(let i = 0; i < players.length; i++) {
        console.log(`${players[i]}`);
    }
    console.log(`${players.length} goals were scored`);
  }
  
printGoals("Davies", "Muller", "Lewandowski", "kimmich");
console.log("_____GOALS____");
printGoals(...game.scored);

// Determine winner based on team with lowest odd
team1 < team2 && console.log("Team 1 is likely to win.");
team1 > team2 && console.log("Team 2 is likely to win.");