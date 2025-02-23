const express = require ('express');
const router = express.Router ();
const isAuth = require ('../middleware/authenticationMiddleware');

const homeInfoController = require ('../controller/homeInfo');

router.get (
  '/profile-completion',
  isAuth,
  homeInfoController.getProfileCompletion
);
router.get ('/documents-number', isAuth, homeInfoController.getDocumentNumber);
router.get ('/passwords-number', isAuth, homeInfoController.getPassordsNumber);

module.exports = router;
