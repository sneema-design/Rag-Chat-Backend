const db = require("../models/index.cjs");
const { throwError } = require("../utils/error");

const { Chat, Message } = db;

const createChat = async (data) => {
  const chat = await Chat.create(data);
  return chat;
};
const getAllChat = async () => {
  const chat = await Chat.findAll();
  if (chat.length === 0) {
    throwError("no chat exist", 404);
  }
  return chat;
};
const getChatbyId = async (id) => {
  const chat = await Chat.findByPk(id, {
    include: [{ model: Message, as: "messages" }],
  });
  if (!chat) {
    throwError("no chat exist", 404);
  }
  return chat;
};
const getChatsByUserId=async(id)=>{
    const chat=await Chat.findAll({where:{
        userId:id
    }})
    if (!chat.length) {
    throwError("no chat exist", 404);
  }
  return chat;
}
module.exports = {
  createChat,
  getAllChat,
  getChatbyId,
  getChatsByUserId
};
