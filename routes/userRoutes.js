import express from "express"
import { createUser } from "../Controller/userController.js";
console.log("userRoutes loaded");
const routes=express.Router();
routes.post("/",createUser)

export default routes;