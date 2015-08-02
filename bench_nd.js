'use strict';

var cp = require('child_process');
var numPubliser = 3;
var publisher = [];

process.on('exit', function(e) {
  ndsubscriber.kill('SIGHUP');
  for (var i=0; i<publisher.length; i++){
    publisher[i].kill('SIGHUP');
  }
});

var ndsubscriber = cp.fork('./ndsubscriber');

//publish
for (var i=0; i<numPubliser; i++) {
  var publish = cp.fork('./ndpublisher');
  publisher.push(publish);
}
