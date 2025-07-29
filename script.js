//your JS code here. If required.

function clickHandler() {
	const para = document.getElementById("status");

	const h1 = document.createElement("h1");
	h1.textContent = "Entered Metaverse";
     h1.id = "status"
	para.replaceWith(h1);
}
