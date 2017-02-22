import test from 'ava'
import { clean, validate, format } from './index'

test('clean', t => {
  t.is(clean('189726317'), '189726317')
  t.is(clean('18.972.631-7'), '189726317')
  t.is(clean('12.345.678-k'), '12345678K')
  t.is(clean('12*345*678*k'), '12345678K')
})

test('validate', t => {
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

test('format', t => {
  t.is(format('18.972.631-7'), '18.972.631-7')
  t.is(format('189726317'), '18.972.631-7')
  t.is(format('18*972*631*7'), '18.972.631-7')
  t.is(format('9068826-k'), '9.068.826-K')
})
