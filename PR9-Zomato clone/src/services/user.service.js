const {user} = require("../models");

// create user
const createUser = async(reqBody) =>{
    return user.create(reqBody)
};

// get user list
const getUserList = async(req,res) =>{
    return user.find()
};

// get user details by id
const getUserById = async(userId) =>{
    return user.findById(userId)
};

// delete user
const deleteUser = async(userId) =>{
    return user.findByIdAndDelete(userId)
};

// update user
const updateUser = async(userId , updateBody) =>{
    return user.findByIdAndUpdate(userId , {$set : updateBody})
};

module.exports = {
    createUser,
    getUserList,
    getUserById,
    deleteUser,
    updateUser
}