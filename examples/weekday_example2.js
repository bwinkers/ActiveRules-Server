'use strict'

/*
 * Usage:
 *   node ./examples/weekday_example.js
 */
require('colors')
const ActiveRules = require('../src/ActiveRules.js')
const AR = new ActiveRules()
const weekday = require('./rules/weekday.json')
const weekend = require('./rules/weekend.json')

const rules = [weekday, weekend];

const days = [
  { dayOfWeek: 'Monday'},
  { dayOfWeek: 'Tuesday'},
  { dayOfWeek: 'Wednesday'},
  { dayOfWeek: 'Thursday'},
  { dayOfWeek: 'Friday'},
  { dayOfWeek: 'Saturday'},
  { dayOfWeek: 'Sunday'}
]

days.forEach(data => {
  AR.run(rules, data)
    .then(rulesResult => {
      console.log(rulesResult)
  })
})

