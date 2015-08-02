'use strict';

var cp = require('child_process');
var numPubliser = 3;
var publisher = [];

process.on('exit', function(e) {
  iosubscriber.kill('SIGHUP');
  for (var i=0; i<publisher.length; i++){
    publisher[i].kill('SIGHUP');
  }
});

var iosubscriber = cp.fork('./iosubscriber');

//publish
for (var i=0; i<numPubliser; i++) {
  var publish = cp.fork('./ndpublisher');
  publisher.push(publish);
}
