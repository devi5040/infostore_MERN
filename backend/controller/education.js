// NEED TO ADD AUTHORIZATION

const User = require ('../models/user');
const Education = require ('../models/education');

exports.getEducation = async (req, res, next) => {
  const userId = req.userId;
  try {
    const user = await User.findById (userId);
    if (!user) {
      return res.status (404).json ({message: 'User does not found'});
    }
    if (user._id.toString () !== userId.toString ()) {
      return res.status (403).json ({message: 'User not authorized'});
    }
    const educationDetails = await Education.find ({userId: userId});
    if (!educationDetails) {
      return res
        .status (404)
        .json ({message: 'Education details does not found'});
    }
    res.status (200).json ({
      message: 'Details fetched successfully',
      educationDetails: educationDetails,
    });
  } catch (error) {
    res.status (500).json ({
      message: 'Some internal error occured',
    });
  }
};

exports.addEducationDetails = async (req, res, next) => {
  const userId = req.userId;
  try {
    const user = await User.findById (userId);
    if (!user) {
      return res.status (404).json ({message: 'User does not found'});
    }
    if (user._id.toString () !== userId.toString ()) {
      return res.status (403).json ({message: 'User not authorized'});
    }
    const educationDetails = new Education ({
      education: req.body.education,
      institute: req.body.institute,
      marks: req.body.marks,
      achievements: req.body.achievements,
      otherDetails: req.body.otherDetails,
      userId: userId,
    });
    const educationData = await educationDetails.save ();
    res.status (201).json ({
      message: 'education created successfully',
      educationData: educationData,
    });
  } catch (error) {
    res.status (500).json ({
      message: 'Some internal error occured',
    });
  }
};

exports.editEducationDetails = async (req, res, next) => {
  const userId = req.userId;
  const educationId = req.body.educationId;
  try {
    const user = await User.findById (userId);
    if (!user) {
      return res.status (404).json ({message: 'User does not found'});
    }
    if (user._id.toString () !== userId.toString ()) {
      return res.status (403).json ({message: 'User not authorized'});
    }
    const educationDetails = await Education.findOne ({
      _id: educationId,
      userId: userId,
    });

    if (!educationDetails) {
      return res
        .status (404)
        .json ({message: 'Education details does not found'});
    }
    educationDetails.education = req.body.education;
    educationDetails.institute = req.body.institute;
    educationDetails.marks = req.body.marks;
    educationDetails.achievements = req.body.achievements;
    educationDetails.otherDetails = req.body.otherDetails;
    await educationDetails.save ();
    res.status (200).json ({
      message: 'Education details updated successfully',
      data: educationDetails,
    });
  } catch (error) {
    console.log (error);

    res.status (500).json ({
      message: 'Some internal error occured',
    });
  }
};
