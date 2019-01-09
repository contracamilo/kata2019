
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



//Issue 4 --------------------------------------------------------------------------

//Welcome. In this kata, you are asked to square every digit of a number.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//Note: The function accepts an integer and returns an integer


function squareDigits(num){
    var result = String(num).split('').map((x)=>x*x).join('')
    return parseInt(result)
}




//Issue 5 --------------------------------------------------------------------------


//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
    return arr.reduce((value, accum) => accum > 0 ? value + accum : value, 0)
}
//Other way to write this ES6:
const positiveSum = (arr) => arr.reduce((value, accum) => accum > 0 ? value + accum : value, 0)


//Issue 6 --------------------------------------------------------------------------
//We need a function that can transform a string into a number. What ways of achieving this do you know?

var stringToNumber = (str) => Number(str);



