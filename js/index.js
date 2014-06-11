$(function(){
	
	// container is the DOM element;
	// userText is the textbox
	
	var container = $(".price");
	var	userText = $('#userText'); 
	
	// Shuffle the contents of container
	container.shuffleLettersFast();	
	
	window.setInterval(function(){
	container.shuffleLettersSlow();	
	}, 20000);
});

