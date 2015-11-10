var Rx = require('rx');

var starttime = Date.now();
console.log('Start time: ' + starttime);

/* 3 seconds for the first onNext */
/* 1 second between each subsequent onNext */
// w/ form { value: (observable index), timestamp: (time at onNext)}
var source = Rx.Observable.timer(3000, 1000)
	.timestamp()
	.map(x => (x.timestamp - starttime)/1000 + ' seconds since start') // map to string
	.take(5); // take 5 otherwise this stream never completes!

// our standard Subscription
var subscription = source.subscribe(
  x => console.log('onNext: %s', x),
  e => console.log('onError: %s', e),
  () => console.log('onCompleted'));