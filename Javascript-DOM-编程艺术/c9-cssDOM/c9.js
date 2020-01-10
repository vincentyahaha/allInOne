function styleHeaderSiblings() {
	var headers = document.getElementsByTagName("h1");
	var elem;
	for (var i = 0; i < headers.length; i++) {
		elem = getNextElement(headers[i].nextSibling);
		console.log(elem);
		console.log(elem.nextElementSibling);
		console.log(elem.nextSibling.nextSibling);
		elem.style.fontWeight = "bold";
		elem.style.fontSize = "1.2em";
	}

	function getNextElement(node) {
		console.log(node);
		console.log(node.nextSibling);
		if (node.nodeType == 1) {
			console.log("1111111");
			return node;
		}
		if (node.nextSibling) {
			console.log("22222");
			return getNextElement(node.nextSibling);
		}
		return null;
	}
}
addLoadEvent(styleHeaderSiblings);
