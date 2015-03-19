$("document").ready( function() {
	var spoken;
	var word;
	for (var i = 1; i <= 100; i++) {
		spoken = false;
		word = "";
		if (i % 3 == 0) {
			word += "fizz";
			spoken = true;
		}
		if (i % 5 == 0) {
			word += "buzz";
			spoken = true;
		}
		if (!spoken) {
			word += i;
		}
		$("body").append("<p>" + word + "</p>");
});