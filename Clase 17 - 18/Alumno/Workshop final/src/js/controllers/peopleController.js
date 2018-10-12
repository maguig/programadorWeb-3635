import { getData } from '../utils/ajax'


function peopleController () {
  console.log('Se cargo la people ctrl 2')
  
  var tableBodyNode = $('#tableBody')

  var seeMoreButton = $('#seeMore')

  getData('https://swapi.co/api/people/', showPeople)

  function showPeople (error, data) {
    if (error) {
      console.log('Falló algo ', error)
    } else {
      console.log('Ok los vehiculos son:', data)
      var people = data.results

      var person

      for (var i = 0; i < people.length; i++) {
        person = people[i]

        var url = person.url

        url = url.replace('https://swapi.co/api/people/', '')

        var id = url.replace( '/', '')

        console.log(id)

        tableBodyNode.append('<tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr>')
      }
      if (data.next) {
        seeMoreButton.one('click', function () {
          getData(data.next, showPeople)
        })
      } else {
        seeMoreButton.remove()
      }
    }
  }
}

export default peopleController


  