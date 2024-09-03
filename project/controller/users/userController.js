const {User} = require('../../models/user');

exports.getAllUsers = (req, res) => {
    // 모든 사용자 정보 반환
    res.send('모든 사용자 정보 반환');
};

exports.checkDuplicateUser = (req, res) => {
    res.send(`ID가 ${userId}인 사용자 중복 확인`);
};

exports.createUser = (req, res) => {
    res.send('사용자 생성');
};
