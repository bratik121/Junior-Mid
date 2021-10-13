//todo cofla
const gradeInput = document.querySelector(".grade-input");
gradeInput.setAttribute("min", 0);
gradeInput.setAttribute("max", 20);
let modal = document.querySelector(".modal-bg");
const noteButton = document.querySelector(".note-button");
const mensaje = document.querySelector(".form_texto");

noteButton.addEventListener("click", () => {
	let nota = parseInt(gradeInput.value);
	if (Number.isNaN(nota)) {
		alert("Tiene que introducir un numero");
	} else {
		document.querySelector(".modal__mensaje").innerHTML = revisarNota(nota);
		let color = nota >= 10 ? "rgb(11, 223, 11)" : "red";
		modal.style.color = color;
		modal.style.display = "flex";
	}
});

modal.addEventListener("click", () => {
	modal.style.display = "none";
});

const revisarNota = (nota) => {
	return nota >= 10 ? "Aprobaste!" : "No aprobaste :(";
};
