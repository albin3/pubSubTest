'use strict';

var ioredis = require('ioredis');
var publisher = new ioredis();

process.on('exit', function() {
  console.log('iopublisher exit');
});

function pub() {
  publisher.publish('foo', 'bar');
  setTimeout(pub, 0);
}

for (var i=0;i<100000; i++) {
  pub();
}
