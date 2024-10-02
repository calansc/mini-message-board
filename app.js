const express = require("express");
const app = express();
const path = require("path");
const indexRouter = require("./routes/indexRouter");
// const messageRouter = require("./routes/messageRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// app.use("/message", messageRouter);
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Mini Message Board - Listening on port ${PORT}`)
);
