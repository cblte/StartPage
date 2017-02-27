
function startDate() {
	var today = new Date();
	var n = today.toDateString()
	document.getElementById('date').innerHTML = n;
	//alert(today.toString());
}