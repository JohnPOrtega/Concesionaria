

let sec = document.querySelectorAll('section');
let links = document.querySelectorAll('nav a');

		window.onscroll = () => {
			sec.forEach(section => {
				let top = window.scrollY;
				let offset = section.offsetTop - 60;
				let height = section.offsetHeight;
				let id = section.getAttribute('id')

				if (top >= offset && top <= offset + height) {
					links.forEach(link => {
						link.classList.remove('active');
						document.querySelector('nav a[href*=' + id + ']').classList.add('active');
					})
				}
			})
		};





/*CODIGO PARA LA VALIDACION DEL FORMULARIO */
var nombre = document.getElementById('nombre');
var nombreError = document.getElementById('nombreError');

var email = document.getElementById('email');
var emailPatrones = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var emailError = document.getElementById('emailError');

var comentario = document.getElementById('comentario');
var comentarioError = document.getElementById('comentarioError');

var avisoEnvio = document.getElementById('avisoEnvio');

var nombreEnviado = false, correoEnviado = false, comentarioEnviado = false;



function validarFormulario(){

	if(nombre.value !== null & nombre.value !== ''){

		nombreError.textContent = null;
		nombreEnviado = true;

		const clase = nombre.classList;
		const nombreClaseNombre = clase[0];
		//console.log(nombreClase);

		if(nombreClaseNombre === 'input'){
			nombre.classList.remove('input');
			nombre.classList.add('formularioEnviado');

		}else if(nombreClaseNombre === 'errorActivado'){
			nombre.classList.remove('errorActivado');
			nombre.classList.add('formularioEnviado');
		}

	}else if(nombre.value === null || nombre.value === ''){

		nombreError.textContent = 'Por favor, ingresa un nombre.';
		nombreError.style.marginBottom = '10px';//añado ese margen para que no esten ensimados los elementos
		nombreEnviado = false;

		const clase = nombre.classList;
		const nombreClaseNombre = clase[0];
		//console.log(nombreClaseNombre);

		if(nombreClaseNombre === 'input'){
			nombre.classList.remove('input');
			nombre.classList.add('errorActivado');

		}else if(nombreClaseNombre === 'formularioEnviado'){
			nombre.classList.remove('formularioEnviado');
			nombre.classList.add('errorActivado');
		}
	}


	if(email.value.match(emailPatrones)){

		emailError.textContent = null;
		correoEnviado = true;

		const clase = email.classList;
		const nombreClaseEmail = clase[0];
		//console.log(nombreClaseEmail);

		if(nombreClaseEmail === 'input'){
			email.classList.remove('input');
			email.classList.add('formularioEnviado');

		}else if(nombreClaseEmail === 'errorActivado'){
			email.classList.remove('errorActivado');
			email.classList.add('formularioEnviado');
		}

	}else if(!email.value.match(emailPatrones)){
		//mensajesError.push('ingresa un email valido');
		emailError.textContent = 'Por favor, ingresa un email válido.';
		emailError.style.marginBottom = '10px';
		correoEnviado = false;

		const clase = email.classList;
		const nombreClaseEmail = clase[0];
		//console.log(nombreClaseNombre);

		if(nombreClaseEmail === 'input'){
			email.classList.remove('input');
			email.classList.add('errorActivado');

		}else if(nombreClaseEmail === 'formularioEnviado'){
			email.classList.remove('formularioEnviado');
			email.classList.add('errorActivado');
		}
	}

	
	if(comentario.value !== null & comentario.value !== ''){

		comentarioError.style.display = 'none';
		comentarioEnviado = true;

		const clase = comentario.classList;

		if(clase[0] === 'input' || clase[1] === 'input'){
			comentario.classList.remove('input');
			comentario.classList.add('formularioEnviado');

		}else if(clase[0] === 'errorActivado' || clase[1] === 'errorActivado'){
			comentario.classList.remove('errorActivado');
			comentario.classList.add('formularioEnviado');
		}

	}else if(comentario.value === null || comentario.value === ''){

		comentarioError.style.display = 'block';
		comentarioError.style.marginBottom = '10px';//añado ese margen para que no esten ensimados los elementos
		comentarioEnviado = false;

		const clase = comentario.classList;

		if(clase[0] === 'input' || clase[1] === 'input'){
			comentario.classList.remove('input');
			comentario.classList.add('errorActivado');

		}else if(clase[0] === 'formularioEnviado' || clase[1] === 'formularioEnviado'){
			comentario.classList.remove('formularioEnviado');
			comentario.classList.add('errorActivado');
		}
	}

	/*
	if((nombre.value !== null & nombre.value !== '')&(email.value.match(emailPatrones))&(comentario.value !== null || comentario.value !== '')){
		avisoEnvio.textContent = 'Tu consulta ha sido enviada correctamente.';
		avisoEnvio.style.marginBottom = '10px';
	}*/

	
	if(nombreEnviado===true & correoEnviado===true & comentarioEnviado===true){
		avisoEnvio.style.display = 'block';
		//avisoEnvio.textContent = 'Tu consulta ha sido enviada correctamente.';
		avisoEnvio.style.marginBottom = '10px';
	}else{
		avisoEnvio.style.display = 'none';
		//avisoEnvio.textContent = null;
	}
	
	return false;//esto es para que no se reinicie la pagina
}



/*Codigo mostrar y ocultar la galeria de imagenes de los diferentes modelos*/

//funcion para mostrar el primer modelo
function mostrarModelo1(){
	const contenedor = document.getElementById('galeria-modelo1');
	contenedor.style.display = 'block';
}
//funcion para ocultar
function ocultarModelo1(){
	const contenedor = document.getElementById('galeria-modelo1');
	contenedor.style.display = 'none';
}


function mostrarModelo2(){
	const contenedor = document.getElementById('galeria-modelo2');
	contenedor.style.display = 'block';
}
//funcion para ocultar
function ocultarModelo2(){
	const contenedor = document.getElementById('galeria-modelo2');
	contenedor.style.display = 'none';
}


function mostrarModelo3(){
	const contenedor = document.getElementById('galeria-modelo3');
	contenedor.style.display = 'block';
}
//funcion para ocultar
function ocultarModelo3(){
	const contenedor = document.getElementById('galeria-modelo3');
	contenedor.style.display = 'none';
}


function mostrarModelo4(){
	const contenedor = document.getElementById('galeria-modelo4');
	contenedor.style.display = 'block';
}
//funcion para ocultar
function ocultarModelo4(){
	const contenedor = document.getElementById('galeria-modelo4');
	contenedor.style.display = 'none';
}


function mostrarModelo5(){
	const contenedor = document.getElementById('galeria-modelo5');
	contenedor.style.display = 'block';
}
//funcion para ocultar
function ocultarModelo5(){
	const contenedor = document.getElementById('galeria-modelo5');
	contenedor.style.display = 'none';
}

function mostrarModelo6(){
	const contenedor = document.getElementById('galeria-modelo6');
	contenedor.style.display = 'block';
}
//funcion para ocultar
function ocultarModelo6(){
	const contenedor = document.getElementById('galeria-modelo6');
	contenedor.style.display = 'none';
}