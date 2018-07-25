const express = require('express');
const load = require('express-load')

//config app
const { Application } = require('./config/app.express.js')

//Database
const { Mongoose } = require('./config/mongoose.js')

class Server {

    constructor()
    {
        this.express = express();    
    }

    async config()
    {
        this.express.set('Port', process.env.PORT || 3000);

        await new Application().config(this.express);

        load("controllers").then("routers").into(this.express);
    }

    async configMongodb()
    {
        await new Mongoose().configMongodb()
    }



    async run()
    {   
        await this.config();
        
        await this.configMongodb();

        await this.express.listen(this.express.get('Port'), ()=>{
            console.log(`Server on Port ${ this.express.get('Port') }`);
        });
    };

}

//Load Server 
new Server().run();