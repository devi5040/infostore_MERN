const AWS = require ('aws-sdk');
const s3 = new AWS.S3 ({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const removeImageFromS3 = async imageUrl => {
  const arr = imageUrl.split ('/');

  const params = {
    Bucket: 'infostoredeviprasadrai',
    Key: `documents/${arr[4]}`,
  };

  try {
    await s3.deleteObject (params).promise ();
  } catch (error) {
    return res.status (500).json ({message: 'Some error occured'});
  }
};

module.exports = removeImageFromS3;
