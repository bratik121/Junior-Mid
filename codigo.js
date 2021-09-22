//!capitulo 7
//let ventana = window.open("https://www.youtube.com/watch?v=hOO-Lr39tkQ"); //creo y abro una ventana
//ventana.close(); //cierro la ventana creada
confirm("jennifer eres marica");
/*
todo Problemas de cofla
*/

/*
let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

let mensaje =
	window.confirm(
		"El alto es " + alto + " el ancho es " + ancho + "\nDesea comprarla?"
	) == true
		? "Compro esa mierda"
		: "JAJA no era hd xd";
alert(mensaje);
*/
let href = window.location.href;
let contenedor = document.querySelector(".contenedor");
let titulo = document.createElement("H2");
titulo.innerHTML = href;
titulo.classList.add("titulo");
contenedor.appendChild(titulo);

//!capitulo 9 eventos

let boton = document.querySelector(".boton");
let contenedor2 = document.querySelector(".contenedor-2");
/*
boton.onclick = () => {
	let span = document.createElement("SPAN"); 
	span.innerHTML = "You are not alone</br>";
	contenedor2.appendChild(span);
	*No se suele usar 
};*/
/*
boton.addEventListener("click", añadirTexto);

function añadirTexto() {
	let span = document.createElement("SPAN");
	span.innerHTML = "Correcto</br>";
	contenedor2.appendChild(span);
	//boton.removeEventListener("click", añadirTexto);//*remueve el evento
	//*Manera correcta de hacerlo
}*/

//?otra manera de hacerlo seria

boton.addEventListener("click", (e) => {
	let span = document.createElement("SPAN");
	span.innerHTML = "Correcto</br>";
	contenedor2.appendChild(span);
});
