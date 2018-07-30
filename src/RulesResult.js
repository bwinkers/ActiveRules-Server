/**
 * A results object created by prcoessing a date with rules.
 */

const ActiveRulesObject = require('./ActiveRulesObject.js')

/**
 * Defines ActiveRules RulesResult functionality
 */
class RulesResult extends ActiveRulesObject {
  constructor(...args) {
    super(...args)
  }
}

module.exports = RulesResult
