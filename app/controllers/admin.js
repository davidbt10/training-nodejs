
const { check, validationResult } = require('express-validator');

module.exports.formulario_inclusao_noticia = function (app, request, res) {
    res.render('admin/form_add_noticia', { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function (app, req, res) {

    const noticia = req.body;

    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     // res.send(res.status(422).json({ errors: errors.array() }));
    //     res.render('admin/form_add_noticia', { validacao: errors.array(), noticia: noticia })
    //     return;
    // }

    const connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
        res.redirect('/noticias');
    });
}

module.exports.registerValidator = function () {
    return [
        check('titulo', 'Titulo é obrigatório').notEmpty(),
        check('resumo', 'Resumo é obrigatório').notEmpty(),
        check('resumo', 'Resumo deve conter entre 10 e 100 caracteres').isLength({ min: 10, max: 100 }),
        check('autor', 'Autor é obrigatório').notEmpty(),
        check('data_noticia', 'Data é obrigatório').notEmpty().isDate({ format: 'YYYY-MM-DD' }),
        check('noticia', 'Noticia é obrigatório').notEmpty()];
}