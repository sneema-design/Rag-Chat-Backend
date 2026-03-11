import express from "express";
import { createChat, getAllChat, getChatbyId } from "../Controller/fullChatController.js";
import validate from "../middleware/validation.Middleware.js";
import { fullChatSchema } from "../validations/fullChatValidation.js";
const routes =express.Router();
routes.post("/",validate(fullChatSchema),createChat)
routes.get("/all",getAllChat)
routes.get("/:id",getChatbyId)
export default routes;