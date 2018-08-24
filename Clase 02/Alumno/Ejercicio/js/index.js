// Le pido al usuario que ingrese un día de la semana
var dayOfTheWeek = prompt('Ingrese día de la semana', '');

// Creo una variable para guardar el mensaje según el caso elegido por el usuario
var message;

// Comparo el día ingresado por el usuario con todos los casos posibles
switch (dayOfTheWeek) {
  case 'lunes':
  case 'martes':
  case 'miércoles':
  case 'jueves':
  case 'viernes':
    message = 'Es un día habíl'
    break
  case 'sábado':
  case 'domingo':
    message = 'Es día de fin de semana'
    break
  default:
    message = 'Ingresaste cualquier cosa!'
    break
}

// Muestro en consola el mensaje según el caso en el coincidió
if(message == 'Ingresaste cualquier cosa!'){
  console.error(message);
}
else{
  console.log(message);
}