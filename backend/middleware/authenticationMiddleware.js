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
  // const authHeader = req.get ('Authorization');
  // if (!authHeader) {
  //   return res.status (401).json ({message: 'Authentication failed'});
  // }
  // const token = authHeader.split (' ')[1];
  // let decodedToken;
  // try {
  //   decodedToken = jwt.verify (token, process.env.JWT_SECRET);
  // } catch (error) {
  //   return res.status (500).json ({message: 'Token is not proper'});
  // }
  // if (!decodedToken) {
  //   return res.status (401).json ({message: 'Authentication failed'});
  // }
  // req.userId = decodedToken.userId;
  // next ();
};
