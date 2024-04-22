const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    joke: {
        type: String,
        required: true
    },
    punchline: {
        type: String,
        default: 'general'
    }
}, { timestamps: true });

module.exports = mongoose.model('Joke', JokeSchema);
