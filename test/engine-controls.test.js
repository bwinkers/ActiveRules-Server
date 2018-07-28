'use strict'

const ActiveRules = require('../src/ActiveRules.js')
const AR = new ActiveRules()
const sinon = require('sinon')

function engineFactory (rules) {
  return new AR.Engine(rules)
}

describe('Engine: fact priority', () => {
  let engine
  let event = { type: 'adult-human-admins' }

  let eventSpy = sinon.spy()
  let ageStub = sinon.stub()
  let segmentStub = sinon.stub()

  function setup () {
    ageStub.resetHistory()
    segmentStub.resetHistory()
    eventSpy.resetHistory()
    engine = engineFactory()

    let conditions = {
      any: [{
        fact: 'age',
        operator: 'greaterThanInclusive',
        value: 18
      }]
    }
    let rule = factories.rule({ conditions, event, priority: 100 })
    engine.addRule(rule)

    conditions = {
      any: [{
        fact: 'segment',
        operator: 'equal',
        value: 'human'
      }]
    }
    rule = factories.rule({ conditions, event })
    engine.addRule(rule)

    engine.addFact('age', ageStub, { priority: 100 })
    engine.addFact('segment', segmentStub, { priority: 50 })
  }

  describe('stop()', () => {
    it('stops the rules from executing', async () => {
      setup()
      ageStub.returns(20) // success
      engine.on('success', (event) => {
        eventSpy()
        engine.stop()
      })
      await engine.run()
      expect(eventSpy).to.have.been.calledOnce()
      expect(ageStub).to.have.been.calledOnce()
      expect(segmentStub).to.not.have.been.called()
    })
  })
})
