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
/*
let texto = document.querySelector(".text"); //* para obtener el texto seleccionado de un input o un textarea
texto.addEventListener("select", (e) => {
	let inicio = e.target.selectionStart;
	let fin = e.target.selectionEnd;
	contenedor2.innerHTML = texto.value.substring(inicio, fin);
});*/

//? temporizadores
const temporizador = setTimeout(() => {
	console.log("Hola");
}, 10000);

//todo cofla
//formulario
let inputs = document.querySelectorAll(".texto");
//console.log(inputs.item(3).name);

/*
input.addEventListener("click", (e) => {
	console.log(e.target.name);
});*/

let btnEnviar = document.querySelector(".btn-enviar");
btnEnviar.addEventListener("click", () => {
	for (const input of inputs) {
		if (revisarInputs(input) == true) {
			alert(input.name + " No puede estar vacio");
			break;
		}
		if (input.name == "Correo") {
			if (!revisarCorreo(input)) {
				console.log("Correo no valido");
				break;
			}
		} else {
			capitalize(input);
		}
	}
});

const revisarInputs = (input) => {
	return input.value == "";
};

const revisarCorreo = (input) => {
	return input.value.includes("@") && input.value.includes(".com");
};

const capitalize = (input) => {
	let texto = input.value;
	texto = texto[0].toUpperCase() + texto.substring(1, texto.legth);
	input.value = texto;
};

//todo cofla parte 2

class Alumno {
	constructor(nombre, email, materia) {
		this.nombre = nombre;
		this.email = email;
		this.materia = materia;
	}

	get getNombre() {
		return this.nombre;
	}
	get getEmail() {
		return this.email;
	}
	get getMateria() {
		return this.materia;
	}
}
let alumnos = [];
alumnos.push(new Alumno("juan", "todos@gmail.com", "Fisica"));
alumnos.push(new Alumno("Roberto", "tenemos@gmail.com", "Quimica"));
alumnos.push(new Alumno("Maria", "problemas@gmail.com", "Matematica"));
alumnos.push(new Alumno("Yepeto", "xddest@gmail.com", "Biologia"));
alumnos.push(new Alumno("Carlos", "killer123@gmail.com", "Medicina"));
alumnos.forEach(
	(imprimirLista = (alumno) => {
		let nombre = alumno.getNombre;
		let email = alumno.getEmail;
		let materia = alumno.getMateria;
		let htmlCode = `<div class="nombre grid-item">${nombre}</div>
		<div class="email grid-item">${email}</div>
		<div class="materia grid-item">${materia}</div>
		<div class="semana grid-item">
			<select name="" class="semana-elegida">
				<option value="semana 1">semana 1</option>
				<option value="semana 2">semana 2</option>
			</select>
		</div>`;
		document.querySelector(".grid-container").innerHTML += htmlCode;
	})
);

let botonCon = document.querySelector(".boton-confirmacion");
botonCon.addEventListener("click", () => {
	let semanaCon = document.querySelectorAll(".semana");
	let semenasElegidas = document.querySelectorAll(".semana-elegida");
	for (const elemtento in semanaCon) {
		let semana = semanaCon[elemtento];
		semana.innerHTML = semenasElegidas[elemtento].value;
	}
});
/*
let alumnos = [
	["juan", "todos@gmail.com", "Fisica"],
	["Roberto", "tenemos@gmail.com", "Quimica"],
	["Maria", "problemas@gmail.com", "Matematica"],
	["Yepeto", "xddest@gmail.com", "Biologia"],
	["Carlos", "killer123@gmail.com", "Medicina"],
];

let alumnos = [{
	nombre:"juan",
	email:"juan@gmail.com",
	materia:"Fisica",
},{
	nombre:"juan",
	email:"juan@gmail.com",
	materia:"Fisica",
},{
	nombre:"juan",
	email:"juan@gmail.com",
	materia:"Fisica",
},{
	nombre:"juan",
	email:"juan@gmail.com",
	materia:"Fisica",
},{
	nombre:"juan",
	email:"juan@gmail.com",
	materia:"Fisica",
}];
*/

//?------------------Capitulo 10 control de flujos---------------------

try {
	asdasd;
} catch (error) {
	console.log(typeof error);
} finally {
	console.log("hola");
}
