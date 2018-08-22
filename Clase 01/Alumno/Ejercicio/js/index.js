//Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. Ej: Hola Juan!

var name = prompt('Ingrese su nombre', 'Juan')

var message = 'Hola ' + name + '!'

console.log(message)

//Pedir un numero mediante prompt, parsearlo, sumarlo a otro que este en una variable y luego mostrar el resultado en consola.

var savedValue1 = 10

var userValue1 = prompt('Ingrese un número')

var parsedUserValue1 = parseInt(userValue1, 10)

var operation1 = savedValue1 + parsedUserValue1

var message1 = 'La suma es ' + operation1

console.log(message1)

//Pedir un numero mediante prompt, parsearlo, restarlo a otro que este en una variable y luego mostrar el resultado en consola.

var savedValue2 = 10

var userValue2 = prompt('Ingrese un número')

var parsedUserValue2 = parseInt(userValue2, 10)

var operation2 = savedValue2 - parsedUserValue2

var message2 = 'La resta es ' + operation2

console.log(message2)

//Pedir un numero mediante prompt, luego otro, parsearlos y sumarlos, luego mostrar el resultado en consola.

var userValue3 = prompt('Ingrese el primer número')

var parsedUserValue3 = parseInt(userValue3, 10)

var userValue4 = prompt('Ingrese el segundo número')

var parsedUserValue4 = parseInt(userValue4, 10)

var message3 = 'La suma de ambos es' + (parsedUserValue3 + parsedUserValue4)

console.log(message3)