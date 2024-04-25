const Author = require("../models/author.model");

module.exports = {
    // READ ALL
    AllAuthors: (req, res) => {
        Author.find()
            .then((allAuthors) => {
                console.log(allAuthors);
                res.json(allAuthors);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // READ ONE
    GetAuthor: (req, res) => {
        const authorId = req.params.id;
        Author.findById(authorId)
            .then((author) => {
                if (!author) {
                    return res.status(404).json();
                }
                res.json(author);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // CREATE
    CreateAuthor: (req, res) => {
        Author.create(req.body)
            .then((CreatedAuthor) => {
                console.log(CreatedAuthor);
                res.status(201).json(CreatedAuthor);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // UPDATE
    UpdateAuthor: (req, res) => {
        const authorId = req.params.id;
        Author.findByIdAndUpdate(authorId, req.body, { new: true })
            .then((updatedAuthor) => {
                if (!updatedAuthor) {
                    return res.status(404).json();
                }
                res.json(updatedAuthor);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // DELETE
    DeleteAuthor: (req, res) => {
        const authorId = req.params.id;
        Author.findByIdAndDelete(authorId)
            .then((deletedAuthor) => {
                if (!deletedAuthor) {
                    return res.status(404).json();
                }
                res.status(204).send();
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    }
};
