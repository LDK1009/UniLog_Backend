const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { marked } = require("marked");
const { JSDOM } = require("jsdom");
const DOMPurify = require("dompurify")(new JSDOM().window); // jsdom을 통해 DOM 환경 설정

// 회원가입 라우트
router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "README.md");

  fs.readFile(filePath, "utf-8", (err, content) => {
    if (err) {
      return res.status(404).send("Post not found");
    }
    const htmlContent = marked(content);
    const safeHTML = DOMPurify.sanitize(htmlContent); // 악성 코드 필터링
    res.send(safeHTML); // res.json 대신 res.send 사용
  });
});

module.exports = router;
