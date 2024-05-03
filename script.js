//your JS code here. If required.
 const timerElement = document.getElementById('timer');
let currentDate = new Date();
setInterval(
	function () {
		currentDate = new Date();
		timerElement.innerHTML = currentDate.toLocaleString();
	},1000
)