const jwt = require('jsonwebtoken');
require('dotenv').config();

// Secret key for signing the token
const secret = process.env.JWT_SECRET || 'GitWinItsMediCare';

// Function to generate a token
exports.generateToken = (user) => {
  const payload = { id: user.id, email: user.email };
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

// Function to verify token
exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Error('Invalid Token');
  }
};
