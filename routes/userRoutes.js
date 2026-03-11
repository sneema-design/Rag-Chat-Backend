import express from "express"
import { createUser, login } from "../Controller/userController.js";
console.log("userRoutes loaded");
const routes=express.Router();
routes.post("/",createUser);
routes.post("/login",login);

export default routes;