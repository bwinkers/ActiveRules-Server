'use strict'

const RulesResult = require('../../src/RulesResult.js')
const assert = require('assert')

describe('RulesResult', function () {
  describe('extends ActiveRulesObject', function () {
    
    const o = new RulesResult();
    const parent = Object.getPrototypeOf(Object.getPrototypeOf(o)).constructor.name
    const className = o.constructor.name
    
    it('is an object', function () {
      assert.equal(typeof o, 'object')
    })
    
    it('is named ActiveRulesError', function () {
      assert.equal(className, 'RulesResult')
    })
    
    it('is a child of ActiveRulesObject', function () {
      assert.equal(parent, 'ActiveRulesObject')
    })
  })
})
