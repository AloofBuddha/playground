var Rx = require('rx');

var message = [];
Rx.Observable.from(['hello', 'world']).subscribe(
	function (x) { 
		console.log('onNext: %s', x);
		message.push(x); 
	},
	function (e) { console.log('onError: %s', e); },
	function () { 
		console.log('onComplete: %s', message.join(' ')); 
	});

