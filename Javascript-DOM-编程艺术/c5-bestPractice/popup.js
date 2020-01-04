window.onload = prepareLinks;
// console.log(window.onload);
function prepareLinks() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementsBtId) return false;
	let links = document.getElementsByTagName("a");

	for (var i = 0; i < links.length; i++) {
		if (links[i].getAttribute("class") == "popup") {
			links[i].onclick = function(e) {
				popUp(this.getAttribute("href"));
				return false;
			};
		}
	}
}
function popUp(url) {
	window.open(url, "popup", "width=580,height=580");
}
