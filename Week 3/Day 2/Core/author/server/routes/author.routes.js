const AuthorControllers = require("../controllers/author.controllers");

module.exports = (app) => {
    // READ ALL
    app.get("/api/authors", AuthorControllers.AllAuthors);

    // READ One
    app.get("/api/authors/:id", AuthorControllers.GetAuthor);

    // CREATE
    app.post("/api/authors/new", AuthorControllers.CreateAuthor);

    // UPDATE
    app.patch("/api/authors/:id", AuthorControllers.UpdateAuthor);

    // DELETE
    app.delete("/api/authors/:id", AuthorControllers.DeleteAuthor);
};
