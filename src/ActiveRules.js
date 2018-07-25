'use strict'

const { Fact, Rule, Operator, Engine } = require('json-rules-engine')

const djv = require('djv');

class ActiveRules {
  constructor () {
    this.Fact = Fact
    this.Rule = Rule
    this.Operator = Operator
    this.Engine = Engine
    this.Validator = djv;
  }
}

module.exports = ActiveRules
