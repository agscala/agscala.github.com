function animateRandomColor(div) {
	var callback = (function(div) { return function(div) { animateRandomColor(div); } })(div);
	var color = Math.floor(Math.random() * 100) + "";

	console.log(color);
	$(this).animate({"color": "rgb(" + color + ", 232, 49)"}, 1000, function() {
		animateRandomColor(div);
	});
}

$(document).ready(function() {
	var logo_text = $("h1 a").html().split("");
	$("h1 a").empty();
	console.log(logo_text);
	_.each(logo_text, function(character) {
		$("h1 a").append("<span class='color-trans'>" + character + "</span>");
	});

	animateRandomColor(".color-trans");
	// $(".color-trans").each(function() {
		// animateRandomColor(this);
	// });
});

