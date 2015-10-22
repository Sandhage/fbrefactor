// Variables
var fizzCount = 0;
var node = document.getElementById('fizz-list')
// Document-Ready Functions
$(document).ready(function() {
	
	for ( fizzCount < 100; fizzCount++ ) {
		if ( fizzCount % 3 == 0 ) {
			node.innerHTML('<li>Fizz!</li>')
		} else if ( fizzCount % 5 == 0 ) {
			node.innerHTML('<li>Buzz!</li>')
		}
	}

});