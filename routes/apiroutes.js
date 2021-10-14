const fs = require("fs");
let parsedNotes = require("../db/db.json");
const app = require("express").Router();

app.get("/api/notes", function (req, res) {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    parsedNotes = JSON.parse(data);
    res.send(parsedNotes);
  });
});

app.post("/api/notes", function (req, res) {
  const userNotes = req.body;

  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    parsedNotes = JSON.parse(data);
    parsedNotes.push(userNotes);
    let number = 1;
    parsedNotes.forEach((note, index) => {
      note.id = number;
      number++;
      return parsedNotes;
    });
    console.log(parsedNotes);

    stringData = JSON.stringify(parsedNotes);

    fs.writeFile("./db/db.json", stringData, (err, data) => {
      if (err) throw err;
    });
  });
  res.send("Thank you for your note!");
});
app.delete("/api/notes/:id", function (req, res) {
  const deleteNote = req.params.id;
  console.log(deleteNote);

  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    parsedNotes = JSON.parse(data);

    for (let i = 0; i < parsedNotes.length; i++) {
      if (parsedNotes[i].id === Number(deleteNote)) {
        parsedNotes.splice([i], 1);
      }
    }
    console.log(parsedNotes);
    stringData = JSON.stringify(parsedNotes);

    fs.writeFile("./db/db.json", stringData, (err, data) => {
      if (err) throw err;
    });
  });
  res.status(204).send();
});

module.exports = app;
