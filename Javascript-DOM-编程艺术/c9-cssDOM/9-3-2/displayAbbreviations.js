function displayAbbreviations() {
	if (
		!document.getElementsByTagName ||
		!document.createElement ||
		!document.createTextNode
	)
		return false;
	var abbreviations = document.getElementsByTagName("abbr");
	console.log(abbreviations);
	if (abbreviations.length < 1) return false;
	var defs = new Array();
	for (var i = 0; i < abbreviations.length; i++) {
		var current_abbr = abbreviations[i];
		if (current_abbr.childNodes.length < 1) continue;
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}

	var dlist = document.createElement("dl");
	for (key in defs) {
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dtitle.appendChild(dtitle_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if (dlist.childNodes < 1) return false;
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);
// addLoadEvent(displayCitation);
