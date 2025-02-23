const User = require ('../models/user');
const PasswordStore = require ('../models/passwordtore');
const Documents = require ('../models/documents');

exports.getProfileCompletion = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById (userId);
    console.log (user);
  } catch (error) {
    console.log (error);
  }
};

exports.getDocumentNumber = async (req, res) => {
  const userId = req.userId;
  try {
    const documentNumber = await Documents.countDocuments ({userId: userId});
    console.log ('total number of documents:', documentNumber);
  } catch (error) {
    console.log ('Error:', error);
  }
};

exports.getPassordsNumber = async (req, res) => {
  const userId = req.userId;
  try {
    const passwordDocumentsNumber = await PasswordStore.countDocuments ({
      userId: userId,
    });
    console.log ('Password numbers::', passwordDocumentsNumber);
  } catch (error) {
    console.log ('Error:', error);
  }
};
