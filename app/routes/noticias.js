
module.exports = function (app) {

    app.get('/noticias', function (req, res) {

        const connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function (error, result) {
            res.render('noticias/noticias', { noticias: result });
        });
    })
}