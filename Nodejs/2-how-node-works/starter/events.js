#!/usr/bin/node

const EventEmitter = require('events');
const http = require('http');

class Scores extends EventEmitter {
	constructor() {
		super();
	}
}
const myEmitter = new Scores();

// const myEmitter = new EventEmitter();

myEmitter.on('newGoal', () => {
	console.log("It's a goal");
});

myEmitter.on('newGoal', () => {
	console.log('Scored by Beloved!');
});

myEmitter.on('newGoal', (goal) => {
	console.log(`${goal} goals were scored!`);
});

myEmitter.emit('newGoal', 3);

////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
	console.log('Request received!');
	res.end('Request received!');
	console.log(req.url);
});

server.on('request', (req, res) => {
	console.log('Another request received!');
});

server.on('close', () => {
	console.log('Server closed!');
});

server.listen(8000, '127.0.0.1', () => {
	console.log('Waiting for request.....');
});
