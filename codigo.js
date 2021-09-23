//!capitulo 7
//let ventana = window.open("https://www.youtube.com/watch?v=hOO-Lr39tkQ"); //creo y abro una ventana
//ventana.close(); //cierro la ventana creada
//onfirm("jennifer eres marica");
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

//? eventos de la interfaz
/*
let imagen = document.querySelector(".img");
imagen.addEventListener("error", () => {
	console.log("Ha sucedido un erro");
});*/

//?uso del select

let texto = document.querySelector(".text"); //* para obtener el texto seleccionado de un input o un textarea
texto.addEventListener("select", (e) => {
	let inicio = e.target.selectionStart;
	let fin = e.target.selectionEnd;
	contenedor2.innerHTML = texto.value.substring(inicio, fin);
});

//? temporizadores
const temporizador = setTimeout(() => {
	console.log("Hola");
}, 10000);
