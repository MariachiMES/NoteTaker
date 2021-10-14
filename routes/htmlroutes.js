const path = require("path");
const app = require("express").Router();

// get file req res

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Use GET and POST to read db.json * `POST /api/notes`
// should receive a new note to save on the request body, add it to the `db.json`

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
