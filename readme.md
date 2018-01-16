# rut.js 🇨🇱

[![Build Status](https://travis-ci.org/jlobos/rut.js.svg?branch=master)](https://travis-ci.org/jlobos/rut.js)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Sencilla y pequeña libreria para validar y dar formato al RUT. Funciona en Node.js y Navegadores (Webpack, Browserify)

> Utilizada en producción para manejar mas de 13 millones de chilenos en [Rutify – Rutificador](https://rutify.cl/) 

```js
const { validate, clean, format } = require('rut.js')

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
```

## Instalación

```bash
npm install --save rut.js
```

## Testing

```bash
npm install
npm test
```

## License

MIT © [Jesus Lobos](https://jlobos.com/)
