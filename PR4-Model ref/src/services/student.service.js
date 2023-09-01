const {student} = require("../models");

const createStudent = async (reqBody)=>{
    return student.create(reqBody);
};

const getStudentList = async(req,res)=>{
    return student.find();
}

const deleteStudent = async(studentId)=>{
    return student.findByIdAndDelete(studentId);
};

// Get student details by id
const getStudentById = async (studentId) =>{
    return student.findById(studentId);
  };

  // update student details by id
  const studentUpdate = async (studentId , updateBody) =>{
    return student.findByIdAndUpdate(studentId , {$set : updateBody});
  };

module.exports = {
    createStudent,
    getStudentList,
    deleteStudent,
    getStudentById,
    studentUpdate
}
