var emailNode = document.getElementById('email')

emailNode.oninput = validateEmail

function validateEmail (event) {
  var inputNode = event.target

  var value = inputNode.value

  var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  if (!regexPassword.test(value)) {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }
}