console.log('basic-rx');

// get the element
var result = document.getElementById('result');

// create a 'mousemove' observable from the html event
var source = Rx.Observable.fromEvent(document, 'mousemove');

// subscribe to it, on each event set the result to the current cood
var subscription = source.subscribe(e => result.innerHTML = e.clientX + ', ' + e.clientY);

// note how this will run forever, as mousemove is a hot observable, and it doesn't end