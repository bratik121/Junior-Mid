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
