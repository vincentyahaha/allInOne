function stripedTables() {
	// var trs = document.getElementsByTagName("tr");
	// console.log(trs);
	// for (var i = 0; i < trs.length; i++) {
	// 	if (isOdd(i)) {
	// 		// 奇数 Odd
	// 		trs[i].style.backgroundColor = "black";
	// 	}
	// }

	if (!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	var odd, rows;
	for (var i = 0; i < tables.length; i++) {
		odd = false;
		rows = document.getElementsByTagName("tr");
		console.log(rows.length);
		for (var j = 0; j < rows.length; j++) {
			if (odd) {
				rows[j].style.backgroundColor = "#ffc";
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}

// function isOdd(num) {
// 	return num % 2;
// }

addLoadEvent(stripedTables);
