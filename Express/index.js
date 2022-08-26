const express = require("express");
const data = require("./data.js");

const server = express();

server.get("/", (req, res) => {
  res.send("Main page");
});
server.get("/actors", (req, res) => {
  res.status(200).json(data);
});

let nextId = 9;

server.post("/actors", (req, res) => {
  let newActor = req.body;
  newActor.id = nextId;
  nextId++;
  data.push(newActor);
  res.status(201).json(newActor);
});

server.get("/actors/:id", (req, res) => {
  const { id } = req.params;
  const actor = data.find((actor) => actor.id === parseInt(id));
  if (actor) {
    res.status(200).json(actor);
  } else {
    res.status(404).send("Actor could not found.");
  }
});

server.listen(5000, () => {
  console.log("Listening.");
});
