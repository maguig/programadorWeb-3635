var firstNameNode = document.getElementById('firstName')


function validateFirstName (event) {
  var inputNode = event.target;

  var value = inputNode.value;

  if (value == '') {
    inputNode.classList.add('is-invalid');
    inputNode.classList.remove('is-valid');
  } else {
    inputNode.classList.add('is-valid');
    inputNode.classList.remove('is-invalid');

  }
}

firstNameNode.onblur = validateFirstName;

