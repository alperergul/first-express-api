const path = require("path");

function getMessages(req, res) {
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  // );

  res.render("messages", {
    title: "Messages to my Friends!",
    friend: "Elon Musk",
  });

  // res.send("<ul><li>Hello my friend! </li></ul>");
}

function postMessage(req, res) {
  console.log("Updaing messages....");
}

module.exports = {
  getMessages,
  postMessage,
};
