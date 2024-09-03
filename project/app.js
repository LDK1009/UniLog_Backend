// 모듈 임포트
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");

// 라우터 임포트
const indexRoutes = require("./routes/index.js");

// 익스프레스 객체 생성
const app = express();

// 포트 설정
const port = 3001;

// 미들웨어
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// 에러 핸들러
app.use((err, req, res, next) => {
  res.status(500).send({
    message: "Server Error",
    error: err,
  });
});

// 세션 객체 초기화
app.use(
  session({
    name: "sessionId",
    secret: "soonCoding",
    resave: false, // 세션이 수정될 때만 다시 저장
    saveUninitialized: false, // 세션이 초기화되어 있을 때만 저장
    cookie: { maxAge: 1000 * 60 * 30 }, // 30분 세션 만료 시간 설정
    rolling: true, // 요청할 때마다 세션 만료 시간 갱신
  })
);

// 라우터
app.use("/", indexRoutes);

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
