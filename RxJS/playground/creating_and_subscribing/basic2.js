var Rx = require('rx');

// Observable [1,2,3,4,5]
var source = Rx.Observable.range(1, 5);

// Observer - defined by 3 possible scenarios
var observer = Rx.Observer.create(
	x => console.log('onNext: %s', x),
	e => console.log('onError: %s', e),
	() => console.log('onCompleted'));

// Subscription - an Observable is subscribed to by an Observer,
// which reacts whenever a new value enters the source, and is
// automatically disposed of when the source completes (or errors)
var subscription = source.subscribe(observer);
