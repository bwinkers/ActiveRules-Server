'use strict'

const ActiveRules = require('../../src/ActiveRules.js')
const AR = new ActiveRules()
const R = AR.R
const assert = require('assert')
const jsv = require('jsverify')

describe('R', () => {
  describe('add', function () {
    it('adds together two numbers', function () {
      assert.equal(R.add(3, 7), 10)
    })
  })

  describe('add properties', function () {
    jsv.property('commutative', jsv.number, jsv.number, function (a, b) {
      return R.add(a, b) === R.add(b, a)
    })

    jsv.property('associative', jsv.number, jsv.number, jsv.number, function (a, b, c) {
      return R.add(a, R.add(b, c)) === R.add(R.add(a, b), c)
    })

    jsv.property('identity', jsv.number, function (a) {
      return R.add(a, 0) === a && R.add(0, a) === a
    })
  })
})
