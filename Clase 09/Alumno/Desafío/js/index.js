var inputEmail = document.getElementById('input-email')

inputText.onblur = showMessage

function showMessage(){
  console.log('El usuario perdió foco')
}

//function showMessage (event) {
//   var emailNode = document.getElementById('email')

//   var value = emailNode.value

//   // if (value.length < 5) {
//   //   console.log('Email muy corto')
//   // } else {
//   //   console.log('Email correcto')
//   // }
// }
