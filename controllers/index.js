const { authentication } = require('./authentication.controller')
const { util } = require('./util.controller')

module.exports = {
    authenticationController : authentication ,
    utilController : util
}