

var FirstName = document.getElementById('FirstName ')

FirstName.onblur = validateFirstName

function validateFirstName(event){
  var inputNode =  event.target

  console.log('El usuario perdió foco y el input tiene el valor ' + inputNode.value)
}