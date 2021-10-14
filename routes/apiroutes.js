const fs = require("fs");
let notes = require(".Develop/db/db.json");
const app = require("express").Router();

app.get("/api/notes", function (req, res) {
  notes = fs.readFileSync(".Develop/db/db.json");
  const parsedNotes = JSON.parse(notes);
  console.log("get", parsedNotes);
  res.json(parsedNotes);
});

app.post("/api/notes", function (req, res) {
  const parsedNotes = JSON.parse(notes);

  let newNote = {
    id: Math.floor(Math.random() * 1000),
    title: req.body.title,
    next: req.body.text,
  };
  parsedNotes.push(newNote);

  fs.writeFileSync(
    ".Develop/db/db.json",
    JSON.stringify(parsedNotes),
    function (err, data) {
      if (err) throw err;
    }
  );

  console.log("post", parsedNotes);
  res.json(parsedNotes);
});

app.delete("/api/notes/:id", function (req, res) {
  const parsedNotes = JSON.parse(notes);
  let updatedNotes = [];
  for (let i = 0; i > parsedNotes.length; i++) {
    if (parsedNotes[i] != req.params.id) {
      updatedNotes.push(parsedNotes[i]);
    }
  }
  parsedNotes = updatedNotes;

  fs.writeFileSync(
    ".Develop/db/db.json",
    JSON.stringify(parsedNotes),
    function (err, data) {
      if (err) throw err;
    }
  );

  console.log("delete", parsedNotes);
  res.json(parsedNotes);
});

module.exports = app;
