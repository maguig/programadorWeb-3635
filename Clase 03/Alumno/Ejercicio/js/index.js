var daysOfTheWeek =[
	'Lunes',
	'Martes',
	'Miércoles',
	'Miercoles',
	'Jueves',
	'Viernes',
	'Sábado',
	'Sabado',
	'Domingo',
	'Pato'
];

var message;

var day;

for (var i = 0; i < daysOfTheWeek.length; i++) {
	day = daysOfTheWeek[i]

	switch (day) {
		case 'Lunes':
		case 'Martes':
		case 'Miércoles':
		case 'Jueves':
		case 'Viernes':
			message = 'Es un día habíl';
			break;
		case 'Sábado':
		case 'Domingo':
			message = 'Es día de fin de semana';
			break;
		default:
			message = 'Ingresaste cualquier cosa!';
			break;
	}
}

console.log(message);
