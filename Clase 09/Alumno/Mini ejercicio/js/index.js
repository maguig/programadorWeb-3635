var buttonNode = document.getElementById('button')

buttonNode.onclick = validateAge

function validateAge () {
  var ageNode = document.getElementById('age')

  var value = ageNode.value

  if (value.length <18) {
    console.log('Eres menor de edad', value)
  } else {
    console.log('Eres mayor de edad', value)
  }
}