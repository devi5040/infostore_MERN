const Documents = require ('../models/documents');
const User = require ('../models/user');
const removeImageFromS3 = require ('../util/removeImage');

exports.getDocuments = async (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 3;
  const userId = req.userId;
  try {
    const user = await User.findById (userId);
    if (!user) {
      return res.status (404).json ({message: 'User does not found'});
    }
    const documents = await Documents.find ({userId: userId})
      .skip ((currentPage - 1) * perPage)
      .limit (perPage);
    const count = await Documents.find ({userId: userId}).countDocuments ();
    if (!documents) {
      return res.status (404).json ({message: 'Documents does not found'});
    }
    res.status (200).json ({
      message: 'Documents fetched successfully',
      documents: documents,
      documentsCount: count,
    });
  } catch (error) {
    res.status (500).json ({message: 'An Internal error occured'});
  }
};

exports.addDocuments = async (req, res, next) => {
  const userId = req.userId;
  const documentUrl = req.documentUrl;
  const title = req.body.title;
  if (
    title.trim ().length <= 3 &&
    title.trim () === '' &&
    title.trim () === undefined
  ) {
    return res.status (400).json ({message: 'Validation failed'});
  }
  try {
    const user = await User.findById (userId);
    if (!user) {
      return res.status (404).json ({message: 'User does not exists'});
    }
    const newDocument = new Documents ({
      imageUrl: documentUrl,
      title: title,
      userId: userId,
    });
    await newDocument.save ();
    res.status (201).json ({message: 'New document created successfully'});
  } catch (error) {
    res.status (500).json ({message: 'An Internal error occured'});
  }
};

exports.deleteDocument = async (req, res, next) => {
  const userId = req.userId;
  const documentId = req.params.documentId;
  try {
    const user = await User.findById (userId);
    if (!user) {
      return res.status (404).json ({message: 'User does not exists'});
    }
    const document = await Documents.findById (documentId);

    if (!document) {
      return res.status (404).json ({message: 'Document does not exists'});
    }
    if (document.userId.toString () !== userId.toString ()) {
      return res.status (403).json ({message: 'Not authenticated'});
    }
    removeImageFromS3 (document.imageUrl);
    await Documents.findByIdAndDelete (documentId);
    res.status (200).json ({message: 'Document deleted successfully'});
  } catch (error) {
    return res.status (500).json ({message: 'Some error occured'});
  }
};
