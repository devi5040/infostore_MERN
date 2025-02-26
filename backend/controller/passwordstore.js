const User = require ('../models/user');
const PasswordStore = require ('../models/passwordtore');
const {validationResult} = require ('express-validator');

exports.getPasswordStore = async (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 3;
  const userId = req.userId;
  try {
    const user = await User.findById (userId);
    if (!user) {
      return res.status (404).json ({message: 'User does not found'});
    }
    if (user._id.toString () !== userId.toString ()) {
      return res.status (403).json ({message: 'User not authorized'});
    }
    const data = await PasswordStore.find ({userId: userId})
      .skip ((currentPage - 1) * 3)
      .limit (perPage);
    const count = await PasswordStore.find ({userId: userId}).countDocuments ();
    if (!data) {
      return res.status (404).json ({message: 'Data does not exists'});
    }
    res
      .status (200)
      .json ({message: 'Data fetched successfully', data: data, count: count});
  } catch (error) {
    res.status (500).json ({message: 'Some error occured'});
  }
};

exports.addPasswords = async (req, res, next) => {
  const errors = validationResult (req);
  if (!errors.isEmpty ()) {
    return res.status (400).json ({message: 'Validation failed'});
  }
  const userId = req.userId;
  try {
    const user = await User.findById (userId);
    if (!user) {
      return res.status (404).json ({message: 'User does not found'});
    }
    if (user._id.toString () !== userId.toString ()) {
      return res.status (403).json ({message: 'User not authorized'});
    }
    const newData = new PasswordStore ({
      platform: req.body.platform,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      userId: userId,
    });
    await newData.save ();
    res
      .status (201)
      .json ({message: 'resource created successfully', data: newData});
  } catch (error) {
    res.status (500).json ({message: 'Some error occured'});
  }
};

exports.editPasswords = async (req, res, next) => {
  const errors = validationResult (req);
  if (!errors.isEmpty ()) {
    return res.status (400).json ({message: 'Validation failed'});
  }
  const userId = req.userId;
  const passwordId = req.body.passwordId;
  try {
    const user = await User.findById (userId);
    if (!user) {
      return res.status (404).json ({message: 'User does not found'});
    }
    if (user._id.toString () !== userId.toString ()) {
      return res.status (403).json ({message: 'User not authorized'});
    }
    const passwordData = await PasswordStore.findOne ({
      _id: passwordId,
      userId: userId,
    });
    if (!passwordData) {
      return res.status (404).json ({message: 'Data does not exists'});
    }
    passwordData.platform = req.body.platform;
    passwordData.email = req.body.email;
    passwordData.username = req.body.username;
    passwordData.password = req.body.password;
    await passwordData.save ();
    res
      .status (200)
      .json ({message: 'resource updated successfully', data: passwordData});
  } catch (error) {
    res.status (500).json ({message: 'Some error occured'});
  }
};

exports.deletePassword = async (req, res, next) => {
  const userId = req.userId;
  const passwordId = req.params.passwordId;
  try {
    const user = await User.findById (userId);
    if (!user) {
      return res.status (404).json ({message: 'User does not found'});
    }
    const passwordData = await PasswordStore.findById (passwordId);
    if (!passwordData) {
      return res.status (404).json ({message: 'Password data does not found'});
    }
    if (passwordData.userId.toString () !== userId.toString ()) {
      return res.status (403).json ({message: 'User does not authorized'});
    }
    await PasswordStore.findByIdAndDelete (passwordId);
    res.status (200).json ({message: 'Password data deleted successfully'});
  } catch (error) {
    res.status (500).json ({message: 'Some error occured'});
  }
};
