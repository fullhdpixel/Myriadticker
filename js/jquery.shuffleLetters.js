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
				var change = (parsed.Change).concat(' %');
				var domain = ' - MyriadcoinPrice.com';
				document.getElementById("last").innerHTML = last;
				document.getElementById("high").innerHTML = parsed.High;
				document.getElementById("low").innerHTML = parsed.Low;
				document.title = last.concat(domain);
				
				if (change == 0 ) {
					document.getElementById("change").innerHTML = change;
				} else if (change > 0) {
					document.getElementById("changeplus").innerHTML = change;
				} else {
					document.getElementById("changemin").innerHTML = change;
				}
			}
		}
		xmlhttp.open("GET","./getAPI.php",true);
		xmlhttp.send();
	}
})(jQuery);