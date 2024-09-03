const wrapAsyncController = require("../../utills/wrapAsyncController");
const { User } = require("../../models/index");

// 로그인
exports.signIn = wrapAsyncController(async (req, res) => {
    
});

exports.signUp = wrapAsyncController(async (req, res) => {
  await User.create(req.body);
  res.status(201).send("회원가입 성공");
});
