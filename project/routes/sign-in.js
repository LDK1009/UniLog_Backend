const express = require("express");
const router = express.Router();
const { User } = require("../models/index");

// POST /sign-up
router.post("/", async (req, res) => {
  try {
    // await User.create(req.body);
    const users = await User.findAll();

    res.status(201).send("로그인 성공");
  } catch (error) {
    console.error("로그인 실패:", error); // 오류 로그 출력
    res.status(500).send("로그인 실패");
  }
});

module.exports = router;
