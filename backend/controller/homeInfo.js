const User = require ('../models/user');
const PasswordStore = require ('../models/passwordtore');
const Documents = require ('../models/documents');

exports.getProfileCompletion = async (req, res) => {
  const userId = req.userId;
  console.log ('UserId', userId);
  try {
    const user = await User.findById (userId).select (
      '-_id -password -createdAt -updatedAt -__v -resetToken -tokenExpiration'
    );
    let count = 0;
    const TOTAL_COUNT = 9;
    Object.entries (user._doc).forEach (([key, value]) => {
      if ((value && value !== '-') || value != '') {
        count++;
      }
    });
    const profileCompleted = 100 - count / TOTAL_COUNT * 100;
    res.status (200).json ({
      message: 'Fetched the profile successfully',
      count: profileCompleted.toFixed (0),
    });
  } catch (error) {
    res.status (500).json ({message: 'Some error occured'});
  }
};

exports.getDocumentNumber = async (req, res) => {
  const userId = req.userId;
  try {
    const documentNumber = await Documents.countDocuments ({userId: userId});
    res.status (200).json ({
      message: 'Fetched document count successfully',
      count: documentNumber,
    });
  } catch (error) {
    res.status (500).json ({message: 'Some error occured'});
  }
};

exports.getPassordsNumber = async (req, res) => {
  const userId = req.userId;
  try {
    const passwordDocumentsNumber = await PasswordStore.countDocuments ({
      userId: userId,
    });
    res.status (200).json ({
      message: 'Fetched password count successfully',
      count: passwordDocumentsNumber,
    });
  } catch (error) {
    res.status (500).json ({message: 'Some error occured'});
  }
};
