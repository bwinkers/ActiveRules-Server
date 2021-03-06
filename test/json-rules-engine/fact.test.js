'use strict'

const ActiveRules = require('../../src/ActiveRules.js')
const AR = new ActiveRules()

describe('Fact', () => {
  function subject (id, definition, options) {
    return new AR.Fact(id, definition, options)
  }
  describe('Fact::constructor', () => {
    it('works for constant facts', () => {
      let fact = subject('factId', 10)
      expect(fact.id).to.equal('factId')
      expect(fact.value).to.equal(10)
    })

    it('works for dynamic facts', () => {
      let fact = subject('factId', () => 10)
      expect(fact.id).to.equal('factId')
      expect(fact.calculate()).to.equal(10)
    })

    it('allows options to be passed', () => {
      let opts = { test: true, cache: false }
      let fact = subject('factId', 10, opts)
      expect(fact.options).to.eql(opts)
    })

    describe('validations', () => {
      it('throws if no id provided', () => {
        expect(subject).to.throw(/factId required/)
      })

      it('throws if no definition provided', () => {
        expect(subject.bind(null, 'factId')).to.throw(/facts must have a value or method/)
      })
    })
  })

  describe('Fact::types', () => {
    it('initializes facts with method values as dynamic', () => {
      let fact = subject('factId', () => {})
      expect(fact.type).to.equal(AR.Fact.DYNAMIC)
      expect(fact.isDynamic()).to.be.true()
    })

    it('initializes facts with non-methods as constant', () => {
      let fact = subject('factId', 2)
      expect(fact.type).to.equal(AR.Fact.CONSTANT)
      expect(fact.isConstant()).to.be.true()
    })
  })
})
