var studentsList = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 45678989
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956
    },
    {
      firstName: 'Pablo',
      lastName: 'Picapiedras',
      dni: 45678983
    }
  ]
  
  function searchStudentIndexByText (text, studentsList) {
    var student
  
    for (var i = 0; i < studentsList.length; i++) {
      student = studentsList[i]
      if (text === student.firstName || text === student.lastName) {
        return i
      }
    }
  
    return -1
  }
  
  var text = 'Ana'
  
  var result = searchStudentIndexByText(text, studentsList)
  
  if (result !== -1) {
    console.log('Encontré el usuario ' + text + ' en la posición ' + result)
  } else {
    console.log('No encontré al usuario ' + text)
  }