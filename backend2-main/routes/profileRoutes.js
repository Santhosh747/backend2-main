// routes/profileRoutes.js
const express = require('express');
const {updateUserProfile} = require('../controllers/profileController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.put('/edit/:id', protect,updateUserProfile);


module.exports = router;
