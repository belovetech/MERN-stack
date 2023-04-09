#!/usr/bin/env node

'use strict';

const ToCamelCase = function(text) {
    const formattedText = text.toLowerCase().trim().split('_');
    const textUpper = [];
    
    for (const [index, word] of formattedText.entries()) {
        index === 0 ? textUpper.push(word) : textUpper.push(word.replace(word[0], word[0].toUpperCase()));
    }
    return (`${textUpper.join("")}`);
}

console.log(ToCamelCase('   first_name   '));
console.log(ToCamelCase('underscore_case'));
console.log(ToCamelCase('   Some_Variable'));
console.log(ToCamelCase('calculate_AGE'));
console.log(ToCamelCase('delayed_departure_case'));



console.log(`_________CASE 2____________`);

const CamelCase = function(text) {
    const rows = text.split('\n');
    
    for (const [i, row] of rows.entries()) {
        const [first, last] = row.toLowerCase().trim().split('_');
        if (last === undefined) continue;
        const output = `${first}${last?.replace(last[0], last[0].toUpperCase())}`
        console.log(`${output.padEnd(20)} ${`✅`.repeat(i + 1)}`);
    }
}

const values = `    first_name   
   underscore_case 
   Some_Variable
   calculate_AGE
   delayed_departure
`
CamelCase(values);