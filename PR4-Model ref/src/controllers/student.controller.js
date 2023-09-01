const {studentService} = require("../services");

/* Create student */
const createStudent = async(req,res) =>{
    try {
        const reqBody = req.body;
        const student = await studentService.createStudent(reqBody);

        if(!student){
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success:true,
            message:"student created successfully",
            data:student
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

/* get student list */
const getStudentList = async(req,res) =>{
    try {
       const studentList = await studentService.getStudentList(req,res);

       res.status(200).json({
        success:true,
        message:"get student list successfully",
        data:{studentList}
       });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/* delete student */
const deleteStudent = async(req,res) =>{
    try {
        const studentId = req.params.studentId;

        if(!studentId){
            throw new Error("student not found");
        }

        await studentService.deleteStudent(deleteId);
        
        res.status(200).json({
            success:true,
            message:"student deleted successfully",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** student details update by id */
const studentUpdate = async (req,res) =>{
    try {
        const studentId = req.params.studentId;
        const studentExists = await studentService.getStudentById(studentId);
        if(!studentExists){
            throw new Error("student not found")
        } 

        await studentService.studentUpdate(studentId , req.body);
        res.status(200).json({
            success:true,
            message:"student details updated successfully."
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

module.exports ={
    createStudent,
    getStudentList,
    deleteStudent,
    studentUpdate
}
