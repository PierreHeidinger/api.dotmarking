const jwt = require('jsonwebtoken')

const { User } = require('../models/index')


class authentication 
{

    async register(request ,response)
    {
        const user = request.body;

        new User(user).save();
        
        response.status(200).json(user)
    }

    async login(request,response)
    {
        const creadentials = request.body;

        const user = await  User.findOne({
            user : creadentials.user ,
            password : creadentials.password,
            company :  creadentials.company
        })

        if(!user) throw new Error("Error in credentials");
        
        let token = await jwt.sign(JSON.stringify(user),'secreatKey')

        response.status(200).json({
            token_auth : token
        })
    }


}

module.exports  = {
    authentication
}