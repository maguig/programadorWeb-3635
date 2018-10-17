
import { getLocalList, setLocalList } from '../utils/localStorage'
import { genderTranslate, eyeTranslate } from '../utils/translates'

import { getData } from '../utils/ajax';

import {searchPeopletIndexByUrl  } from '../utils/search'


import { getLocalList, setLocalList } from '../utils/localStorage'

function localStorageController() {
  console.log('se carga el controllers ls')

  var localPeople = getLocalList('')



  for (var i = 0; i < people.length; i++) {
    person = people[i];

    tableBodyNode.append(
      '<tr id="' + id + '"><th scope="row">' + id + '</th><td>' + person.name + '</td><td>' + genderTranslate(person.gender) + '</td><td>' +
      person.height + ' cm</td><td>' + person.mass + '</td><td>' + eyeTranslate('ES', person.eye_color) + '<button id="button' +

      id +
      '"<button id= type="button" class="btn btn-successs">guardar</button></td></tr>'

    );
  }

}
$('#button' + id).click(function () {
  var button = $(this)

  var buttonId = button.attr('id')

  var id = buttonId.replace('button', '')

  var newUrl = 'https://swapi.co/api/people/' + id +'/'

  var index = searchPeopletIndexByUrl(newUrl, localPeople)

  if(index !== -1) {
    localPeople.slice(index,1)

    setLocalList('peopleList',localPeople)

    button.parent().parent().remove()

  }

})

export default localStorageController
