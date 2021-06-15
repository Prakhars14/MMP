const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./users.js");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://MMP:MMP123@cluster0.fdebt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
app.use("/", userRoutes);
//Express will serve up production assets(main.js, main.css)
app.use(express.static("client/build"));
//Express will serve up index.html file if unrecognized route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
app.listen(8080, function () {
  console.log("Server started");
});
