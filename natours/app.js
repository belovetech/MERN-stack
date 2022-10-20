#!/usr/bin/node

const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');

// Create express app
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));

// Build middleware
app.use((req, res, next) => {
  console.log('Hello from middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestAt = new Date().toISOString();
  next();
});

// Mounting router
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
