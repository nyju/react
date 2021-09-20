const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const {User} = require("./models/User");


// application/x-www-form-urlencoded 타입을 분석해서 가져옴
app.use(bodyParser.urlencoded({extended:true}));
// application/json 타입을 분석해서 가져옴

app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ny:ny123@cluster0.kftgg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
).then(() => console.log("MongoDB Connected"))
 .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})