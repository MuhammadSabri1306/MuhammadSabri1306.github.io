var submitted = false,
	notifElm = document.getElementById("notification");

var gFormElm = document.getElementById("gform");
gFormElm.onsubmit = function(){
	notifElm.classList.remove("hidden");
	submitted = true;
	gFormElm.querySelector("textarea").value = "";
};

const gFormMessage = document.getElementById("gFormMessage");
gFormMessage.onchange = function(){
	document.getElementById("entry.1611346978").value = this.value;
};
