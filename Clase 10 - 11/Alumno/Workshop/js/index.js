var LOCAL_KEY = 'studentList';

var studentsList = getLocalList(LOCAL_KEY);

var mainListNode = document.getElementById('mainList');

var student;

for (var i = 0; i < studentsList.length; i++) {
  student = createStudentNode(studentsList[i])

  mainListNode.appendChild(student)
}


var firstNameNode = document.getElementById('firstName');

var lastNameNode = document.getElementById('lastName');

var emailNode = document.getElementById('email');

firstNameNode.onblur = validateRequiredField;

lastNameNode.onblur = validateRequiredField;

emailNode.onblur =  validateRequiredField;

var dniNode = document.getElementById('dni');

dniNode.onblur = validateDniField

var addStudentButtonNode = document.getElementById('addStudentButton');

addStudentButtonNode.onclick = addStudent

function addStudent () {
  var firstNameValue = firstNameNode.value
  var dniValue = dniNode.value
  var lastNameValue = lastNameNode.value
  var emailValue = emailNode.value
  var student = {
    firstName: firstNameValue,
    dni: dniValue,
    lastName: lastNameValue,
    email: emailValue
  }

  studentsList.push(student)

  setLocalList(LOCAL_KEY, studentsList)

  student = createStudentNode(student)

  mainListNode.appendChild(student)

  firstName.value = ''
  dniNode.value = ''
  lastName.value = ''
  email.value = ''
  addStudentButtonNode.disabled = true
  firstName.classList.remove('is-valid')
  dniNode.classList.remove('is-valid')
}


function searchStudentIndexByDni (dni, studentsList) {
  var student

  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
    if (dni === student.dni) {
      return i
    }
  }

  return -1
}

function validateDniField (event) {
  var inputNode = event.target

  var parsedValue = parseInt(inputNode.value, 10)

  var index = searchStudentIndexByDni(inputNode.value, studentsList)

  if (isNaN(parsedValue) || parsedValue <= 0 || index > -1) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
  validateSubmitButton()
}

function validateRequiredField (event) {
  var inputNode = event.target

  if (!inputNode.value) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }

  validateSubmitButton()
}

function validateSubmitButton () {
  var addStudentButtonNode = document.getElementById('addStudentButton');
  var inputFields = document.getElementsByClassName('is-invalid');

  if (inputFields.length > 0) {
    addStudentButtonNode.disabled = true;
  } else {
    addStudentButtonNode.disabled = false;
  }
}

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

function setLocalList (key, list) {

  if (typeof key === 'string' && Array.isArray(list)) {
    
    var strList = JSON.stringify(list)
    
    localStorage.setItem(key, strList)
  }
}

function getLocalList (key) {

  if (typeof key === 'string') {
    
    var localList = localStorage.getItem(key)
    if (localList) {
      
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
    
      return []
    }
  }
  
}

