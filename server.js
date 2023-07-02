const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res, next) {
  res.sendFile(__dirname + "/public/index.html");
});

let counter = 0;

io.on("connection", function (socket) {
  console.log("client connected...");

  socket.emit("updateCounter", counter);

  socket.on("chat message", function (msg) {
    console.log("Received message:", msg);
    io.emit("chat message", msg);
  });
  socket.on("new message", function (msg) {
    console.log("Received message:", msg.Message);
    io.emit("new message", msg);
  });

  socket.on("incrementCounter", function () {
    counter++;

    io.emit("updateCounter", counter);
  });

  socket.on("disconnect", function () {
    console.log("client disabled...");
  });
});

server.listen(5500, function () {
  console.log("Server running on port 5500");
});
