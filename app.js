require("dotenv").config();
const express = require('express');
const app = express();
const morgan =  require('morgan');
const bodyParser = require("body-parser");
const path    = require("path");

//internal routes
const bookRoutes   = require('./routes/bookRoutes');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use('/public', express.static(path.resolve(__dirname, 'public/')));

//mapping external path to internal route
app.use('/book-api/books', bookRoutes);

//health check api
app.get("/ping", (req, res, next) => {
  var obj = {};
  obj.status = "ok";
  obj.envname = process.env.ENVIRONMENT_NAME;
  obj.region = process.env.REGION_NAME;
  res.json(obj);
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;