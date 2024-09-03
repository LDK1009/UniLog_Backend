// 모듈 임포트
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { sequelize } = require("./models/index");


// 라우터 임포트
const indexRoutes = require('./routes/index.js');

// 익스프레스 객체 생성
const app = express();

// 포트 설정
const port = 3001;

// 미들웨어 추가
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// 세션 객체 초기화
app.use(
  session({
    name:'sessionId',
    secret: "soonCoding",
    resave: false, // 세션이 수정될 때만 다시 저장
    saveUninitialized: false, // 세션이 초기화되어 있을 때만 저장
    cookie: { maxAge: 1000 * 60 * 30 }, // 30분 세션 만료 시간 설정
    rolling: true, // 요청할 때마다 세션 만료 시간 갱신
  })
);

// 라우터
app.use('/', indexRoutes);


// 세션 검증 미들웨어
app.use((req, res) => {
  if (req.session && req.session.user) {
      // 세션이 유효한 경우
      res.json({ redirectUrl: '/main' });
  } else {
      // 세션이 없는 경우 또는 유효하지 않은 경우
      res.json({ redirectUrl: '/sign-in' });
  }
});

app.get("/", (req, res, next) => {
  if (req.session.user) {
    // 세션에 유저가 존재한다면
    res.send(`세션이 이미 있는뎁쇼?\n${req.session.user.name}`);
  } else {
    req.session.user = { name: 'John Doe', authenticated: true };
    res.send("이녀석 ㅋㅋ 세  션이 없구나~ 내가 세션을 줄게~");
  }
});

app.get("/main", (req, res) => {
  res.send("메인이다옹~");
});

app.get("/", (req, res) => {
  res.send("hello world");
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
