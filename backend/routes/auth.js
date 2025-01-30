const express = require('express');
const router = express.Router();
const authController = require('../controller/auth');
const { body } = require('express-validator');

//Route for register
router.post(
    '/register', [
        body('email')
        .trim()
        .isEmail()
        .notEmpty()
        .withMessage('Email id is not valid'),
        body('name')
        .trim()
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage('Entered name is invalid provide valid name'),
        body('password')
        .notEmpty()
        .trim()
        .isLength({ min: 8 })
        .withMessage('Password should contain at least 8 characters'),
    ],
    authController.register
);

//Route for login
router.post(
    '/login', [
        body('email')
        .trim()
        .isEmail()
        .notEmpty()
        .withMessage('Email id is not valid'),
        body('password')
        .notEmpty()
        .trim()
        .isLength({ min: 8 })
        .withMessage('Password should contain at least 8 characters'),
    ],
    authController.login
);

//Route for forgot-password
router.post('/forgot-password/:token');

//Route for changing password
router.post('/update-password');

module.exports = router;