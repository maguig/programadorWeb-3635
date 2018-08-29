//definicion de una funcion
function calcularTercioCubo(numero) {
	var cubo = numero * numero;
	var resultado = cubo / 4;
	console.log('El cuarto del cuadrado de ' + numero + ' es: ' + resultado);
}

//utilizo / llamo / invoco a la funcion
// calcularTercioCubo(5);

// calcularTercioCubo(4);

// calcularTercioCubo(125);

// calcularTercioCubo(7);

//definimos una funcion que calcule la potencia de un numero
function calcularPotencia(numero, exponente) {
	for (var i = 2; i < exponente; i++) {
		numero = numero * numero;
	}

	console.log(numero);
}

//llamando a la nueva funcion
// calcularPotencia(8,3);

// calcularPotencia(5,2);

// calcularPotencia(2,5);

// var personas = [ 'Magui', 'Dami', 'Pato' ];

// for (var i = 0; i <= personas.length; i++) {
//     console.log('Hola ' + personas[i]);
// }


function esMayorQueCinco(num1) {
    if(num1 > 5){
        console.log('Es mayor!');
    }
    else if(num1 < 5){
        console.log('Es menor!');
    }
    else{
        console.log('ES IGUAAAAAAAL');
    }
}

function esMayor(num1, num2) {
    if(num1 > num2){
        console.log('Es mayor!');
    }
    else if(num1 < num2){
        console.log('Es menor!');
    }
    else{
        console.log('ES IGUAAAAAAAL');
    }
}

function saludarAlRey(){
    console.log("Salute mi estimadisimo y venerable rey chuni!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !");
}

saludarAlRey();

var valor1 = prompt("ingresar valor 1");
var valor2 = prompt("ingresar valor 2");
esMayor(valor1,valor2);

//esMayorQueCinco(valor);



saludarAlRey();

function llamarADami(){
    
}




    

