$(document).ready(function() {

	var container = $(".price");
	container.shuffleLetters();

	window.setInterval(function(){
		container.shuffleLetters();
	}, 5000);
});

/*
function currencySelected(currency) {
	var btc = document.getElementById("showpairs").innerHTML;
	
	alert(btc);

	if (currency == "") {
		location.reload();
		return;
	} 
	if (currency == "BITCOIN") {
		var value = btc;
	} else if (currency == "EURO") {
		var value = btc * 500;
	} else if (currency == "USD" ) {
		var value = btc * 650;
	}
	document.getElementById("last").innerHTML = value;
}
*/