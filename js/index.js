$(document).ready(function() {

	var container = $(".price");
	container.shuffleLetters();

	window.setInterval(function(){
		container.shuffleLetters();
	}, 5000);
});