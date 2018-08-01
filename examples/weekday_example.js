'use strict'

/*
 * Usage:
 *   node ./examples/weekday_example.js
 */
require('colors');
const ActiveRules = require('../src/ActiveRules.js')
const AR = new ActiveRules()
const Rule = AR.Rule
const Engine = AR.Engine
const weekday = require('./rules/weekday.json')
const weekend = require('./rules/weekend.json')

/**
 * Setup a new engine
 */
let engine = new Engine()

engine.on('success', event => {
  console.log('SUCCESS')
  console.log(event)
  console.log(facts)
})
.on('failure', event => {
  console.log('FAILURE')
  console.log(event)
  console.log(facts)
});

/**
 * Define Weekday Rule
 */
let weekdayRule = new Rule(weekday)

/**
 * Define Weekend Rule
 */
let weekendRule = new Rule(weekend)

// add rules to engine
engine.addRule(weekdayRule)
engine.addRule(weekendRule)

let facts = { dayOfWeek: 'Thursday' }

// run the engine
engine
  .run(facts)
  .then(triggeredEvents => { // engine returns a list of events with truthy conditions
    triggeredEvents.map(event => console.log(event.params.data.green))
  })
  .catch(console.log)

facts = { dayOfWeek: 'Saturday' }

// run the engine
engine
  .run(facts)
  .then(triggeredEvents => { // engine returns a list of events with truthy conditions
    //console.log(triggeredEvents)
    triggeredEvents.map(event => console.log(event.params.data.green))
  })
  .catch(console.log)
