const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})


userSchema.pre('save', function (next) { // user정보를 저장하기전에 실행
    var user = this;

    if (user.isModified('password')) {
        // 비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err)
                user.password = hash // hash 된 비밀번호로 교체
                next() // 돌아감
            });
        });
    } else {
        next()
    }

})

userSchema.methods.comparePassword = function(plainPassowrd, cb) {
    bcrypt.compare(plainPassowrd, this.password, function (err, isMatch) {
        if (err) return cb(err)
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb) {
    var user = this;

    //jsonwebtoekn을 이용하여 토큰생성 => user._id + 'secretToken' = token
    var token = jwt.sign(user._id.toHexString(), 'secretToken');

    user.token = token
    user.save(function(err, user){
        if(err) return cb(err)
        cb(null, user)
    })
}

userSchema.statics.findByToken = function (token, cb) {
    var user = this;

    // 토큰을 decode 한다.
    jwt.verify(token, 'secretToken', function(err, decoded) {
        // 유저아이디를 이용해 유저를 찾은 다음
        // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
        user.findOne({"_id": decoded, "token": token}, function(err, user){
            if(err){
                return cb(err);
            }
            cb(null, user);
        })
    })
}


const User = mongoose.model('User', userSchema)

module.exports = { User }