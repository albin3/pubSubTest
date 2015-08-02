'use strict';

var ioredis = require('redis');
var client = ioredis.createClient();

var num = 0;
var begin = new Date().getTime();

client.subscribe('foo');
client.on('message', function(chanal, msg) {
  num++;
});

setInterval(function () {
  var now = new Date().getTime();
  console.log('node_redis: ', (num/(now-begin)*1000), 'opt/s');
}, 10000);
