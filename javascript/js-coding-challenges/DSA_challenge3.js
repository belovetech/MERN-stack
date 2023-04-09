#!/usr/bin/env node

'use strict';

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// console.log(gameEvents);

// Create an array events (no duplicates)
const events = new Set(gameEvents.values());
console.log(events);

// Remove minute 64 from gameEvents
gameEvents.delete(64);
// console.log(gameEvents);

// print to the console
console.log(`
An event happenend, on average of every ${90 / gameEvents.size} minutes
`);

// Loop over the gameEvents
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND'
   console.log(`[${half} HALF] ${min}: ${event}`);
}
