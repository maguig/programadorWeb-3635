// Le pido al usuario que ingrese un día de la semana
var dayOfTheWeek = prompt('Ingrese día de la semana', 'Lunes')

var message

switch (dayOfTheWeek) {
  case 'Lunes':
  case 'Martes':
  case 'Miércoles':
  case 'Jueves':
  case 'Viernes':
    message = 'Es un día habíl'
    break
  case 'Sábado':
  case 'Domingo':
    message = 'Es día de fin de semana'
    break
  default:
    message = 'Ingresaste cualquier cosa!'
    break
}

console.log(message)
