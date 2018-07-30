'use strict'

const Activity = require('../../src/Activity.js')
const assert = require('assert')

describe('Activity', function () {
  describe('extends ActiveRulesObject', function () {
    
    const o = new Activity();
    const parent = Object.getPrototypeOf(Object.getPrototypeOf(o)).constructor.name
    const className = o.constructor.name
    
    it('is an object', function () {
      assert.equal(typeof o, 'object')
    })
    
    it('is named ActiveRulesError', function () {
      assert.equal(className, 'Activity')
    })
    
    it('is a child of ActiveRulesObject', function () {
      assert.equal(parent, 'ActiveRulesObject')
    })
  })
})
