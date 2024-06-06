// routes/postRoutes.js
const express = require('express');
const { createPost, validatePost, getPosts } = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', protect, createPost);
router.put('/validate', protect, validatePost);
router.get('/allposts', getPosts);

module.exports = router;
