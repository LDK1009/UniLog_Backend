const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// CORS 미들웨어 추가 (다른 도메인에서의 요청을 허용하기 위함)
app.use(cors());
app.use(express.json());

// POST 요청 처리 (React 클라이언트에서 데이터를 받을 수 있는 엔드포인트)
app.post('/submit', (req, res) => {
  const { name } = req.body;  // 클라이언트에서 보낸 데이터 받기
  console.log(`Received name: ${name}`);
  res.status(200).send({ message: `Hello, ${name}!` });
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
