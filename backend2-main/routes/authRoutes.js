// routes/authRoutes.js
const express = require('express');
const { registerUser, authUser,getUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', authUser);
router.get('/:id', protect,getUser);

module.exports = router;
