#!/usr/bin/node

const fs = require('fs');

const filepath = `${__dirname}/../dev-data/data/users.json`;
const users = JSON.parse(fs.readFileSync(filepath));

// Router handler
exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
};

exports.createUser = (req, res) => {
  const user = req.body;
};
