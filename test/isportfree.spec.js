'use strict';

var http = require('http');
var isPortFree = require('../');
var server = null;
var port = 8888;

describe('isPortFree', function () {

    beforeEach(function (done) {
        server = http.createServer();
        server.listen(port, done);
    });

    it('should be defined', function () {
        expect(isPortFree).toBeDefined();
    });

    it('should execute .then when port is free', function (done) {
        isPortFree(8081).then(function() {
            done();
        });
    });

    it('should execute .catch when port is busy', function (done) {
        isPortFree(port).catch(function(){
            done();
        });
    });

    afterEach(function (done) {
        server.close(done);
    });
});