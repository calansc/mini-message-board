const { Router } = require("express");
const path = require("path");
const {
  getMessages,
  newMessageGet,
  newMessagePost,
  openMessageGet,
  openMessagePost,
} = require("../controllers/messageController");

const indexRouter = Router();

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
// ];

indexRouter.get("/new", (req, res) => {
  newMessageGet(req, res);
});
indexRouter.post("/new", (req, res) => {
  newMessagePost(req, res);
});
indexRouter.get("/message/:messageId", (req, res) => {
  console.log("Message id: ", req.params.messageId);
  openMessageGet(req, res);
});
indexRouter.post("/message/:messageId", (req, res) => {
  console.log("Message post :");
  openMessagePost(req, res);
});

// indexRouter.get("/message/:messageId", (req, res) => {
//   console.log(req.params.messageId);
//   res.render("message", {
//     title: "Message Details",
//     messages: messages,
//     messageId: req.params.messageId,
//   });
// });

indexRouter.get("/", (req, res) => {
  console.log("Index Router Call");
  getMessages(req, res);
});

// module.exports = { indexRouter, messages };
module.exports = indexRouter;
