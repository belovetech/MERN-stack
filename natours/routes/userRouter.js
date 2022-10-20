#!/usr/bin/node

const express = require('express');
const fs = require('fs');

const filepath = `${__dirname}/../dev-data/data/users.json`;
const users = JSON.parse(fs.readFileSync(filepath));

// Router handler
const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
};

const router = express.Router();
router.route('/').get(getAllUsers);

// .post(createUser);
// router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
