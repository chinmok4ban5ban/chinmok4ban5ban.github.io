const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    nickname: String,
    postkind: String,
    password: String,
    title: String,
    content: String
});

module.exports = model('post', postSchema);