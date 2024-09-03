const { User } = require("../../models/index");
const wrapAsyncController = require("../../utills/wrapAsyncController");

exports.getAllUsers = wrapAsyncController(async (req, res) => {
    const datas = await User.findAll();
    res.status(201).json(datas);
});

exports.checkDuplicateUser = async (req, res) => {
  try {
    const { uid } = req.body;
    const datas = await User.findAll({
      attributes: ["uid"],
      where: { uid: uid },
    });
    const users = datas.map((el) => el.dataValues.uid);

    if (users.length < 1) {
      res.json(true);
    } else {
      res.json(false);
    }
  } catch (error) {
    res.json(`에러 발생! ${error}`);
  }
};

exports.createUser = (req, res) => {
  res.json("사용자 생성");
};
