console.log('from-multiple');

// get the result element
var result = document.getElementById('result');
// get all the div elements
var sources = document.querySelectorAll('button');


// get clicks from any of the sources
var source = Rx.Observable.fromEvent(sources, 'click');

var totalClicks = 0;
result.innerHTML = "Click count: " + totalClicks;

// subscribe to it, on each event set the result to the current count
source.subscribe(e => result.innerHTML = "Click count: " + (++totalClicks));
