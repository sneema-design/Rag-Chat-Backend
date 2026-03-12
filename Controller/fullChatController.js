import * as fullChatService from "../Service/fullChatService.cjs"

export const createChat=async(req,res)=>{
    try {
        const data=req.body
        const chat= await fullChatService.createChat(data);
        res.status(200).json(chat);
    } catch (error) {
         res.status(error.status||500).json({
            message: error.message
        });
    }
}

export const getAllChat=async(req,res)=>{
    try {
        const chat= await fullChatService.getAllChat();
        res.status(200).json(chat);
    } catch (error) {
           res.status(error.status||500).json({
            message: error.message
        });
    }
}

export const getChatbyId=async(req,res)=>{
    try {
        const {id}= req.params
        const chat= await fullChatService.getChatbyId(id);
        res.status(200).json(chat);
    } catch (error) {
          res.status(error.status||500).json({
            message: error.message
        });
    }
}
export const getChatsByUserId=async(req,res)=>{
    try {
        const {id}=req.params;
        const chats=await fullChatService.getChatsByUserId(id);
        res.status(200).json(chats);
    } catch (error) {
        res.status(error.status||500).json({
            message: error.message
        });
    }
}