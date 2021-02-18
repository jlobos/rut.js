const test = require('ava')
const { clean, validate, format, getCheckDigit } = require('./index')

test('clean', (t) => {
  t.is(clean('189726317'), '189726317')
  t.is(clean('18.972.631-7'), '189726317')
  t.is(clean('12.345.678-k'), '12345678K')
  t.is(clean('12*345*678*k'), '12345678K')
  t.is(clean('0018.972.631-7'), '189726317')
  t.is(clean('00000189726317'), '189726317')
})

test('validate', (t) => {
  t.true(validate('18.972.631-7'))
  t.true(validate('18972631-7'))
  t.true(validate('189726317'))
  t.true(validate('9.068.826-k'))
  t.true(validate('9068826-k'))
  t.true(validate('9068826k'))

  t.false(validate('18.972.631-0'))
  t.false(validate('18,972,631-7'))
  t.false(validate('18*972*631-7'))
  t.false(validate('18-972-631-7'))
  t.false(validate('error18.972.631-7'))
  t.false(validate('9068826-1'))
  t.false(validate(''))
  t.false(validate(189726317))
  t.false(validate('0'))
  t.false(validate(0))
})

test('format', (t) => {
  t.is(format('18.972.631-7'), '18.972.631-7')
  t.is(format('189726317'), '18.972.631-7')
  t.is(format('18*972*631*7'), '18.972.631-7')
  t.is(format('9068826-k'), '9.068.826-K')
})

test('does not validate rut with 0 on most right digit', t => {
  t.false(validate('00.000.000-0'))
  t.false(validate('00000000-0'))
  t.false(validate('0000000000000000000000-0'))
})

test('getCheckDigit', (t) => {
  t.is(getCheckDigit('18.657.499-'), '0')
  t.is(getCheckDigit('6.383.287'), '1')
  t.is(getCheckDigit('13.466.350'), '2')
  t.is(getCheckDigit('3,966,753'), '3')
  t.is(getCheckDigit('4132650'), '6')
  t.is(getCheckDigit('18972631'), '7')
  t.is(getCheckDigit('9068826'), 'K')
  t.is(getCheckDigit('14774764'), '0')
})

test('getCheckDigit: pass character like a RUT', (t) => {
  const { message } = t.throws(() => {
    getCheckDigit('Felipe Camiroaga')
  })
  t.is(message, '"Felipe Camiroaga" as RUT is invalid')
})

test('getCheckDigit: pass 0 like a RUT', (t) => {
  const { message } = t.throws(() => {
    getCheckDigit(0)
  })
  t.is(message, '"0" as RUT is invalid')
})
