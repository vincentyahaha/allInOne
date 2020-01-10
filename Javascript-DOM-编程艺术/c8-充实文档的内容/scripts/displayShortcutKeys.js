function displayShortcutKeys() {
	if (!document.querySelectorAll) return false;
	var navItems = document.querySelectorAll("a.accessKey");
	// console.log(navItems);
	if (navItems.length < 1) return false;
	var keys = new Array();
	for (var i = 0; i < navItems.length; i++) {
		var keyText = navItems[i].firstChild.nodeValue;
		var keyShortCut = navItems[i].getAttribute("accesskey");
		keys[keyShortCut] = keyText;
	}
	var accesskeyHeader = document.createElement("h2");
	var accesskeyHeader_text = document.createTextNode("Accesskeys");
	accesskeyHeader.appendChild(accesskeyHeader_text);
	var accesskeyUnorderedList = document.createElement("ul");
	accesskeyHeader.appendChild(accesskeyUnorderedList);
	for (key in keys) {
		var shortCutTag = document.createElement("li");
		var shortCutTag_text = document.createTextNode(key + " : " + keys[key]);
		shortCutTag.appendChild(shortCutTag_text);
		// console.log(shortCutTag);
		accesskeyUnorderedList.appendChild(shortCutTag);
	}
	document.body.appendChild(accesskeyHeader);
}

addLoadEvent(displayShortcutKeys);

var testing = document.getElementsByClassName("accessKey");
console.log(testing);
// console.log(testing.forEach(e => console.log(e)));
console.log(typeof testing);
testing = document.querySelectorAll(".accessKey");
console.log(testing.forEach(e => console.log(e.textContent)));
console.log(testing);
console.log(typeof testing);
