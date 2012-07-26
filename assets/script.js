$(document).ready(function() {
	var bodytext = $("body").html();
	$("code").each(function(i, elem) {
		var text = $(this).html();
		text = text.replace("|{|", "{{");
		text = text.replace("|}|", "}}");
		console.log(text);
		$(this).html(text);
	});
});

