'use strict';

var ioredis = require('ioredis');
var client = new ioredis();

var num = 0;

client.subscribe('foo');
client.on('message', function(chanal, msg) {
  num++;
});

setInterval(function () {
  var current = num;
  num = 0;
  console.log('ioredis: ', (current/10), 'opt/s');
}, 10000);
