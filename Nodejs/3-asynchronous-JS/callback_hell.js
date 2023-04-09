#!/usr/bin/node

const fs = require('fs');
const path = require('path');
const superagent = require('superagent');

fs.readFile(path.join(__dirname, '/dog.txt'), (err, data) => {
  if (err) return console.log(err.message);
  console.log(`Breed ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      if (err) return console.log(err.message);
      console.log(res.body.message);

      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        if (err) return console.log(err.message);
        console.log("Random dog's img succesfully saved!");
      });
    });
});