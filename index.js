const clean = rut => {
  return (rut || typeof rut === 'string')
  ? rut.toString().replace(/[^0-9kK]+/g, '').toUpperCase()
  : ''
}

const validate = rut => {
  if (!rut || typeof rut !== 'string') { return false }
  if (!/^(\d{1,3}(\.?\d{3}){2})\-?([\dkK])$/.test(rut)) {
    return false
  }

  rut = clean(rut)

  let t = parseInt(rut.slice(0, -1), 10)
  let m = 0
  let s = 1

  while (t > 0) {
    s = (s + t % 10 * (9 - m++ % 6)) % 11
    t = Math.floor(t / 10)
  }

  const v = (s > 0) ? (s - 1) + '' : 'K'
  return (v === rut.slice(-1))
}

const format = rut => {
  rut = clean(rut)

  let result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1)
  for (let i = 4; i < rut.length; i += 3) {
    result = rut.slice(-3 - i, -i) + '.' + result
  }

  return result
}

module.exports = { validate, clean, format }