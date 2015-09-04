var connectionFactory = require('../infra/connectionFactory');
var LivroDao = require('../infra/livroDao');

module.exports = function(app) {
    var controller = {};

    controller.form = function(req,res) {
        var connection = connectionFactory();
        var livroDao = new LivroDao(connection);

        livroDao.lista(function(error,results){
            res.render('promocoes/form',{lista:results});
        });
        
    }

    controller.salva = function(req,res) {
    	var promocao = req.body;

        app.get('io').emit("novaPromocao",promocao);
        res.redirect("/promocoes/form");
    };


    return controller;
}