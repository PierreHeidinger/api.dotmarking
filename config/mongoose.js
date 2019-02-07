const mongoose = require('mongoose')

class Mongoose {

    async configMongodb()
    {
        const user = process.env.DB_USER;
        const password = process.env.DB_PASSWORD;
        const server = process.env.DB_SERVER_PATH;
        const port = process.env.DB_PORT;
        const database = process.env.DB_DATA_BASE;

        const connection = `mongodb://${ user }:${ password }@${ server }:${ port }/${ database }`;

        //config database remote
        await mongoose.connect(connection,
        { 
            useNewUrlParser: true 
        })
        .then(mongodb => console.log('server to mongo connected :D'))
        .catch(err => console.error(err));
    };

}

module.exports = {
    Mongoose : Mongoose
}