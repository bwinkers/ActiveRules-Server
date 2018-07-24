'use strict'

const ActiveRules = require('../src/ActiveRules.js')
const AR = new ActiveRules()

describe('Operator', () => {
  describe('constructor()', () => {
    function subject (...args) {
      return new AR.Operator(...args)
    }

    it('adds the operator', () => {
      let operator = subject('startsWithLetter', (factValue, jsonValue) => {
        return factValue[0] === jsonValue
      })
      expect(operator.name).to.equal('startsWithLetter')
      expect(operator.cb).to.an.instanceof(Function)
    })

    it('operator name', () => {
      expect(() => {
        subject()
      }).to.throw(/Missing operator name/)
    })

    it('operator definition', () => {
      expect(() => {
        subject('startsWithLetter')
      }).to.throw(/Missing operator callback/)
    })
  })
})
