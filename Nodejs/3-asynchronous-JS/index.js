#!/usr/bin/node

const path = require('path');
const superagent = require('superagent');

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

    throw err;
  }
  return `2: READY!!! 🔥`;
};

// Returning value of asyn/ await function
(async () => {
  try {
    console.log("1: will get dog's pics");
    const x = await getDogPic();
    console.log(x);
    console.log("3: Done getting dog's pics");
  } catch (err) {
    console.log('ERROR!!!');
  }
})();

// Returning value of then/ catch function

console.log("1: will get dog's pics");
getDogPic()
  .then((x) => {
    console.log(x);
    console.log("3: Done getting dog's pics");
  })
  .catch((err) => {
    console.log(err);
  });

// Consume Promises: then/catch
readFilePro(path.join(__dirname, '/dog.txt'))
  .then((data) => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro('dog-img.txt', res.body.message);
  })
  .then(() => {
    console.log("Random dog's img saved to file 😉");
  })
  .catch((err) => {
    console.log(err);
  });
