var Rx = require('rx');

// will pump out a value every second [0,,,1,,,2,,,]
var source = Rx.Observable.interval(1000).take(5);

// our standard Subscription
var sub1 = source.subscribe(
  x => console.log('1: onNext: %s', x),
  e => console.log('1: onError: %s', e),
  () => console.log('1: onCompleted'));

var sub2 = source.subscribe(
  x => console.log('2: onNext: %s', x),
  e => console.log('2: onError: %s', e),
  () => console.log('2: onCompleted'));

// Note how each subscription treats the Observable like it's own.
// Cold Observables start running on subscription, and each subscriber
// gets a seperate copy of the data (seperate observers exist in seperate universes)