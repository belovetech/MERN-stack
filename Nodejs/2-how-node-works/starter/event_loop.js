#!/usr/bin/node

const fs = require('fs');
const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => console.log('Timer 1 finished!'), 0);
setImmediate(() => console.log('Immediate 1 finished!'));

start = Date.now();

fs.readFile('test-file.txt', () => {
	console.log('I/O finsihed');
	console.log('____________');

	setTimeout(() => console.log('Timer 2 finished!'), 0);
	setTimeout(() => console.log('Timer 3 finished!'), 3000);
	setImmediate(() => console.log('Immediate 1 finished!'));
	process.nextTick(() => console.log('process.nextTick'));

	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
		console.log(Date.now() - start, 'password encrypted!');
	});
	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
		console.log(Date.now() - start, 'password encrypted!');
	});
	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
		console.log(Date.now() - start, 'password encrypted!');
	});
	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
		console.log(Date.now() - start, 'password encrypted!');
	});
});

console.log('Top-level code');
