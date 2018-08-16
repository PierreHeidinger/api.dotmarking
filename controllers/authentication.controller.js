const jwt = require('jsonwebtoken')
const appConfiguration = require('../app.json')
const { User } = require('../models/index')


class authentication 
{
    async register(request ,response)
    {
        const parameters = request.body;

        const existUser = await User.findOne({
            user : parameters.user,
            company : parameters.company
        });
    
        if(existUser) throw new Error('User Exists');

        new User(parameters).save();
        
        response.status(200).json(parameters)
    };

    async login(request,response)
    {
        const key = appConfiguration.SecretKeyToken;
        const creadentials = request.body;

        const user = await findUser(creadentials);
        
        const objectToken = 
        {
            _id : user._id,
            user : user.user,
            company : user.company
        };

        const token = await jwt.sign(objectToken,key,
        {
            expiresIn : 180 //30 seconds
        })

        response.status(200).json({
            user : user.user,
            token_auth : token
        })
    };

    async authenticate(request,responde,next)
    {
        const key = appConfiguration.SecretKeyToken;
        const token = request.headers['x-access-token'];

        if (!token) return responde.status(401).send({ auth: false, message: 'No token provided.' });

        const decode = await jwt.verify(token,key);

        next();

    };

    async verifySession(request,response)
    {
        console.log('entro')

        const key = appConfiguration.SecretKeyToken;
        const token = request.headers['x-access-token'];
        console.log(token)
        const decode = await jwt.verify(token,key);

        if(decode) response.status(200).json({ auth : true });
    };

    async getDecodeToken(request)
    {
        const key = appConfiguration.SecretKeyToken;
        const token = request.headers['x-access-token'];

        return await jwt.verify(token,key);
    };
}

// Private Functions 
async function findUser(creadentials)
{
    const user = await  User.findOne({
        user : creadentials.user ,
        password : creadentials.password,
        company :  creadentials.company
    })

    if(!user) throw new Error("Error in credentials");

    return user;
};


module.exports  = {
    authentication
}