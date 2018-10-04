$(document).ready(function () {
    console.log('Init app')
    $('#tableBody').click(function () {
      var button = $(this).parent().parent()
  
      var id = button.attr('id')
  
      removeElementWithAnimation(id)
    })
  })
  
  function removeElementWithAnimation (id) {
    $('#' + id).parent().parent().hide(2000, function () {
      $(this).remove()  
    })
  
  }