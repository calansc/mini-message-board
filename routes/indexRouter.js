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
// const messages = require("../models/messages.js");

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

indexRouter.get("/message/:messageId", (req, res) => {
  console.log(req.params.messageId);
  res.render("message", {
    title: "Message Details",
    messages: messages,
    messageId: req.params.messageId,
  });
});

indexRouter.get("/", (req, res) => {
  console.log(messages);
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

// module.exports = { indexRouter, messages };
module.exports = indexRouter;
