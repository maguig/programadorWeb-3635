console.log('Init app')

var students = [
    {
      firstName: 'Pedro',
  
      dni: 22999333,
      email: 'juan@gmail.com'
    },
    {
      firstName: 'Ana',
  
      dni: 22999333,
      email: 'juan@gmail.com'
    },
    {
      firstName: 'María',
  
      dni: 22999333,
      email: 'juan@gmail.com'
    }
  ]
  
  
  function createStudentNode (newStudent) {
   
    var liNode = document.createElement('li')
  
    liNode.id = newStudent.dni
  
    liNode.className = 'list-group-item'
  
    liNode.innerHTML =
      '<h1>' +
      newStudent.firstName +
      ' ' +
      newStudent.lastName +
      '</h1>' +
      '<h3>DNI:' +
      newStudent.dni +
      '</h3><p class="pepe">E-mail:' +
      newStudent.email +
      '</p>'
  
    return liNode
  }
  var mainListNode = document.getElementById('mainList')
  
  var studentNode
  
  for (var i = 0; i < students.length; i++) {
    studentNode = createStudentNode(students[i])
  
    mainListNode.appendChild(studentNode)
  }
  