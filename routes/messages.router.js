const express = require("express");
const messageController = require("../controllers/messages.controller");

const messagesRouter = express.Router();
messagesRouter.use((req, res, next) => {
  console.log("ip address", req.ip);
  next();
});
messagesRouter.get("/", messageController.getMessages);
messagesRouter.post("/", messageController.postMessage);

module.exports = messagesRouter;
