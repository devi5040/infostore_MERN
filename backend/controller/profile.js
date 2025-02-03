const User = require ('../models/user');
const {validationResult} = require ('express-validator');

//controller for getting user profile
exports.getProfile = async (req, res, next) => {
  const userId = req.userId;
  try {
    const user = await User.findOne ({_id: userId}).select ('-password');

    //user not found
    if (!user) {
      return res.status (404).json ({message: 'User does not found'});
    }
    if (user._id.toString () !== userId.toString ()) {
      return res.status (403).json ({message: 'User not authorized'});
    }
    res.status (200).json ({message: 'User found successfully', user: user});
  } catch (error) {
    res.status (500).json ({message: 'Some error occured'});
  }
};

//edit the profile
exports.editProfile = async (req, res, next) => {
  const errors = validationResult (req);
  if (!errors.isEmpty ()) {
    return res.status (400).json ({errors: errors.array ()});
  }

  const {
    name,
    address,
    bloodGroup,
    mobileNumber,
    age,
    height,
    weight,
  } = req.body;
  const profileImage = req.imageUrl;
  const userId = req.userId;

  try {
    const existingUser = await User.findById (userId).select ('password');

    if (!existingUser) {
      return res.status (404).json ({message: 'User does not found'});
    }
    if (existingUser._id.toString () !== userId.toString ()) {
      return res.status (403).json ({message: 'User not authorized'});
    }

    existingUser.name = name;
    existingUser.address = address;
    existingUser.bloodGroup = bloodGroup;
    existingUser.mobileNumber = mobileNumber;
    existingUser.age = age;
    existingUser.height = height;
    existingUser.weight = weight;
    existingUser.profileImage = profileImage;

    const userData = await existingUser.save ();

    res.status (200).json ({
      message: 'User profile updated successfully',
      user: userData,
    });
  } catch (error) {
    res.status (500).json ({message: 'some error has been occured'});
  }
};
