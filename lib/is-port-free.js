'use strict';

var net = require('net');

module.exports = function (port) {

    return new Promise(function(resolve, reject) {

        var server = net.createServer();

        // reject if port in use
        server.once('error', function (err) {

            if (err.code === 'EADDRINUSE' || err.code === 'EACCES') {
                reject('port in use');
            }
        });

        // listen for connection and resolve if no errors
        server.once('listening', function () {

            server.once('close', function () {
                resolve(port);
            });

            server.close();
        });

        server.listen(port);
    });

};
