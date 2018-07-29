'use strict'

const { Fact, Rule, Operator, Engine } = require('json-rules-engine')

const djv = require('djv')
const R = require('ramda')

class ActiveRules {
  
  constructor () {
    this.Fact = Fact
    this.Rule = Rule
    this.Operator = Operator
    this.Engine = Engine
    this.Validator = djv
    this.R = R
  }
  
  /**
   * Process a set of data using provided rules.
   * An ActiveRules rulesResult object set will be returned. 
   * 
   * @param {Object} rules - An ActiveRules JSON rule definition
   * @param {Object} data - ActiveRules JSON data object 
   * @return {Object} rulesResult - ActiveRules rulesResult JSON object
   * @return {Object} rulesResult.data - modified, validated data
   * @return {Object} rulesResult.errors - ActiveRules errors object
   * @return {Object} rulesResult.actions - ActiveRules Actions object
   */
  rulesResult(rules, data) {
    

  }
}

module.exports = ActiveRules
