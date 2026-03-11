import { includes } from "zod/v4";
import * as UserService from "../Service/userService.cjs";

export const createUser = async (req, res) => {
    try {
        console.log("createUser controller hit");
        const data = req.body;
        console.log("body:", data);

        const user = await UserService.createUser(data);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user= await UserService.login(email,password);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const getById=async(req,res)=>{
    try {
        const {id}=req.params;
        const user=await UserService.getById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}