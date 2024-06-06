// models/Post.js
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    location: { type: String, required: true },
    caption: { type: String, required: true },
    credits: { type: Number, default: 0 },
    category: { type: String, required: true },
    username: { type: String, required: true },
    validateUsername: { type: String },
    validated: { type: Boolean, default: false },
  },
  {
    timestamps: true // This will add createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Post', PostSchema);