const db = require("../db/queries");
// const asyncHandler = require("express-async-handler");

async function getMessages(req, res) {
  console.log("Controller getMessages...");
  const rows = await db.getAllMessages();
  console.log("Controller getMessages", rows);
  res.render("index", { title: "Mini Message Board", messages: rows });
}
async function newMessageGet(req, res) {
  console.log("Render new message form");
  res.render("form", { title: "New Message" });
}
async function newMessagePost(req, res) {
  const message = req.body;
  message.date = new Date();
  console.log("Req.body post: ", message);
  await db.insertMessage(message);
  res.redirect("/");
}
async function openMessageGet(req, res) {
  const id = req.params.messageId;
  const message = await db.getMessage(id);
  console.log("Controller message: ", message);
  res.render("message", { title: "Message Details:", message: message[0] });
}
async function openMessagePost(req, res) {
  const id = req.params.messageId;
  console.log("Controller post Id: ", id);
}

module.exports = {
  getMessages,
  newMessageGet,
  newMessagePost,
  openMessageGet,
  openMessagePost,
};
