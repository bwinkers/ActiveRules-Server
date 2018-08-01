/**
 * The main ActiveulRules class, everything it can do can be accessed through this.
 */
const { Fact, Rule, Operator, Engine } = require('json-rules-engine')
const djv = require('djv')
const R = require('ramda')
const arError = require('./ActiveRulesError.js')
const arObject = require('./ActiveRulesObject.js')
const Activity = require('./Activity.js')
const RulesResult = require('./RulesResult.js')

class ActiveRules {
  
  constructor () {
    this.Fact = Fact
    this.Rule = Rule
    this.Operator = Operator
    this.Engine = Engine
    this.Validator = djv
    this.R = R
    this.Error = arError
    this.Object = arObject
    this.Activity = Activity
  }
  
  /**
   * Validate then run rules
   */
  async run(rules, data) {
    
    try {
      
      data = await this.validate(data);
      return await this.runRules(rules, data);

    } catch(error) {
      return error
    }
  }
  
  /**
   * Process a set of data using provided rules.
   * An ActiveRules rulesResult object set will be returned. 
   * 
   * @param {Object} rules - An ActiveRules JSON rule definition
   * @param {Object} data - ActiveRules JSON data object 
   * 
   * @return {Object} rulesResult - ActiveRules RulesResult JSON object
   * @return {Object} rulesResult.data - modified, validated data
   * @return {Object} rulesResult.errors - ActiveRules Errors object
   * @return {Object} rulesResult.actions - ActiveRules Actions object
   */
  async runRules(rules, data) {
    
    try {
      
      const engine = new this.Engine
      
      rules.forEach(rule => {
        engine.addRule(rule)
      })
      
      const baseResult = await engine.run(data)
      
      delete data['success-events']
      
      return { actions: baseResult, data };

    } catch(error) {
      return error
    }
  }
  
  /**
   * Validate data
   */
  async validate(data) {
    
    try {
      
      return data

    } catch(error) {
      return error
    }
  }
}

module.exports = ActiveRules
