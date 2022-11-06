const express = require("express");
const morgan = require("morgan");

const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");
const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");

// Create express app
const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// Build middleware
app.use((req, res, next) => {
  next();
});

app.use((req, res, next) => {
  req.requestAt = new Date().toISOString();
  next();
});

// Mounting router
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

// Handle Unhandle Routes
app.all("*", (req, res, next) => {
  // const err = new Error(`Can't find ${req.originalUrl} on this server`);
  // err.status = "fail";
  // err.statusCode = 400;
  next(new AppError(`Can't find ${req.originalUrl} on this server`), 400);
});

// ERROR MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;
