function styleHeaderSiblings(tag,theclass) {
	
	var headers = document.getElementsByTagName(tag);
	var elem;
	for (var i = 0; i < headers.length; i++) {
		elem = getNextElement(headers[i].nextSibling);
		console.log(elem);
		addClass(elem, theclass);
	}
}
function getNextElement(node) {
	if (node.nodeType == 1) {
		return node;
	}
	if (node.nextSibling) {
		return getNextElement(node.nextSibling);
	}
	return null;
}
function addClass(elem,value){
	console.log(222);
	if(elem.getAttribute('class') == null){
		console.log('null');
		elem.className = value;
	}else{
		elem.className += ' ' + value;
	};
}


addLoadEvent(function(){styleHeaderSiblings('h1','intro')});
