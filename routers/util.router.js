const router = require('express-promise-router')();

const { utilController } = require('../controllers/index');

const Util = (app) => 
{
    const _utilController = new utilController();

    //Routes
    router.post('/find',_utilController.find);
    router.post('/register',_utilController.create);

    //express
    app.use('/api/utils',router)
}

module.exports = Util;