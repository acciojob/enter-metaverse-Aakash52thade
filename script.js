document.addEventListener("DOMContentLoaded", function () {
	const button = document.getElementById("enterBtn");
	const para = document.getElementById("status");

	button.addEventListener("click", function () {
		const h1 = document.createElement("h1");
		h1.textContent = "Entered Metaverse";
		h1.id = "status"; // Preserve the ID for testing
		para.replaceWith(h1);
	});
});
