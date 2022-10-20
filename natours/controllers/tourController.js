#!/usr/bin/node

const fs = require('fs');

// serialize json  data to js object
const dirname = `${__dirname}/../dev-data/data/tours-simple.json`;
const tours = JSON.parse(fs.readFileSync(dirname));

// ROUTES HANDLERS
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestAt: req.requestAt,
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  const id = parseInt(req.params.id);
  const tour = tours.find(cur => cur.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(dirname, JSON.stringify(tours), err => {
    if (err) return console.log(err);

    res.status(201).json({
      status: 'success',
      data: {
        newTour,
      },
    });
  });
};

exports.updateTour = (req, res) => {
  const id = parseInt(req.params.id);
  const tourIndex = tours.findIndex(cur => cur.id === id);
  const tour = tours[tourIndex];

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  const updateTour = Object.assign(tour, req.body);
  tours.splice(tourIndex, 1, updateTour);

  fs.writeFile(dirname, JSON.stringify(tours), err => {
    if (err) return console.log(err);
    res.status(200).json({
      status: 'success',
      data: {
        updateTour,
      },
    });
  });
};

exports.deleteTour = (req, res) => {
  const id = parseInt(req.params.id);
  const index = tours.findIndex(cur => cur.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  tours.splice(index, 1);

  fs.writeFile(dirname, JSON.stringify(tours), err => {
    if (err) return console.log(err);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  });
};
