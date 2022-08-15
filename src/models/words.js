const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    character: {
        type: String,
        require: true
    },
    parentID: {
        type: String,
        require: true
    },
    isTeminated: {
        type: Boolean,
        require: true,
        default: false
    }
})

const Word = mongoose.model('word', wordSchema);

module.exports = Word;