'use strict'

const ActiveRulesError = require('../../src/ActiveRulesError.js')
const assert = require('assert')

describe('ActiveRulesError', function () {
  it('extends ActiveRulesObject', function () {
    
    const o = new ActiveRulesError();
    const parent = Object.getPrototypeOf(Object.getPrototypeOf(o)).constructor.name;
    const className = o.constructor.name;
    
    it('is an object', function () {
      assert.equal(typeof o, 'object');
    });
    
    it('is named ActiveRulesError', function () {
      assert.equal(className, 'ActiveRulesError');
    });
    
    it('is a child of ActiveRulesObject', function () {
      assert.equal(parent, 'ActiveRulesObject');
    });
  })
})
