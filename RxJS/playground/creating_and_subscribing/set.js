var Rx = require('rx');

var set = new Set([1,2,3,4,5,1,2,6]);

// Converts a Set to an observable sequence
var source = Rx.Observable.from(set);

// Prints out each item
var subscription = source.subscribe(
  x => console.log('onNext: %s', x),
  e => console.log('onError: %s', e),
  () => console.log('onCompleted'));

// => onNext: 1
// => onNext: 2
// => onNext: 3
// => onNext: 4
// => onNext: 5
// => onCompleted