# rut.js 🇨🇱

[![Build Status](https://travis-ci.org/jlobos/rut.js.svg?branch=master)](https://travis-ci.org/jlobos/rut.js)
[![Build status](https://ci.appveyor.com/api/projects/status/q8ybcb57kl31thg7?svg=true)](https://ci.appveyor.com/project/jlobos/rut-js)
[![bitHound Code](https://www.bithound.io/github/jlobos/rut.js/badges/code.svg)](https://www.bithound.io/github/jlobos/rut.js)
[![bitHound Dependencies](https://www.bithound.io/github/jlobos/rut.js/badges/dependencies.svg)](https://www.bithound.io/github/jlobos/rut.js/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/jlobos/rut.js/badges/devDependencies.svg)](https://www.bithound.io/github/jlobos/rut.js/master/dependencies/npm)

Sencilla y pequeña libreria para validar y dar formato al RUT. Funciona en Node.js y Navegadores (Webpack, Browserify) 

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

/**
 * Limpiar un RUT
 */

clean('189726317')      // '189726317'
clean('18.972.631-7')   // '189726317'
clean('12.345.678-k')   // '12345678K'
clean('12*345*678*k')   // '12345678K'

/**
 * Dar formato a un RUT
 */

format('18.972.631-7')  // '18.972.631-7'
format('189726317')     // '18.972.631-7'
format('18*972*631*7')  // '18.972.631-7'
format('9068826-k')     // '9.068.826-K'
```

## Instalación

```
npm i rut.js
```

## Testing

```
npm i
npm test
```

> Librería basada en el código de [platanus/angular-rut](https://github.com/platanus/angular-rut)
