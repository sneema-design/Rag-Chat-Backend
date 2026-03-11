const db =require("../models/index.cjs")

const {User}=db

const createUser=async(data)=>{
    const user =await User.create(data);
    return user;
}

module.exports={
    createUser
}