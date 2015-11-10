var Rx = require('rx');

var source = Rx.Observable.from(new Map([
	['key', 'value'],
	[42, 87],
	['myName', 'Benjamin Cohen']]))
	.map(kv => kv[0] + ': ' + kv[1]);

// our standard Subscription
var subscription = source.subscribe(
  x => console.log('onNext: %s', x),
  e => console.log('onError: %s', e),
  () => console.log('onCompleted'));