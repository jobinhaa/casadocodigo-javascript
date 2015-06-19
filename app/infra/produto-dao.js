module.exports = function(app) {

    app.livroDao = function(connection) {
        this.salva = function(livro,callback) {
            connection.query('INSERT INTO livros SET ?', livro, callback);
        }

        this.lista = function(callback) {
            connection.query('select * from livros',callback);
        }
        return this;
    }
}