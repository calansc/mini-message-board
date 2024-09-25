const { Router } = require("express");
const path = require("path");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});
indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = indexRouter;
