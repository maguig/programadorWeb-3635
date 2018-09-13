


var emailNode = document.getElementById('email')


function validateEmail (event) {
  var inputNode = event.target;

  var value = inputNode.value;

  var regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (!regexEmail.test(value)) {
    inputNode.classList.add('is-invalid');
    inputNode.classList.remove('is-valid');
  } else {
    inputNode.classList.add('is-valid');
    inputNode.classList.remove('is-invalid');

  }
}

emailNode.onblur = validateEmail;

 