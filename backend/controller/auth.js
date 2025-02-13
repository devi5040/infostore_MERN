const User = require ('../models/user');
const bcrypt = require ('bcryptjs');
const {validationResult} = require ('express-validator');
const jwt = require ('jsonwebtoken');
const crypto = require ('crypto');

//sending emails
const nodemailer = require ('nodemailer');
// nodemailer.config();

//ethernal email for smtp server
const transporter = nodemailer.createTransport ({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

async function sendEmail (email, otp = '') {
  await transporter.sendMail ({
    from: 'Deviprasad <dpraimd@gmail.com>',
    to: email,
    subject: 'Hello world',
    html: `<h1>Hello,</h1><p>Thank you for registering to Infostore<p><p>We welcome you to our family</p><div>For any support please contact <a href='mailto:dpraimd@gmail.com'>Support</a></div>Token for password retrieval: ${otp}
    OTP is valid for 10mins`,
  });
}

//register route handling
exports.register = async (req, res, next) => {
  const errors = validationResult (req);
  if (!errors.isEmpty ()) {
    return res.status (400).json ({errors: errors.array ()});
  }

  const {email, name, password} = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne ({email});
    if (existingUser) {
      return res.status (422).json ({
        message: 'Email already exists, please provide a unique email id.',
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash (password, 14); // Improved cost factor

    // Create new user
    const newUser = new User ({email, name, password: hashedPassword});
    const result = await newUser.save ();

    // Send email after successful user creation
    await sendEmail (email);

    // Respond with success
    res
      .status (201)
      .json ({message: 'User has been created successfully', user: result});
  } catch (err) {
    res
      .status (500)
      .json ({message: 'An error occurred while registering the user.'});
  }
};

//login route handling
exports.login = async (req, res, next) => {
  const errors = validationResult (req);
  if (!errors.isEmpty ()) {
    return res.status (400).json ({errors: errors.array ()});
  }
  const email = req.body.email;
  const password = req.body.password;
  try {
    const existingUser = await User.findOne ({email: email});
    //return error if user does not exists
    if (!existingUser) {
      return res.status (404).json ({message: 'User does not exist'});
    }

    //check the password if user exists
    const passwordMatches = await bcrypt.compare (
      password,
      existingUser.password
    );

    //return if password didn't match
    if (!passwordMatches) {
      return res
        .status (401)
        .json ({message: 'Wrong password. Please enter correct password '});
    }

    const token = jwt.sign (
      {email: existingUser.email, userId: existingUser._id},
      process.env.JWT_SECRET,
      {expiresIn: '1h'}
    );

    res.status (200).json ({
      message: 'User logged in successfully',
      accessToken: token,
    });
  } catch (error) {
    res.status (500).json ({message: 'An error occured'});
  }
};

//mail the password reset token
exports.getAccessOtp = async (req, res, next) => {
  const errors = validationResult (req);
  if (!errors.isEmpty ()) {
    return res.status (400).json ({error: errors.array ()});
  }
  const email = req.body.email;
  try {
    const token = crypto.randomInt (100000, 1000000);
    const user = await User.findOne ({email: email});
    if (!user) {
      return res.status (404).json ({
        message: 'User not available with provided email id',
      });
    }
    const expirationTime = Date.now () + 60 * 10 * 1000;
    user.resetToken = token;
    user.tokenExpiration = expirationTime;
    await user.save ();
    await sendEmail (email, token);
    res.status (200).json ({message: 'Mail sent to the user with OTP'});
  } catch (error) {
    res.status (500).json ({message: 'Some error occured'});
  }
};

//verify-otp route handling
exports.verifyOtp = async (req, res, next) => {
  const errors = validationResult (req);
  if (!errors.isEmpty ()) {
    return res.status (400).json ({error: errors.array ()});
  }
  const otp = req.body.otp;
  const email = req.body.email;
  try {
    const user = await User.findOne ({
      email: email,
    });
    if (!user) {
      return res.status (404).json ({message: 'User not found'});
    }
    if (user._id.toString () !== req.userId.toString ()) {
      return res.status (403).json ({message: 'User not authorized'});
    }
    const userOtp = user.resetToken;
    const expirationTime = user.tokenExpiration;
    if (otp !== userOtp || expirationTime <= Date.now ()) {
      return res.status (401).json ({message: 'Invalid otp'});
    }
    user.resetToken = undefined;
    await user.save ();
    res.status (200).json ({message: 'Otp has been verified'});
  } catch (error) {
    res.status (500).json ({message: 'Some internal error has been occured'});
  }
};

exports.changePassword = async (req, res, next) => {
  const errors = validationResult (req);
  if (!errors.isEmpty ()) {
    return res.status (400).json ({error: errors.array ()});
  }
  const email = req.body.email;
  const newPassword = req.body.password;
  try {
    const user = await User.findOne ({email: email});
    if (!user) {
      return res.status (404).json ({message: 'User not found'});
    }
    if (user._id.toString () !== req.userId.toString ()) {
      return res.status (403).json ({message: 'User not authorized'});
    }
    const expirationTime = user.tokenExpiration;
    if (expirationTime <= Date.now () || expirationTime === undefined) {
      return res
        .status (401)
        .json ({message: 'Time exceeded please try again'});
    }
    const hashedPassword = await bcrypt.hash (newPassword, 12);
    user.password = hashedPassword;
    user.tokenExpiration = undefined;
    await user.save ();
    res.status (200).json ({message: 'Password changed successfully'});
  } catch (error) {
    res.status (500).json ({message: 'Some internal error has been occured'});
  }
};
