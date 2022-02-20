const indexController = require();

module.exports = (app) => {
    app.get('/', indexController.home);
} 