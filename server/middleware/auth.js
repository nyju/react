const {User} = require('../models/User');

let auth = (req, res, next) => {
    // 인증처리를 한다.

    // 클라이언트 쿠키에서 토큰을 가져온다.
    let token = req.cookies.x_auth;

    // 토큰을 복호화 한 후 유저를 찾는다.
    User.findByToken(token, (err, user) => {
        if(err) throw err;

         // 유저가 없으면 인증 실패
        if(!user) return res.json({ isAuth: false, error: true})

        // 유저가 있으면 인증 성공
        // 정보를 사용할 수 있도록 토큰과 유저정보를 req에 넣어준다
        req.token = token;
        req.user = user;

        next(); // 미들웨어이기 떄문에 next 해줘야 한다.
    })
}

module.exports = { auth };