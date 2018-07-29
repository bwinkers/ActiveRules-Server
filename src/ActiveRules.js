'use strict'

const { Fact, Rule, Operator, Engine } = require('json-rules-engine')
const djv = require('djv')
const R = require('ramda')
const arError = require('./ActiveRulesError.js')

class ActiveRules {
  
  constructor () {
    this.Fact = Fact
    this.Rule = Rule
    this.Operator = Operator
    this.Engine = Engine
    this.Validator = djv
    this.R = R
    this.arError = arError
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
  rulesResult(rules, data) {
  
    /**
     * Validate, scrub and transform data.
     * Create errors and stop processing if invalid.
     * 
     * Process Rules and create actions and or errors.
     * Return RulesResults object.
     */

  }
}

module.exports = ActiveRules
