var Rx = require('rx');

var starttime = Date.now();

console.log('Start');

// will pump out a value every second [0,,,1,,,2,,,]
var source = Rx.Observable.interval(1000);

// publish converts a cold observable to a hot one
var hot = source.publish();

// we subscribe, but no value is pushed yet
hot.subscribe(
  x => console.log('1: onNext: %s', x + ' ' + getTimeElapsed(starttime)),
  e => console.log('1: onError: %s', e),
  () => console.log('1: onCompleted'));

console.log('First subscription attached ' + getTimeElapsed(starttime));

// connection is our hot observer - an observer that listens to the original cold observable
// and broadcasts to any other observers that subscribe
var connection = hot.connect();
console.log('Hot Observable connected ' + getTimeElapsed(starttime));

// sub1 immediately starts receiving values

// after 5 seconds attach second observer
setTimeout(() => {
	hot.subscribe(
  	  x => console.log('2: onNext: %s', x + ' ' + getTimeElapsed(starttime)),
	  e => console.log('2: onError: %s', e),
	  () => console.log('2: onCompleted'));

	console.log('Second subscription attached ' + getTimeElapsed(starttime));

	// after another 5 seconds dispose of the hot observer, which in turn disposes of the subscribers
	setTimeout(() => {
		connection.dispose();
		console.log('Connection terminated ' + getTimeElapsed(starttime));
	}, 5000);
}, 5000);

function getTimeElapsed (starttime) {
	return '(' + (Date.now() - starttime) + 'ms)';
}

