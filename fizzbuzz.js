$(document).ready(function() {
	$('#go').on('click', function() {
		var nbr = $('#numBox').val();
		nbr = parseInt(nbr);
		if (nbr > 0) {
			clear('console');
			fizzbuzzer(nbr);
		}
		else {
			alert('Please enter a positive integer.');
		}
		$('#numBox').val('');
	});
});

function clear(divId) {
	$('#' + divId).children().remove();
}

function printLine(str) {
	console.log(str);
	var n = document.createElement('p'),
	    t = document.createTextNode(str);

	n.appendChild(t);
	document.getElementById('console').appendChild(n);
}

function fizzbuzzer(n) {
	for (var i = 1; i <= n; i++) {
		printLine(fizzbuzz(i));
	}
}

function fizzbuzz(x) {
	var msg = '';
	if (x % 3 == 0) {msg += 'fizz';}
	if (x % 5 == 0) {msg += 'buzz';}
	return msg || x;
}