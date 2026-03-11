import express from "express";
import { createChat, getAllChat, getChatbyId } from "../Controller/fullChatController.js";

const routes =express.Router();
routes.post("/",createChat)
routes.get("/all",getAllChat)
routes.get("/:id",getChatbyId)
export default routes;