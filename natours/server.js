const dotenv = require("dotenv");

// Handle UNHANDLED REJECTION
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION 🔥 shutting down.....");
  process.exit(1);
  // server.close(() => {});
});
// Handle UNCAUGHT EXCEPTION
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION 🔥 shutting down.....");
  process.exit(1);
});

dotenv.config({ path: "./config.env" });

const mongoose = require("mongoose");
const app = require("./app");

// Connect Database
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  // .connect(process.env.DATABASE_LOCAL, {
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful!"));
// .catch((err) => console.log("ERROR"));

// START SERVER
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
