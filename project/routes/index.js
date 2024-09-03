const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const authRouter = require('./auth');

// 메인 라우트에 서브 라우트 연결
router.use('/users', usersRouter);
router.use('/auth', authRouter);

module.exports = router;
