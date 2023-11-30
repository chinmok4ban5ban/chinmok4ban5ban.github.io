require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userSchema = require('./schemas/userSchema');
const postSchema = require('./schemas/postSchema');
const bodyParser = require("body-parser");


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true})); // 이부분

mongoose.set("strictQuery", true)

mongoose
    .connect(process.env.URL, {
        // useUnifedTopology: true,
        useNewUrlParser: true,
    })
    .then(console.log("DB가 연결됨 ㅋㅋ"))

mongoose.connection.on("reconnected", ()=> {
    console.log("DB가 다시 연결됨 ㅋㅋ")
})

mongoose.connection.on("disconnected", ()=> {
    console.log("DB 연결 끊어짐 ㅋㅋ")
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/write.html', (req, res) => {
    res.sendFile(__dirname + '/write.html');
});

app.get('/post.html', (req, res) => {
    res.sendFile(__dirname + '/post.html');
});

app.post('/submit', (req, res) => {
    // 클라이언트에서 제출한 데이터는 req.body에 있을 것입니다.
    // formData를 JavaScript 변수에 저장하거나 다른 작업을 수행할 수 있습니다.  var nickname, choice, password, title, text

    const newPost = new postSchema({
        nickname: String(nickname),
        postkind: String(choice),
        password: String(password),
        title: String(title),
        content: String(text),
    });
    newPost.save()
    .then(post => {
        res.send('글이 성공적으로 등록되었습니다.');
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('글 저장 중 오류 발생');
    });
    // 응답 보내기 (예: 처리 결과를 클라이언트에게 알림)
});


app.listen(80, () => console.log('start'))