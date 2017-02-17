# is-port-free

A simple node module to check if a TCP port is free on the local machine.

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