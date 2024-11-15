const modal = document.querySelector(".modal");
const map = document.querySelector(".mask-map");

function mostrarModal() {
	modal.style.left = "50%";
	modal.style.transform = "translate(-50%, -50%)";
	map.style.visibility = "visible";
}

function esconderModal() {
	modal.style.left = "-30%";
	modal.style.transform = "translate(-50%, -50%)";
	map.style.visibility = "hidden";
}
