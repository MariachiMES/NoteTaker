const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
const apiroutes = require("./routes/apiroutes");
const htmlRoutes = require("./routes/htmlroutes");

app.use(apiroutes);

app.use(htmlRoutes);

app.listen(PORT, function () {
  console.log("server listening on PORT ", PORT);
});
