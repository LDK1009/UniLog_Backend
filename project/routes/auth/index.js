const express = require('express');
const router = express.Router();
const authController = require('../../controller/auth/authController');

// 로그인 라우트
router.post('/sign-up', authController.signUp);

// 로그아웃 라우트
// router.post('/logout', authController.logout);

module.exports = router;
