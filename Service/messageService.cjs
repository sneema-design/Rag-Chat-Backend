const db = require("../models/index.cjs");

const { Chat, Message } = db;

const createMessage = async (data) => {
  const message = await Message.create(data);
  return message;
};
const getMessagesByChatId = async (id) => {
  const messages = await Message.findAll({
    where: {
      chatId: id,
    },
    order: [["id", "ASC"]],
  });
  if (messages.length === 0) {
    throwError("no message exist for this Chat", 404);
  }
  return messages;
};
const getMessageByID = async (id) => {
  const message = await Message.findByPk(id);
  if (!message) {
    throwError("no message exist for this Id", 404);
  }
  return message;
};
module.exports = {
  createMessage,
  getMessagesByChatId,
  getMessageByID,
};
