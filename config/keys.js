//keys.js figure out what set of credential to return
if(process.env.NODE_ENV === 'production'){
      module.exports = require('./prod')

} else {
     module.exports = require('./dev')


    }
