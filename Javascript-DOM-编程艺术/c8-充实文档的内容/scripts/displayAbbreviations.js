function displayAbbreviations() {
	if (
		!document.getElementsByTagName ||
		!document.createElement ||
		!document.createTextNode
	)
		return false;
	// 获得所有是<abbr>的List.
	var abbreviations = document.getElementsByTagName("abbr");
	// 如果List内没有元素、退出程式。
	if (abbreviations.length < 1) return false;
	// 定义一个数组叫def用来存放键值对。
	var defs = new Array();
	// 循环添加每一条<abbr>List内的数据到def数组中 E.g. [W3C:"World Wide Web Consortium"];
	for (var i = 0; i < abbreviations.length; i++) {
		var current_abbr = abbreviations[i];
		if (current_abbr.childNodes.length < 1) continue;
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}
	var dlist = document.createElement("dl");
	for (key in defs) {
		var definition = defs[key];
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dtitle.appendChild(ddesc);
		dlist.appendChild(dtitle);
	}
	if (dlist.childNodes.length < 1) return false;
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitation);
