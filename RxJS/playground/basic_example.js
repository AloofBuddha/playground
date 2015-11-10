var Rx = require('rx');

// Creates an Observable sequence [1,2,3,4,5]. 
// Note that this sequence Completes
var source = Rx.Observable.range(1, 5);

// We 'subscribe' to the Observable by providing it an (anonymous) Observer
var subscription = source.subscribe(
    x => console.log('onNext: ' + x),
    e => console.log('onError: ' + e.message),
    () => console.log('onCompleted'));

// => onNext: 1
// => onNext: 2
// => onNext: 3
// => onNext: 4
// => onNext: 5
// => onCompleted