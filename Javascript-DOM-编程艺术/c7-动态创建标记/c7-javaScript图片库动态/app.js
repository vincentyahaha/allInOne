addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);

function showPic(whichpic) {
	if (!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	// console.log(placeholder);
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
function preparePlaceholder() {
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imageGallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.id = "placeholder";
	placeholder.src =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQUkjZhQUcC0gI2wpt6LRviTxv7yKrTlfyGX6E2H-7eNuZzRpH";
	placeholder.alt = "my image gallery";
	var gallery = document.getElementById("imageGallery");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var descText = document.createTextNode("Choose an Image");
	description.appendChild(descText);
	insertAfter(placeholder, gallery);
	insertAfter(description, placeholder);
}

function addLoadEvent(func) {
	var oldOnload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldOnload();
			func();
		};
	}
}

function prepareGallery() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imageGallery")) return false;
	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function(e) {
			// 注释代码解释了  这一行 : return !showPic(this);
			// if(showPic(this)){
			// 	return false;
			// }else{
			// 	return true;
			// }
			// e.preventDefault();
			return !showPic(this);
		};
	}
}

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild === targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}
