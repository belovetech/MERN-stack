#!/usr/bin/node

const fs = require('fs');
const path = require('path');
const superagent = require('superagent');

// CALLBACK HELL
// fs.readFile(path.join(__dirname, '/dog.txt'), (err, data) => {
//   if (err) return console.log(err.message);
//   console.log(`Breed ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       if (err) return console.log(err.message);
//       console.log(res.body.message);

//       fs.writeFile('dog-img.txt', res.body.message, (err) => {
//         if (err) return console.log(err.message);
//         console.log("Random dog's img succesfully saved!");
//       });
//     });
// });

// PROMISES

// Build promises
const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('Could not find the file 😄');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('Could not write to file 😄');
      resolve('Success');
    });
  });
};

// Consume Promises: async/await
const getDogPic = async () => {
  try {
    const data = await readFilePro(path.join(__dirname, '/dog.txt'));
    console.log(`Breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);

    await writeFilePro('dog-img.txt', res.body.message);
    console.log("Random dog's img saved to file 😉");
  } catch (err) {
    console.log(err);
  }
};

getDogPic();

/*
// Consume Promises: then/catch
readFilePro(path.join(__dirname, '/dog.txt'))
  .then(data => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then(res => {
    console.log(res.body.message);
    return writeFilePro('dog-img.txt', res.body.message);
  })
  .then(() => {
    console.log("Random dog's img saved to file 😉");
  })
  .catch(err => {
    console.log(err);
  });
*/
