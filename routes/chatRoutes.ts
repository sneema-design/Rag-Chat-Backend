import express from "express"
import { get_Answer } from "../Controller/chatController.ts";
const routes=express.Router();
routes.post("/",get_Answer);
export default routes;
