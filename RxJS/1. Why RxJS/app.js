// grab the DOM elements by id
var $input = $('#input'),
    $results = $('#results');

// 'keyup' event stream
var keyupStream = Rx.Observable.fromEvent($input, 'keyup');
var queryStream = keyupStream // for each keyup event in keyupStream
				  // map to $input value
				  .map(e => e.target.value)
				  // remove any $input values <= 2
    			  .filter(text => text.length > 2)
    			  // 'collapse' events <500ms apart into one (latest) event
    			  .throttle(500)
    			  // filter any subsequent events where value isn't changed (i.e. 'left arrow key press')
    			  .distinctUntilChanged();

// for the *latest* query in the queryStream, map to resulting searchWikipedia data
var suggestions = distinct.flatMapLatest(searchWikipedia);

// for each value in the suggestions
suggestions.subscribe(
    /* Do something with the data like binding */
	data => {
	    var res = data[1];
	    $results.empty();
	    $.each(res, (_, value) => $('<li>' + value + '</li>').appendTo($results));
	}, 
    /* handle any errors */
	error => {
	    $results.empty();
	    $('<li>Error: ' + error + '</li>').appendTo($results);
	});

// basic ajax call, returns a Promise object
function searchWikipedia (term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}