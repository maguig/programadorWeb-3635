console.log('init app')

var firstNameNode = $('.firstNameNode')

firstNameNode.blur(validateField)

function validateField (event) {
  var inputNode = $(event.target)
  
  var value = inputNode.val()

  console.log(value)
}

  