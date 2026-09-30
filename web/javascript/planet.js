

function writeText(txt) {
  document.getElementById("desc").innerHTML = txt;
}

function writeDefault() {
	writeText("MOUSE over the sun and the planets and see the different descriptions.");
}

function affichePlanete(nombre) {
	let image = document.getElementById("affichage_zoom");
	switch (nombre) {
		case 1:
			image["src"] = "images/sun.gif";
			image["alt"] = "Le Soleil";
			break;
		case 2:
			image["src"] = "images/venglobe.gif";
			image["alt"] = "Venus";
			break;
		case 3:
			image["src"] = "images/merglobe.gif";
			image["alt"] = "Mercure";
			break;
		default:
			image["src"] = "";
			image["alt"] = "";
	}
	
}
