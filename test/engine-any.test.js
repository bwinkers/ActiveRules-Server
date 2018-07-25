'use strict'

const ActiveRules = require('../src/ActiveRules.js')
const AR = new ActiveRules()
const sinon = require('sinon')

function engineFactory(rules) {
  return new AR.Engine(rules);
}

describe('Engine: "any" conditions', () => {
  let engine

  describe('supports a single "any" condition', () => {
    let event = {
      type: 'ageTrigger',
      params: {
        demographic: 'under50'
      }
    }
    let conditions = {
      any: [{
        'fact': 'age',
        'operator': 'lessThan',
        'value': 50
      }]
    }
    let eventSpy = sinon.spy()
    let ageSpy = sinon.stub()
    beforeEach(() => {
      eventSpy.resetHistory()
      let rule = factories.rule({ conditions, event })
      engine = engineFactory()
      engine.addRule(rule)
      engine.addFact('age', ageSpy)
      engine.on('success', eventSpy)
    })

    it('emits when the condition is met', async () => {
      ageSpy.returns(10)
      await engine.run()
      expect(eventSpy).to.have.been.calledWith(event)
    })

    it('does not emit when the condition fails', () => {
      let eventSpy = sinon.spy()
      ageSpy.returns(75)
      engine.run()
      expect(eventSpy).to.not.have.been.calledWith(event)
    })
  })

  describe('supports "any" with multiple conditions', () => {
    let conditions = {
      any: [{
        'fact': 'age',
        'operator': 'lessThan',
        'value': 50
      }, {
        'fact': 'segment',
        'operator': 'equal',
        'value': 'european'
      }]
    }
    let event = {
      type: 'ageTrigger',
      params: {
        demographic: 'under50'
      }
    }
    let eventSpy = sinon.spy()
    let ageSpy = sinon.stub()
    let segmentSpy = sinon.stub()
    beforeEach(() => {
      eventSpy.resetHistory()
      ageSpy.resetHistory()
      segmentSpy.resetHistory()
      let rule = factories.rule({ conditions, event })
      engine = engineFactory()
      engine.addRule(rule)
      engine.addFact('segment', segmentSpy)
      engine.addFact('age', ageSpy)
      engine.on('success', eventSpy)
    })

    it('emits an event when any condition is met', async () => {
      segmentSpy.returns('north-american')
      ageSpy.returns(25)
      await engine.run()
      expect(eventSpy).to.have.been.calledWith(event)

      segmentSpy.returns('european')
      ageSpy.returns(100)
      await engine.run()
      expect(eventSpy).to.have.been.calledWith(event)
    })

    it('does not emit when all conditions fail', async () => {
      segmentSpy.returns('north-american')
      ageSpy.returns(100)
      await engine.run()
      expect(eventSpy).to.not.have.been.calledWith(event)
    })
  })
})
