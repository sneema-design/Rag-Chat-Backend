import express from "express";
import { createChat, getAllChat, getChatbyId, getChatsByUserId } from "../Controller/fullChatController.js";
import validate from "../middleware/validation.Middleware.js";
import { fullChatSchema } from "../validations/fullChatValidation.js";
const routes =express.Router();
routes.post("/",validate(fullChatSchema),createChat)
routes.get("/all",getAllChat)
routes.get("/:id",getChatbyId)
routes.get("/user/:id",getChatsByUserId)
export default routes;