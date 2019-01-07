//Convert number to reversed array of digits
//Given a random number:
//You have to return the digits of this number within an array in reverse order.
//Example:
//348597 => [7,9,5,8,4,3]

function digitize(n) {
  result = n.toString().split("").reverse();
  var result = result.map((x) => parseInt(x))
  return result
}

//more clean -----------------------
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}
