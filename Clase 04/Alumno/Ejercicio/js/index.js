var examResults = [ 7, 5, 6, 4, 3, 2, 8 ];

function calcProm (examResults) {
  
  var value
  var prom = 0

  
  for (var i = 0; i < examResults.length; i++) {
    value = examResults[i]
    prom = prom + value
  }

  prom = prom / examResults.length

  return prom
}

var result = calcProm(examResults);

console.log('El promedio es: ' + result);
