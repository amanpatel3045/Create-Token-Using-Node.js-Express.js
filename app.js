const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const secretKey = "secretkey";
app.use(express.json());
const PORT = 5000;
app.get("/", (req, res) => {
  res.send("WELCOME TO HOME PAGE");
});

app.post("/login", (req, res) => {
  const user = {
    id: 1,
    username: "aman",
    email: "amanpatel3045@gmail.com",
  };
  jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
    res.json({
      token,
    });
  });
});

app.listen(PORT, (req, res) => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
