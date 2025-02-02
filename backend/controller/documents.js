const mongoose = require ('mongoose');
const Documents = require ('../models/documents');
const User = require ('../models/user');

exports.getDocuments = async (req, res, next) => {
  const userId = req.userId;
  try {
    const user = await User.findById (userId);
    if (!user) {
      return res.status (404).json ({message: 'User does not found'});
    }
    const documents = await Documents.find ({userId: userId});
    if (!documents) {
      return res.status (404).json ({message: 'Documents does not found'});
    }
    res
      .status (200)
      .json ({message: 'Documents fetched successfully', documents: documents});
  } catch (error) {
    res.status (500).json ({message: 'An Internal error occured'});
  }
};

exports.addDocuments = async (req, res, next) => {
  const userId = req.userId;
  const documentUrl = req.documentUrl;
  try {
    const user = await User.findById (userId);
    if (!user) {
      return res.status (404).json ({message: 'User does not exists'});
    }
    const newDocument = new Documents ({
      imageUrl: documentUrl,
      title: req.body.title,
      userId: userId,
    });
    await newDocument.save ();
    res.status (201).json ({message: 'New document created successfully'});
  } catch (error) {
    res.status (500).json ({message: 'An Internal error occured'});
  }
};
