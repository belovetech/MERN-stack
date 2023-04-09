// const fs = require("fs");
const User = require("./../models/userModel");

// const filepath = `${__dirname}/../dev-data/data/users.json`;
// const users = JSON.parse(fs.readFileSync(filepath));

// Router handler
exports.getAllUsers = (req, res) => {
  const users = User.find();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
};

exports.createUser = (req, res) => {
  const user = req.body;
  // Object.assign();

  res.status(201).json({
    status: success,
    data: {
      user,
    },
  });
};
