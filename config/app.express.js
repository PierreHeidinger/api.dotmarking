const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')


class Application {

    async config(app)
    {       
          //middlewares
          app.use(express.json());
          app.use(cors());
          app.use(helmet());
          app.use(compression());

          return app;
    }

}

module.exports = {
    Application : Application
}