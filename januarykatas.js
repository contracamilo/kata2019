
//Issue 1 ------------------------------------------------------------------------

/*Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:
SeriesSum(1) => 1 = "1.00"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"*/

function SeriesSum(n) {
  for (var result = 0, i = 0; i < n; i++) {
    result += 1 / (1 + i * 3)
  }
  
  return result.toFixed(2)
}



//Issue 2 --------------------------------------------------------------------------

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


//Issue 3 --------------------------------------------------------------------------

/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3) 

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 */

const stray = numbers => numbers.reduce((a, b) => a ^ b);

// ^ Por cada posición de bit en la cual los bits correspondientes de ambos operandos son iguales devuelve cero y si son diferentes devuelve uno.


