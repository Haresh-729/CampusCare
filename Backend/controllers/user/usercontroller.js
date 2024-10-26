const userService = require('../../services/user/userService');
const authService = require('../../services/auth/authServices');

exports.loginUser = async (req, res) => {
  try {
    const user = await userService.getUserByUname(req.body.uname);

    if (!user || user.password !== req.body.password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT Token
    const token = authService.generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
    try {
      const users = await userService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.createUser = async (req, res) => {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.updateUser = async (req, res) => {
    try {
      const userId = req.params.id; // Assuming the user ID is passed as a URL parameter
      const updatedData = req.body;
      
      const [updated] = await userService.updateUser(userId, updatedData);
  
      if (updated) {
        const updatedUser = await userService.getUserById(userId); // Optionally fetch the updated user
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const deleted = await userService.deleteUser(userId);
  
      if (deleted) {
        res.status(200).json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getUserById = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await userService.getUserById(userId);
  
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getUserByurId = async (req, res) => {
    try {
      const ur_id = req.params.id;
      const user = await userService.getUserByRole(ur_id);
  
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.updateUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedData = req.body;
  
      const [updated] = await userService.updateUser(userId, updatedData);
  
      if (updated) {
        const updatedUser = await userService.getUserById(userId); // Optionally fetch the updated user
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
                            
  