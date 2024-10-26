const userService = require('../../services/user/userService');
const authService = require('../../services/auth/authServices');

exports.loginUser = async (req, res) => {
  try {
    const user = await userService.getUserByEmail(req.body.email);

    if (!user || user.password !== req.body.password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT Token
    const token = authService.generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.getAllUsers = async (req, res) => {
    try {
      const users = await userService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
  
  exports.createUser = async (req, res) => {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };