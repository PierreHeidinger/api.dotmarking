const router = require('express-promise-router')();

const { authenticationController } = require('../controllers/index')

const Authentication = (app) => 
{
    const _authentication = new authenticationController();


    //Routes
    router.post('/register',_authentication.register);

    router.post('/login',_authentication.login);

    //express
    app.use('/api',router)
}

module.exports = Authentication;