const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

// 회원가입 라우트
router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "README.md");

  fs.readFile(filePath, "utf-8", (err, content) => {
    if (err) {
      return res.status(404).send("Post not found");
    }
    const htmlContent = marked(content);
    res.send(htmlContent);  // res.json 대신 res.send 사용
  });
});

module.exports = router;
