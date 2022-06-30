var submitted = false,
	notifElm = document.getElementById("notification");

var gFormElm = document.getElementById("gform");
gFormElm.onsubmit = function(){
	notifElm.classList.remove("hidden");
	submitted = true;
	gFormElm.querySelector("textarea").value = "";
};
