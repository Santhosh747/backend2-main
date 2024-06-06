// controllers/profileController.js
const User = require('../models/User');


const updateUserProfile = async (req, res) => {
  const userId = req.user._id;
  try {
    const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = {updateUserProfile};

/*
const profile = async (req, res) => {
  const userId = req.session.user._id;
  const user = await User.findById(userId);
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};
const updateUserProfile = async (req, res) => {
  const { companyName, bio, profilePhoto, credits } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      user.companyName = companyName || user.companyName;
      user.bio = bio || user.bio;
      user.profilePhoto = profilePhoto || user.profilePhoto;
      user.credits = credits || user.credits;
      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        fullname: updatedUser.fullname,
        username: updatedUser.username,
        email: updatedUser.email,
        category: updatedUser.category,
        companyName: updatedUser.companyName,
        bio: updatedUser.bio,
        profilePhoto: updatedUser.profilePhoto,
        credits: updatedUser.credits,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {profile, updateUserProfile};
*/
