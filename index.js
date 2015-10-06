'use strict'

var isBlank = require('is-blank')
var isFunction = require('is-function')
var functionRegex = require('function-regex')

module.exports = function isNoop (value) {
  if (isFunction(value)) {
    var funcParts = value.toString().match(functionRegex())
    var args = funcParts[2]
    var body = funcParts[3]

    return isBlank(args) && isBlank(body)
  }

  return false
}
