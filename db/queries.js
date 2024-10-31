const pool = require("./pool");

async function getAllMessages() {
  console.log("getAllMessages Query...");
  const { rows } = await pool.query("SELECT * FROM messages;");
  console.log("getAllMessages Query results", rows);
  return rows;
}

async function insertMessage(message) {
  await pool.query(
    "INSERT INTO messages (messageuser, messagetext, date) VALUES ($1, $2, $3)",
    [message.messageuser, message.messagetext, message.date]
  );
}
async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id=($1);", [
    id,
  ]);
  // const { rows } = await pool.query("SELECT * FROM messages WHERE id=1;");
  //   console.log("Query message: ", rows);
  return rows;
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessage,
};
