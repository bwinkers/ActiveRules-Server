'use strict'

const ActiveRules = require('../../src/ActiveRules.js')
const AR = new ActiveRules()
const assert = require('assert')

describe('ActiveRules', function () {
  describe('Exposes json-rules-engine classes', function () {
    it('has a Fact property', function () {
      return ActiveRules.hasOwnProperty('Fact')
    })
    it('has a Rule property', function () {
      return ActiveRules.hasOwnProperty('Rule') 
   })
    it('has an Operator property', function () {
      return ActiveRules.hasOwnProperty('Operator')
    })
    it('has an Engine property', function () {
      return ActiveRules.hasOwnProperty('Engine')
    })
  })
  describe('Provides a JSON validator', function () {
    it('has a Validator property', function () {
      return ActiveRules.hasOwnProperty('Validator')
    })
  })
  describe('Exposes Ramda functions', function () {
    it('the `R` property exists', function () {
      return ActiveRules.hasOwnProperty('R')
    })
  })
})
