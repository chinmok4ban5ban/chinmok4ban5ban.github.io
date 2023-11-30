const { Schema, model } = require('mongoose');

const textSchema = new Schema({
    chucheon: Number,

});

module.exports = model('Text', textSchema);