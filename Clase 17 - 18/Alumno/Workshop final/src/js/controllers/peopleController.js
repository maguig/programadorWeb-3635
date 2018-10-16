import { getData } from '../utils/ajax';

function peopleController() {
	console.log('Se cargo la people ctrl 2');

	var tableBodyNode = $('#tableBody');

	var seeMoreButton = $('#seeMore');

	getData('https://swapi.co/api/people/', showPeople);

	function showPeople(error, data) {
		if (error) {
			console.log('Falló algo ', error);
		} else {
			console.log('Ok los vehiculos son:', data);
			var people = data.results;

			var person;

			for (var i = 0; i < people.length; i++) {
				person = people[i];

				var url = person.url;

				url = url.replace('https://swapi.co/api/people/', '');

				var id = url.replace('/', '');

				console.log(person);

				tableBodyNode.append(
					'<tr id="' + id +	'"><th scope="row">' +	id +	'</th><td>' +	person.name +	'</td><td>' +	genderTranslate +	person.gender +	'</td><td>' +	person.height +	' cm</td><td>' +	person.mass +'</td><td>' +	person.eye_color +	' <button type="button" class="btn btn-success"> Success </button> '
				);
			}
			if (data.next) {
				seeMoreButton.one('click', function() {
					getData(data.next, showPeople);
				});
			} else {
				seeMoreButton.remove();
			}
		}
	}
}

function genderTranslate(gender) {
	switch (gender) {
		case 'male':
			return 'masculino';
			break;

		case 'female':
			return 'femenino';
			break;

		case 'n/a':
			return 'n/a';
			break;

		default:
			return gender;
			break;
	}
}

var TRANSLATES = {
	ES: {
		blue: 'azules',
		yellow: 'amarillos',
		red: 'rojos'
	},

	EN: {
		blue: 'blue',
		yellow: 'yellow',
		red: 'red'
	},

	PT: {
		blue: 'azulsiño',
		yellow: 'amarilliño',
		red: 'rojiño'
	}
};

function eyeTranslate(leng, eyeColor) {
	return TRANSLATES[lang][eyeColor] || eyeColor;
}

export default peopleController;
