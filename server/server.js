const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const books = require("./books.js").books;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/books", (req, res, next) => {
  console.log("Inside GET");
  res.status(200).send(books);
});

app.post("/add-book", (req, res, next) => {
  console.log("Inside POST");
  books.push(req.body);
  res.status(200).send(books);
});

app.listen(3005, () => {
  console.log("App is listening!");
  //   console.log(books);
});
