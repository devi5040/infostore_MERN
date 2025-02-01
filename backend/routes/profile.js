const express = require ('express');
const {check} = require ('express-validator');
const AWS = require ('aws-sdk');
const multer = require ('multer');
const path = require ('path');

const router = express.Router ();
const profileController = require ('../controller/profile');

const s3 = new AWS.S3 ({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

//use memoryStorage for storing files in s3
const upload = multer ({
  storage: multer.memoryStorage (),
  fileFilter: (req, file, callback) => {
    const ext = path.extname (file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      return callback (
        new Error ('only .jpg, .png and .jpeg files are allowed')
      );
    }
    callback (null, true);
  },
});

//edit profile details
router.post (
  '/edit-profile',
  upload.single ('file'),
  async (req, res, next) => {
    const file = req.file;

    if (!file) {
      return await profileController.editProfile ();
    }
    const fileName =
      file.fieldname + '-' + Date.now () + path.extname (file.originalname);
    console.log (fileName);

    try {
      const uploadParams = {
        Bucket: 'infostoredeviprasadrai',
        Key: `profile/${fileName}`,
        Body: file.buffer,
      };

      const s3UploadResponse = await s3.upload (uploadParams).promise ();
      console.log (s3UploadResponse);

      req.imageUrl = s3UploadResponse.Location;

      await profileController.editProfile ();
    } catch (error) {
      console.log (error);
      res.status (500).json ({message: 'some error occured'});
    }
  }
);

//get profile details
router.get ('/get-profile', profileController.getProfile);

module.exports = router;
