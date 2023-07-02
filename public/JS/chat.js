var socket = io();
var user_id = String(Math.random());
console.log(Math.random());
socket.on("new message", function (msg) {
  console.log("Received message:", msg);
  if (msg.sender == user_id) {
    var item = document.createElement("li");
    item.classList.add("right-massege");
    item.textContent = msg.Message + "-";
    document.getElementById("chat-ul").appendChild(item);
  } else {
    var item = document.createElement("li");
    item.classList.add("left-massege");
    item.textContent = "-" + msg.Message;
    document.getElementById("chat-ul").appendChild(item);
  }
});
function buttonClicked() {
  var chat_value = document.getElementById("chat").value;
  socket.emit("new message", { Message: chat_value, sender: user_id });
  document.getElementById("chat").value = " ";
}
