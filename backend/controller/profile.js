const mongoose = require ('mongoose');
const User = require ('../models/user');

//controller for getting user profile
exports.getProfile = async (req, res, next) => {
  const userId = req.userId;
  try {
    const user = await User.findOne ({_id: userId});

    //user not found
    if (!user) {
      return res.status (404).json ({message: 'User does not found'});
    }
    res.status (200).json ({message: 'User found successfully', user: user});
  } catch (error) {
    res.status (500).json ({message: 'Some error occured'});
  }
};

//edit the profile
exports.editProfile = async (req, res, next) => {
  console.log ('body::', req.body);
  // console.log (req);

  console.log ('filename::', req.imageUrl);
};
