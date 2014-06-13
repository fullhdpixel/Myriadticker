(function($){

	$.fn.shuffleLetters = function(prop){
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var json = xmlhttp.responseText;
				var parsed = JSON.parse(json);
				var last = parsed.Last;
<<<<<<< HEAD
				var open = '(';
				var close = ')';
				document.getElementById("last").innerHTML = last;
				document.title = open.concat(last).concat(close);				
=======
				document.getElementById("last").innerHTML = last;
				document.title = last;
>>>>>>> origin/master
			}
		}
		xmlhttp.open("GET","./getAPI.php",true);
		xmlhttp.send();
<<<<<<< HEAD
/*
=======
		
>>>>>>> origin/master
		var options = $.extend({
			"step"		: 8,						// How many times should the letters be changed
			"fps"		: 30,					// Frames Per Second
			"text"		: last, 					// Use this text instead of the contents
			"callback"	: function(){}	// Run once the animation is complete
		},prop)
		
		return this.each(function(){
			var el = $(this),
				str = "";

			// Preventing parallel animations using a flag;

			if(el.data('animated')){
				return true;
			}
			
			el.data('animated',true);
			
			if(options.text) {
				str = options.text.split('');
			}
			else {
				str = el.text().split('');
			}
			
			// The types array holds the type for each character;
			// Letters holds the positions of non-space characters;
			
			var types = [],
				letters = [];

			// Looping through all the chars of the string
			
			for(var i=0;i<str.length;i++){
				
				var ch = str[i];
				
				if(ch == " "){
					types[i] = "space";
					continue;
				}
				else if(/[a-z]/.test(ch)){
					types[i] = "lowerLetter";
				}
				else if(/[A-Z]/.test(ch)){
					types[i] = "upperLetter";
				}
				else {
					types[i] = "symbol";
				}
				
				letters.push(i);
			}
			
			el.html("");			

			// Self executing named function expression:
			
			(function shuffle(start){
			
				// This code is run options.fps times per second
				// and updates the contents of the page element
					
				var i,
					len = letters.length, 
					strCopy = str.slice(0);	// Fresh copy of the string
					
				if(start>len){
					
					// The animation is complete. Updating the
					// flag and triggering the callback;
					
					el.data('animated',false);
					options.callback(el);
					return;
				}
				
				for(i=Math.max(start,0); i < len; i++){

					// The start argument and options.step limit
					// the characters we will be working on at once
					
					if( i < start+options.step){
						// Generate a random character at this position
						strCopy[letters[i]] = randomChar(types[letters[i]]);
					}
					else {
						strCopy[letters[i]] = "";
					}
				}
				
				el.text(strCopy.join(""));
				
				setTimeout(function(){
					
					shuffle(start+1);
					
				},1000/options.fps);
				
			})(-options.step);
		});
	};
	
	function randomChar(type){
		var pool = "0123456789";		
		var arr = pool.split('');
<<<<<<< HEAD
		return arr[Math.floor(Math.random()*arr.length)];*/
=======
		return arr[Math.floor(Math.random()*arr.length)];
>>>>>>> origin/master
	}
})(jQuery);