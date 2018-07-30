/**
 * An ActiveRules Activity defines a process and sets of rules around.
 */

const ActiveRulesObject = require('./ActiveRulesObject.js')

class Activity extends ActiveRulesObject {
  constructor(...args) {
    super(...args)
  }
}

module.exports = Activity