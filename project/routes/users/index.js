const express = require("express");
const router = express.Router();
const userController = require("../../controller/users/userController");

// 모든 사용자 조회
router.get("/", userController.getAllUsers);

// ID 중복 확인
router.post("/check-duplicate", userController.checkDuplicateUser);

module.exports = router;
