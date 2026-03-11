const db =require("../models/index.cjs")

const {User}=db

const createUser=async(data)=>{
    const user =await User.create(data);
    return user;
}

const login=async(email,password)=>{
    const user= await User.findOne({where:{email}});
    if(!user){
        throw new Error("user does not exist by this id");
    }
    if(password!=user.password){
        throw new Error("password is wrong");
    }
    return user;
}
module.exports={
    createUser,
    login
}