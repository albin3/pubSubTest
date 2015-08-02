'use strict';

var ioredis = require('redis');
var client = ioredis.createClient();

var num = 0;

client.subscribe('foo');
client.on('message', function(chanal, msg) {
  num++;
});

setInterval(function () {
  var current = num;
  num = 0;
  console.log('node_redis: ', (current/10), 'opt/s');
}, 10000);
