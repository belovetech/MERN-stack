#!/usr/bin/env node

'use strict';

const poll = {
    question: 'What is your favourite programming?',
    option: ['0: Javascript', '1: Python', '2: Rust', '3: C'],
    // This generates [0, 0, 0, 0]
    answers: new Array(4).fill(0),
     
    registerNewAnswer() {
        const input = Number(
            prompt(`${this.question}\n ${this.option.join('\n')}\n(Write option number)`)
        );
        
        // Short circuiting 
        // typeof input === 'number' && input < this.option.length && this.answers[input]++;
        
        if (typeof input === 'number' && input < this.answers.length) {
            this.answers[input]++;
        }
        
        this.displayResults();
        this.displayResults('string');
    },
    
    displayResults(type = 'array') {
        const output = `Poll results are ${this.answers.join(', ')}`;
        type === 'array' ? console.log(this.answers) : console.log(output);
    },
};

const el = document.querySelector('.poll');
el.addEventListener('click',  poll.registerNewAnswer.bind(poll));


const test = [4, 5, 6];

poll.displayResults.call({answers: test});
poll.displayResults.call({answers: test}, 'string');
poll.displayResults.call({answers: [7, 8, 9, 2, 5]}, 'string');