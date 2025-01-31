const express = require ('express');
const {check} = require ('express-validator');

const router = express.Router ();
const profileController = require ('../controller/profile');

//get profile details
router.get ('/get-profile', profileController.getProfile);

module.exports = router;
