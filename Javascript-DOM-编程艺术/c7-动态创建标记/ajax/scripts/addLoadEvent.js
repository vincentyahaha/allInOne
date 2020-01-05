function addLoadEvent(func) {
	// window.onload = func;
	var oldOnload = window.onload;
	if (oldOnload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldOnload();
			func();
		};
	}
}
