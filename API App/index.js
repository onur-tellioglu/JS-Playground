const { application } = require("Express");
const productsRouter = require("./Routes/products");
const express = require("Express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");

const serverPort = 5000;

const server = express();

server.use(bodyParser.json());

const userName = "username";
const password = "password";
const dbName = "productsDB";

mongoose.connect(
  `mongodb+srv://${userName}:${password}@cluster0.m1ijmqd.mongodb.net/${dbName}?retryWrites=true&w=majority`,
  (e) => {
    if (e) {
      console.log(e);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

const isLoggedIn = true;

server.use((req, res, next) => {
  if (!isLoggedIn) {
    return res
      .status(401)
      .send("You are not authorized to access this resource");
  } else {
    next();
  }
});

server.get("/", (req, res) => {
  res.send("Products");
});

server.use("/products", productsRouter);

server.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});
