const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/users', authenticateToken, userController.getAllUsers);  // Protected route
router.post('/users', userController.createUser);

module.exports = router;
