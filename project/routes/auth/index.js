const express = require("express");
const router = express.Router();
const authController = require("../../controller/auth/authController");

// 회원가입 라우트
router.post("/sign-up", authController.signUp);

// 로그인 라우트
router.post("/sign-in", authController.signIn);

module.exports = router;
