const mongoose = require('mongoose')

//file of configuration Mongodb
const configMongo = require('../mongodb.json');

class Mongoose {

    async configMongodb()
    {
        //config database remote
        await mongoose.connect(`mongodb://${ configMongo.user }:${ configMongo.password }@${ configMongo.server }:${ configMongo.port}/${ configMongo.database }`,
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