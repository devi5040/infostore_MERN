const jwt = require ('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status (401)
      .json ({message: 'Authentication failed token not present'});
  }
  try {
    const decodedToken = jwt.verify (token, process.env.JWT_SECRET);
    req.userId = decodedToken.userId;
    next ();
  } catch (error) {
    return res.status (401).json ({message: 'Authentication failed'});
  }
};
