# rut.js 🇨🇱

Sencilla y pequeña libreria para validar y dar formato al RUT. Funciona en Node.js y Navegadores (Webpack, Browserify, etc.)

> Utilizada en producción para manejar mas de 13 millones de chilenos en [~Rutify – Rutificador~](https://rutify.cl/)

```js
// AMD
const { validate, clean, format, getCheckDigit } = require('rut.js')

// ES2015 Modules
import {  validate, clean, format, getCheckDigit } from 'rut.js'

// true
validate('18.972.631-7')
validate('18972631-7')
validate('189726317')
validate('9.068.826-k')
validate('9068826-k')
validate('9068826k')

// false
validate('18.972.631-0')
validate('18,972,631-7')
validate('18*972*631-7')
validate('18-972-631-7')
validate('error18.972.631-7')
validate('9068826-1')
validate('')
validate(189726317)
validate('0')
validate(0)

/**
 * Limpiar un RUT
 */

clean('189726317')      // '189726317'
clean('18.972.631-7')   // '189726317'
clean('12.345.678-k')   // '12345678K'
clean('12*345*678*k')   // '12345678K'
clean('000189726317')   // '189726317'

/**
 * Dar formato a un RUT
 */

format('18.972.631-7')  // '18.972.631-7'
format('189726317')     // '18.972.631-7'
format('18*972*631*7')  // '18.972.631-7'
format('9068826-k')     // '9.068.826-K'

// Dots es true por default
format('18.972.631-7', { dots: false })  // '18972631-7'
format('189726317', { dots: false })     // '18972631-7'
format('18*972*631*7', { dots: false })  // '18972631-7'
format('9068826-k', { dots: false })     // '9068826-K'

/**
 * Obtener el dígito verificador
 */
getCheckDigit('18.972.631')  // '7'
getCheckDigit('9068826')     // 'K'
```

## Instalación

```bash
npm install --save rut.js
yarn add rut.js
```

## Testing

```bash
npm install
npm test
```
