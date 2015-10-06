'use strict'

var test = require('tape')
var isNoop = require('..')

var notNoops = [{}, [], '', null, function (hi) {}, function () { return }]

test('is-noop', function (t) {
  t.plan(3)

  t.ok(isNoop(function() {}))
  t.ok(isNoop(function() { }))
  t.ok(isNoop(function( ) {}))
})

test('is-noop returns false for arguments that are not a noop', function (t) {
  t.plan(6)

  notNoops.forEach(function (notNoop) {
    t.ok(!isNoop(notNoop))
  })
})
