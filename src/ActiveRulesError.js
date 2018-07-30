const ActiveRulesObject = require('./ActiveRulesObject.js')

class ActiveRulesError extends ActiveRulesObject {
  
  constructor(...args) {
    super(...args)
  }
}

module.exports = ActiveRulesError;