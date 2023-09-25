const router = require('express').Router();
const UserController = require('../controller/user.controller');

router.post('/registration', UserController.register);
router.post('/otpLogin', UserController.otpLogin);
router.post('/verifyOTP', UserController.verifyOTP);
router.put('/addname', UserController.addName);

module.exports = router;