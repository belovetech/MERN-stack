#!/usr/bin/node

const app = require('./app');

// START SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
