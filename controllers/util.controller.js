const { ValueKey } = require('../models/index');

class util
{
    async find(request,response)
    {
        const { key , language } = request.body;
        
        const values = await ValueKey.find({ key , language });

        response.status(200).json(values);
    }

    async create(request,response)
    {
        const { valuekey } = request.body;

        new ValueKey(valuekey).save();

        response.status(200).json(valuekey);
    }
}

module.exports = 
{
    util
}