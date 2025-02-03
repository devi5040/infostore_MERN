// NEED TO ADD AUTHORIZATION

const User = require ('../models/user');
const PasswordStore = require ('../models/passwordtore');
const {validationResult} = require ('express-validator');

exports.getPasswordStore = async (req, res, next) => {
  const userId = req.userId;
  try {
    const user = await User.findById (userId);
    if (!user) {
      return res.status (404).json ({message: 'User does not found'});
    }
    if (user._id.toString () !== userId.toString ()) {
      return res.status (403).json ({message: 'User not authorized'});
    }
    const data = await PasswordStore.find ({userId: userId});
    if (!data) {
      return res.status (404).json ({message: 'Data does not exists'});
    }
    res.status (200).json ({message: 'Data fetched successfully', data: data});
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
