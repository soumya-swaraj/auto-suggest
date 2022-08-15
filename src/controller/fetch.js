const Word = require("../models/words");

exports.halfWay = async (req, res, next) => {
    if(req.body.word == 0){
        return res.json({msg: 'Put some character'})
    }
    const word = req.body.word;
    let parentID = 'start';
    for (let i = 0; i < word.length; i++) {
        const char = await Word.findOne({ character: word[i], parentID });
        parentID = char._id;
    }
    req.parentID = parentID;
    next();
}

exports.fetch = async (req, res) => {
    let words = await getWordsFromNode(req.body.word[req.body.word.length - 1], req.parentID);
    words = words.map((w) => { return req.body.word.substring(0, req.body.word.length - 1) + w })
    res.json(words)
}

const getWordsFromNode = async (currentChar, id) => {
    let words = [];
    const chars = await Word.find({ parentID: id });
    if (chars.length == 0) {
        return [currentChar];
    }
    for (let i = 0; i < chars.length; i++) {
        const currentChildChar = chars[i];
        const _words = await getWordsFromNode(currentChildChar.character, currentChildChar._id);
        const tempWord = _words.map((w) => { return currentChar + w });
        words = words.concat(tempWord);
    }
    return words;
}