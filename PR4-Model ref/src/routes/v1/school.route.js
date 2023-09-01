const express = require("express");
const {schoolValidation} = require("../../validations");
const {schoolController} = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create school info */
router.post(
    "/create-school",
    validate(schoolValidation.createSchool),
    schoolController.createSchool
)

/** get school list */
router.get(
    "/list",
    schoolController.getSchoolList
)

/** delete school */
router.delete(
    "/delete-school/:schoolId",
    schoolController.deleteSchool
)

/** delete school */
router.put(
    "/update-school/:schoolId",
    schoolController.schoolUpdate
)

module.exports = router;