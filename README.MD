# is-port-free

[![npm](https://img.shields.io/npm/dt/is-port-free.svg)](https://www.npmjs.com/package/is-port-free) [![Linked In](https://img.shields.io/badge/Linked-In-blue.svg)](https://www.linkedin.com/in/john-i-doherty) [![Twitter Follow](https://img.shields.io/twitter/follow/CambridgeMVP.svg?style=social&label=Twitter&style=plastic)](https://twitter.com/CambridgeMVP)

A simple node module to check if a TCP port is free on the local machine. See also [is-port-busy](https://github.com/john-doherty/is-port-busy)

## Installation

```bash
$ npm install --save is-port-free
```

## Example

```js
var isPortFree = require('is-port-free');

isPortFree(8080).then(function(){
    console.log('yes');
})
.catch(function(){
    console.log('no');
});
```

## License

Licensed under [ISC License](LICENSE) &copy; [John Doherty](https://twitter.com/CambridgeMVP)