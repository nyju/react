const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const {User} = require("./models/User");
const config = require('./config/key');

// application/x-www-form-urlencoded 타입을 분석해서 가져옴
app.use(bodyParser.urlencoded({extended:true}));
// application/json 타입을 분석해서 가져옴

app.use(bodyParser.json());
app.use(cookieParser())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURL
).then(() => console.log("MongoDB Connected"))
 .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요!!')
})

app.post('/register', (req, res) => {
    // 회원 가입시 필요한 정보를 client에서 가져온 후 DB에 넣어준다.

    const user = new User(req.body)
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.post('/login', (req, res) => {

  //요청된 이메일을 DB에서 확인
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "이메일에 해당하는 유저가 없습니다."
      })
    }

    //요청된 이메일이 DB에 있다면 비번확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "비밀번호가 틀립니다." })

      //비밀번호가 맞다면 토큰 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        //토큰을 저장한다. 쿠키 또는 로컬스토리지
        res.cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id })
      })
    })

  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})