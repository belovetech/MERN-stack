#!/usr/bin/node

// console.log(arguments);
// console.log(require('module').wrapper);

// module.exports
const calc1 = require('./test_module-1');
const C = new calc1();
console.log(C.add(2, 5));

// exports
// const calc2 = require('./test_module-2');
const { add, subtract, multiply, divide } = require('./test_module-2');

console.log(multiply(2, 5));

// Caching
require('./test_module-3')();
require('./test_module-3')();
require('./test_module-3')();
