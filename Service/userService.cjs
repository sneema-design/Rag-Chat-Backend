const db =require("../models/index.cjs")

const {User,Chat}=db

const createUser=async(data)=>{
    const user =await User.create(data);
    return user;
}

const login=async(email,password)=>{
    const user= await User.findOne({where:{email}});
    if(!user){
        throw new Error("user does not exist by this id");
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
    throw new Error("Invalid Password");
  }
    return user;
}
const getById=async(id)=>{
   const user =await User.findByPk(id,{
            include:[
                {model:Chat,as:"chats"}
            ]
        });
   if(!user){
    throw new Error ("no user by this id");
   }
   return user
}
module.exports={
    createUser,
    login,
    getById
}