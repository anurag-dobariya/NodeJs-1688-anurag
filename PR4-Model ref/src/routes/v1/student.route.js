const express = require("express");
const {studentValidation} = require("../../validations");
const {studentController} = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create student info */
router.post(
    "/create-student",
    validate(studentValidation.createStudent),
    studentController.createStudent
);

/** get student list */
router.get(
    "/list",
    studentController.getStudentList
);

/** delete student */
router.delete(
    "/delete-student/:studentId",
    studentController.deleteStudent
);

/** delete student */
router.put(
    "/update-student/:studentId",
    studentController.studentUpdate
)



module.exports = router;