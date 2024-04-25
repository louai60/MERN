const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is Required"],
        minlength: [3, "{PATH} Must Have at least 3 Characters"]
    }
}, { timestamps: true });

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
