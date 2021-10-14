const express = require("express");
const path = require("path");
const db = require("./db/db.json");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => res.send("public/assets/index.html"));

app.get("/assets", (req, res) =>
  res.sendFile(path.join(__dirname, "assets/notes.html"))
);

app.get("/assets", (req, res) =>
  res.sendFile(path.join(__dirname, "assets/notes.html"))
);

app.get("/api?terms/:term", (req, res) => {
  const requestedTerm = req.params.term.toLowerCase();
});

for (let i = 0; i < requestedTerm.length; i++) {
  if (requestedTerm === requestedTerm[i].term.toLowerCase()) {
    return res.json(requestedTerm[i]);
  }
}
app.listen(PORT, () =>
  console.log(`Local Server Running at http://localhost:${PORT}`)
);
