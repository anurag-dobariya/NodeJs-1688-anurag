const { State } = require("../models");

// create state
const createState = async(reqbody) => {
    return State.create(reqbody);
}

// state list
const getStateList = async() => {
    return State.find().populate("country");
}

// get state details by id
const getStateById = async(stateId) => {
    return State.findById(stateId);
}

// delete state
const deleteState = async(stateId) => {
    return State.findByIdAndDelete(stateId);
}

// update state
const updateState = async(stateId,reqbody) => {
    return State.findByIdAndUpdate(stateId,{$set:reqbody});
}

// get state details by name
const getStateByName = async(state_name) => {
    return State.findOne({state_name})
}

module.exports = {
    createState,
    getStateList,
    getStateById,
    deleteState,
    updateState,
    getStateByName
}
