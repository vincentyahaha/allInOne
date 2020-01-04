function showPic(whichpic) {
	if (!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src", source);
	if (document.getElementById("description")) {
		if (whichpic.getAttribute("title")) {
			var text = whichpic.getAttribute("title");
		} else {
			var text = "";
		}

		var description = document.getElementById("description");
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}

function addLoadEvent(func) {
	var oldOnload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	} else {
		oldOnload();
		func();
	}
}
function prepareGallery() {
	if (!document.getElementsByTagName) return false;
	console.log("1pass");
	if (!document.getElementById) return false;
	console.log("2pass");
	if (!document.getElementById("imageGallery")) return false;
	console.log("3pass");
	var links = document.getElementsByTagName("a");
	console.log("links");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			// 注释代码解释了  这一行 : return !showPic(this);
			// if(showPic(this)){
			// 	return false;
			// }else{
			// 	return true;
			// }
			return !showPic(this);
		};
	}
}
addLoadEvent(prepareGallery);
