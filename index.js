'use strict'

function clean (rut) {
  return typeof rut === 'string'
    ? rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase()
    : ''
}

function validate (rut) {
  if (typeof rut !== 'string') {
    return false
  }
  if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(rut)) {
    return false
  }

  rut = clean(rut)

  var t = parseInt(rut.slice(0, -1), 10)
  var m = 0
  var s = 1

  while (t > 0) {
    s = (s + (t % 10) * (9 - m++ % 6)) % 11
    t = Math.floor(t / 10)
  }

  var v = s > 0 ? '' + (s - 1) : 'K'
  return v === rut.slice(-1)
}

function format (rut) {
  rut = clean(rut)

  var result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1)
  for (var i = 4; i < rut.length; i += 3) {
    result = rut.slice(-3 - i, -i) + '.' + result
  }

  return result
}

module.exports = { validate: validate, clean: clean, format: format }
