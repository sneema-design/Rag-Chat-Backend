import express from "express"
import { createUser, getById, login } from "../Controller/userController.js";
console.log("userRoutes loaded");
const routes=express.Router();
routes.post("/",createUser);
routes.post("/login",login);
routes.get("/:id",getById)
export default routes;