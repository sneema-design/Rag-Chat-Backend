import express from "express"
import { createUser, getById, login } from "../Controller/userController.js";
import validate from "../middleware/validation.Middleware.js";
import { createUserSchema,loginSchema } from "../validations/userValidation.js";
console.log("userRoutes loaded");
const routes=express.Router();
routes.post("/",validate(createUserSchema),createUser);
routes.post("/login",validate(loginSchema),login);
routes.get("/:id",getById)
export default routes;