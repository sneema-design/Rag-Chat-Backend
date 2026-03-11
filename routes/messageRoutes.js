import express from "express";
import { createMessage, getMessageByID, getMessagesByChatId } from "../Controller/messageController.js";
const routes =express.Router();
routes.post("/",createMessage);
routes.get("/chat/:id",getMessagesByChatId)
routes.get("/:id",getMessageByID)
export default routes