const wrapAsyncController = require("../../utills/wrapAsyncController");
const { User } = require("../../models/index");

// 로그인
exports.signIn = wrapAsyncController(async (req, res) => {
  const { uid, password } = req.body;

  const userData = await User.findOne({ where: { uid: uid, password: password } });
  req.session.user = { ...userData.dataValues, authenticated: true };
  res.json(userData);
});

exports.signUp = wrapAsyncController(async (req, res) => {
  const { uid } = req.body;

  // 중복 사용자 검사
  const existingUser = await User.findOne({ where: { uid: uid } });

  if (existingUser) {
    // 중복된 사용자 ID가 있는 경우
    return res.status(409).json({ success: false, message: "이미 존재하는 사용자 ID입니다." });
  }

  // 중복된 사용자 ID가 없는 경우, 회원가입 처리
  await User.create(req.body);
  res.status(201).json({ success: true, message: "회원가입 성공" });
});
