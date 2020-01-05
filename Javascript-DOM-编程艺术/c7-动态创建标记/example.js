function insertParagraph(text) {
	var str = "<p>";
	str += text;
	str += "</p>";
	document.write(str);
}

window.onload = function() {
	// var testdiv = document.getElementById("testdiv");
	// testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
	// this.alert(testdiv.innerHTML);
	// var para = document.createElement("p");
	// var info = "nodeName: ";
	// info += para.nodeName;
	// info += " nodeType: ";
	// info += para.nodeType;
	// alert(info);
	// var testdiv = document.getElementById("testdiv");
	// testdiv.appendChild(para);
	// var txt = document.createTextNode("Hello World");
	// para.appendChild(txt);
	var testdiv = document.getElementById("testdiv");
	var para = document.createElement("p");
	var txt1 = document.createTextNode("This is");
	para.appendChild(txt1);
	var em = document.createElement("em");
	var txt2 = document.createTextNode(" my");
	em.appendChild(txt2);
	para.appendChild(em);
	var txt3 = document.createTextNode(" content");
	para.appendChild(txt3);
	testdiv.appendChild(para);
};
