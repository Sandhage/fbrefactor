// Variables
var fizzCount = 0;
var node = document.getElementById('fizzlist');

// Document-Ready Functions
$(document).ready(function() {
	
	for ( fizzCount = 0; fizzCount < 100; fizzCount++ ) {
		if ( fizzCount % 3 == 0 && fizzCount % 5 !== 0 ) {
			node.innerHTML( '<li>Fizz!</li>' );
		} else if ( fizzCount % 3 !== 0 && fizzCount % 5 == 0 ) {
			node.innerHTML( '<li>Buzz!</li>' );
		} else if ( fizzCount % 3 == 0 && fizzCount % 5 == 0) {
			node.innerHTML( '<li>FizzBuzz!</li>' );
		} else if ( fizzCount % 3 !== 0 && fizzCount % 5 !== 0) {
			node.innerHTML( '<li>' + fizzCount + '</li>' );
		};
	};

});