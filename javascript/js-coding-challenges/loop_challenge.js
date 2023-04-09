#!/usr/bin/node

"use strict";

const calcAverage = arr => {
    let sum = 0, average = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    average =  sum / arr.length;
    return (average);
}

const arr = [23, 56, 78, 8, 23, 67, 9];
const average = calcAverage(arr);
console.log(average);