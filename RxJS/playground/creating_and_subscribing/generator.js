var Rx = require('rx');

function* fibonacci () {
	var a = 1,
		  b = 1;

	while(true) {
		var current = a;
		yield current;
		a = b;
		b += current; 

	}
}

var source = Rx.Observable.from(fibonacci()).take(10);

// our standard Subscription
var subscription = source.subscribe(
  x => console.log('onNext: %s', x),
  e => console.log('onError: %s', e),
  () => console.log('onCompleted'));