console.log('init app')

var firstNameNode = $('#firstNameNode')

firstNameNode.blur(validateField)

function validateField (event) {
  var inputNode = $(event.target)
  // Old S
  // var value = event.target.value
  // JQuery
  var value = inputNode.val()

  console.log(value)
}

  