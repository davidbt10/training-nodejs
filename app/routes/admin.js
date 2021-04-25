module.exports = function (app) {
    app.get('/formulario_inclusao_noticia', function (req, res) {
        res.render('admin/form_add_noticia');
    })

    app.post('/noticias/salvar', function (req, res) {

        let noticia = req.body;
        const connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.salvarNoticia(connection, noticia, function (error, result) {
            res.redirect('/noticias');
        });

    })
};