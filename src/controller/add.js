const Word = require('../models/words')

module.exports.add = async (req, res) => {
    const word = req.body.word;
    let parentID = 'start'
    for (let i = 0; i < word.length; i++) {

        try {
            const char = await Word.findOne({ character: word[i], parentID });
            if (char != null) {
                if (i == word.length - 1) {
                    char.isTeminated = true;
                    char.save();
                }
                parentID = char._id;
            }
            else {
                const newChar = new Word({
                    character: word[i],
                    parentID,
                    isTeminated: i == word.length - 1
                })
                const newAdded = await newChar.save();
                parentID = newAdded._id;
            }
        } catch (error) {

        }
    }
    res.json({ msg: word });
}