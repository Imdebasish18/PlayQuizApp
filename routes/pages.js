const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.html");
});
router.get("/home", (req, res) => {
  res.render("home");
});
router.get("/register", (req, res) => {
  res.render("RegisterForm", { message: null });
});

router.get("/login", (req, res) => {
  res.render("LoginForm", { message1: null, message2: null });
});

module.exports = router;
