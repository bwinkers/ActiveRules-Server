'use strict'

const { Fact, Rule, Operator, Engine } = require( 'json-rules-engine');

class ActiveRules {
  constructor () {
    this.Fact = Fact;
    this.Rule = Rule;
    this.Operator = Operator;
    this.Engine = Engine;
  }
}

module.exports = ActiveRules