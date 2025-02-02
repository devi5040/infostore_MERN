const express = require ('express');
const {check} = require ('express-validator');
const educationController = require ('../controller/education');

const router = express.Router ();

router.get ('/get-education', educationController.getEducation);

router.post ('/add-education', educationController.addEducationDetails);

router.post ('/edit-education', educationController.editEducationDetails);

module.exports = router;
