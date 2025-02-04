const express = require ('express');
const {check} = require ('express-validator');
const educationController = require ('../controller/education');
const isAuth = require ('../middleware/authenticationMiddleware');

const router = express.Router ();

router.get ('/get-education', isAuth, educationController.getEducation);

router.post ('/add-education', isAuth, educationController.addEducationDetails);

router.post (
  '/edit-education',
  isAuth,
  educationController.editEducationDetails
);

module.exports = router;
