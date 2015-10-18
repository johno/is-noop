import test from 'ava'
import isNoop from './'

const noops = [function() {}, function() { }, function ( ) {}]
const notNoops = [{}, [], '', null, function (hi) {}, function () { return }]

test('returns true when a noop is passed', t => {
  t.plan(noops.length)

  noops.forEach((noop) => {
    t.true(isNoop(noop))
  })
})

test('returns false for arguments that are not a noop', t => {
  t.plan(notNoops.length)

  notNoops.forEach((notNoop) => {
    t.false(isNoop(notNoop))
  })
})
