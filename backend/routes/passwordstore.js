const express = require ('express');
const router = express.Router ();
const {check} = require ('express-validator');
const passwordStoreController = require ('../controller/passwordstore');
const isAuth = require ('../middleware/authenticationMiddleware');

router.get ('/password-store', passwordStoreController.getPasswordStore);

router.post (
  '/password-store',
  isAuth,
  [
    check ('platform')
      .trim ()
      .isLength ({min: 3})
      .withMessage ('Enter valid platform.'),
    check ('password')
      .trim ()
      .isLength ({min: 3})
      .notEmpty ()
      .withMessage ('Enter valid Password'),
  ],
  passwordStoreController.addPasswords
);

router.put (
  '/password-store',
  isAuth,
  [
    check ('platform')
      .trim ()
      .isLength ({min: 3})
      .withMessage ('Enter valid platform.'),
    check ('password')
      .trim ()
      .isLength ({min: 3})
      .notEmpty ()
      .withMessage ('Enter valid Password'),
  ],
  passwordStoreController.editPasswords
);

module.exports = router;
