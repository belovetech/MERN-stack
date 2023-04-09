#!/usr/bin/node

"use strict";

const calAverage = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`No winners between the two teams`);
    }
}
// TEST 1
let avgDolphins = calAverage(44, 23, 71);
let avgKoalas = calAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

// TEST 2
avgDolphins = calAverage(85, 54, 41);
avgKoalas = calAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);