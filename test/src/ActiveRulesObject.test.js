'use strict'

const ActiveRulesObject = require('../../src/ActiveRulesObject.js')
const assert = require('assert')

describe('ActiveRulesObject', function () {
  describe('has the correct parent and type', function () {
    const o = new ActiveRulesObject();
    const parent = Object.getPrototypeOf(Object.getPrototypeOf(o)).constructor.name;
    const className = o.constructor.name;
    
    it('is an object', function () {
      assert.equal(typeof o, 'object');
    });
    
    it('is named ActiveRulesObject', function () {
      assert.equal(className, 'ActiveRulesObject');
    });
    
    it('is a child of Object', function () {
      assert.equal(parent, 'Object');
    });
  })
})
