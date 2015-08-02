'use strict';

var redis = require('redis');
var publisher = redis.createClient();

function pub() {
  publisher.publish('foo', 'bar');
  setTimeout(pub, 0);
}

for (var i=0;i<100000; i++) {
  pub();
}

process.on('exit', function(e) {
  console.log('ndpublisher exit');
});
