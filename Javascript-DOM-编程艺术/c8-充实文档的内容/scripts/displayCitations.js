
function displayCitation() {
	var quotes = document.getElementsByTagName("blockquote");
	for (var i = 0; i < quotes.length; i++) {
		var currentQuote = quotes[i];
		if (!currentQuote.getAttribute("cite")) continue;
		var url = currentQuote.getAttribute("cite");
        var quoteChildren = currentQuote.getElementsByTagName('*');
        if (quoteChildren.length < 1) continue;
        var elem = quoteChildren[quoteChildren.length - 1];
        var link = document.createElement('a');
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute('href', url);
        var superscript = document.createElement('sup');
        superscript.appendChild(link);
        elem.appendChild(superscript);
	}
}

