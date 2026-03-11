import express from "express";
import { createMessage, getMessageByID, getMessagesByChatId } from "../Controller/messageController.js";
import validate from "../middleware/validation.Middleware.js";
import { createMessageSchema } from "../validations/messageValidation.js";
const routes =express.Router();
routes.post("/",validate(createMessageSchema),createMessage);
routes.get("/chat/:id",getMessagesByChatId)
routes.get("/:id",getMessageByID)
export default routes