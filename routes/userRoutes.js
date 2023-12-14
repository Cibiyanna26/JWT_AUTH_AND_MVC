const express = require("express");
const {auth} = require('../middleware/authMiddleware')
const router = express.Router();

const {registerUser,loginUser,getMe} = require('../controllers/userController')

router.post('/signup',registerUser);
router.post('/login',loginUser);
router.get('/me',auth,getMe);

module.exports = router;