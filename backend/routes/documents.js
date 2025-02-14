const express = require ('express');
const router = express.Router ();
const multer = require ('multer');
const AWS = require ('aws-sdk');
const path = require ('path');
const isAuth = require ('../middleware/authenticationMiddleware');

const documentController = require ('../controller/documents');

const s3 = new AWS.S3 ({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const upload = multer ({
  storage: multer.memoryStorage (),
  fileFilter: (req, file, callback) => {
    const ext = path.extname (file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      return callback (new Error ('only jpg, jpeg and png are allowed'));
    }
    callback (null, true);
  },
});

router.get ('/get-documents', isAuth, documentController.getDocuments);

router.put (
  '/add-documents',
  isAuth,
  upload.single ('file'),
  async (req, res, next) => {
    const file = req.file;
    if (!file) {
      res.status (400).json ('file does not found');
    }
    const fileName =
      file.fieldname + '-' + Date.now () + path.extname (file.originalname);
    try {
      const uploadParams = {
        Bucket: 'infostoredeviprasadrai',
        Key: `documents/${fileName}`,
        Body: file.buffer,
      };

      const s3UploadResponse = await s3.upload (uploadParams).promise ();

      req.documentUrl = s3UploadResponse.Location;

      await documentController.addDocuments (req, res, next);
    } catch (error) {
      res.status (500).json ({message: 'some error occured'});
    }
  }
);

router.delete (
  '/delete-document/:documentId',
  isAuth,
  documentController.deleteDocument
);

module.exports = router;
