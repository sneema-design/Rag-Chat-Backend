const db =require("../models/index.cjs")

const {User,Chat,Message}=db


const createChat=async(data)=>{
    const chat=await Chat.create(data);
    return chat;
}
const getAllChat=async()=>{
    const chat=await Chat.findAll();
    if(chat.length===0){
        throw new Error("no chat exist")
    }
    return chat;
}
const getChatbyId=async(id)=>{
    const chat= await Chat.findByPk(id,{
        include:[
            {model:Message,as:"messages"}
        ]
    });
    if(!chat){
        throw new Error("no chat by Id");
    }
    return chat
}
module.exports={
    createChat,
    getAllChat,
    getChatbyId
}