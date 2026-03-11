import * as MessageService from "../Service/messageService.cjs";

export const createMessage = async (req, res) => {
  try {
    const data = req.body;
    const message = await MessageService.createMessage(data);
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getMessagesByChatId = async (req, res) => {
  try {
    const { id } = req.params;
    const messages = await MessageService.getMessagesByChatId(id);
    res.status(200).json(messages);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getMessageByID = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await MessageService.getMessageByID(id);
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
