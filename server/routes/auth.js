const express = require('express');
const router = express.Router();
const { register, login, verifyOTP } = require('../controllers/authController');
const { validate } = require('../middleware/validate');
const { registerRules, loginRules } = require('../middleware/validators/authValidator');

router.post('/register', registerRules, validate, register);
router.post('/login', loginRules, validate, login);
router.post('/verify-otp', verifyOTP);

module.exports = router;
