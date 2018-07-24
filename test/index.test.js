'use strict'

const ActiveRules = require('../src/ActiveRules.js')
const AR = new ActiveRules()

function subject(rules) {
  return new AR.Engine(rules);
}

describe('json-business-subject', () => {
  it('treats each rule engine independently', () => {
    let engine1 = subject()
    let engine2 = subject()
    engine1.addRule(factories.rule())
    engine2.addRule(factories.rule())
    expect(engine1.rules.length).to.equal(1)
    expect(engine2.rules.length).to.equal(1)
  })
})
