const authService = require('../services/auth/authServices');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  // Bearer Token
  const bearerToken = token.split(' ')[1];

  try {
    const decoded = authService.verifyToken(bearerToken);
    req.user = decoded; // Store user info in request object
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid token.' });
  }
};

module.exports = authenticateToken;
