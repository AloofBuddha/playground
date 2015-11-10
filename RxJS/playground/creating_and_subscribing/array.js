var Rx = require('rx');

var source = Rx.Observable.from([1,2,3,4,5]);

// our standard Subscription
var subscription = source.subscribe(
  x => console.log('onNext: %s', x),
  e => console.log('onError: %s', e),
  () => console.log('onCompleted'));