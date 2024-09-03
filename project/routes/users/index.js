const express = require('express');
const router = express.Router();
const userController = require('../../controller/users/userController');

// 모든 사용자 조회
// router.get('/', userController.getAllUsers);

// // 특정 사용자 조회
// router.get('/:userId', userController.getUserById);

// // 사용자 생성 (회원가입)
// router.post('/', userController.createUser);

// // 사용자 업데이트
// router.put('/:userId', userController.updateUser);

// // 사용자 삭제
// router.delete('/:userId', userController.deleteUser);

// ID 중복 확인
router.post('/check-duplicate', userController.checkDuplicateUser);

module.exports = router;
