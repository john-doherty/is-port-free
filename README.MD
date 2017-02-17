# is-port-free

A Node.js module to check if a TCP port is free.

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

[ISC License](LICENSE) &copy; 2016 [John Doherty](https://courseof.life/johndoherty)