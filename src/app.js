const express = require("express");

const app = express();

app.use(express.json());

app.use(
  "/api/v1/auth",
  require("./routes/authRoutes")
);

app.get("/", (req, res) => {
   res.send("API Running");
});

module.exports = app;