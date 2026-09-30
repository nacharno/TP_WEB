//Fonction OnOffAmpoule :
// appellée quand on clique sur l'image
//allume l'ampoule si elle est éteinte
//éteint l'ampoule si elle est allumée
function OnOffAmpoule() {
	const allumee = document.getElementById("ampoule")["alt"] == "Ampoule allumée";
	if (allumee) {
		document.getElementById("ampoule")["alt"] = "Ampoule éteinte";
		document.getElementById("ampoule")["src"] = "images/pic_bulboff.gif";
		}
	else {
		document.getElementById("ampoule")["alt"] = "Ampoule allumée";
		document.getElementById("ampoule")["src"] = "images/pic_bulbon.gif";
	}
}
