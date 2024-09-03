const { User } = require("../../models/index");

exports.getAllUsers = (req, res) => {
  // 모든 사용자 정보 반환
  res.send("모든 사용자 정보 반환");
};

exports.checkDuplicateUser = async (req, res) => {
  try {
    const { uid } = req.body;
    const users = await User.findAll({
        attributes: ["password"],
        where: { uid: uid },
    });
    // const users = await User.findAll();
    // console.log("checkDuplicateUser 실행!");
    console.log(users[0].dataValues.password);
    res.send(`사용자 중복 확인 기능 실행! ${users[0].dataValues.password}`);
  } catch (error) {
    res.send(`에러 발생! ${error}`);
  }
};

exports.createUser = (req, res) => {
  res.send("사용자 생성");
};
