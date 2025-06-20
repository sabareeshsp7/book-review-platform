const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/:id', getUserProfile);
router.put('/profile', auth, updateUserProfile);

module.exports = router;