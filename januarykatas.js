
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


//Issue 7 --------------------------------------------------------------------------
//Write function makeUpperCase.
var makeUpperCase = (str) => str.toUpperCase()


//Issue 8 --------------------------------------------------------------------------

//Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid.
//Write a function to help Bob with this calculation.

const getVolumeOfCuboid = (length, width, height) => length*width*height;



//Issue 9 --------------------------------------------------------------------------

//We want to generate a function that computes the series starting from 0 and ending until the given number following the sequence:
//0 1 3 6 10 15 21 28 36 45 55 ....
//which is created by
//0, 0+1, 0+1+2, 0+1+2+3, 0+1+2+3+4, 0+1+2+3+4+5, 0+1+2+3+4+5+6, 0+1+2+3+4+5+6+7 etc..



function showSequence (count) {
    let inpt = count
    let arr = [0]

    if(inpt > 0){
        for(let i = 1; i < inpt + 1; i++){
            arr.push(i)
        }
        let str = arr.join().replace(/,/g, '+');
        let result = arr.reduce(function(a,b){return a+b},0)
        return  `${str} = ${result}`
    }
    else if(inpt < 0){
       return `${count}<0` 
    }
    else{
	  	return `${count}=${count}`
	  }
  }

//Issue 10 --------------------------------------------------------------------------


// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise


//mine
function isSortedAndHow(array) {
    let arr = array
    let arrStr = arr.join()
    let desc = arr.sort((a, b)=> b-a).join()
    let asce = arr.sort((a, b)=> a-b).join()
    if(arrStr === desc){
        return 'yes, descending'
    }else if(arrStr === asce){
        return 'yes, ascending'
    }else{
        return 'no' 
    }

}

//optimized way

const isSortedAndHow = array => {
    let ascending = array.filter((e, i, a) => e > a[i+1]).length == 0
    let descending = array.filter((e, i, a) => e < a[i+1]).length == 0
    
    return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
}




//Issue 11 --------------------------------------------------------------------------

//Find the number with the most digits.
//If two numbers in the argument array have the same number of digits, return the first one in the array.

//MINE
function findLongest(array){
    let arr = array.map((x) => String(x))
    let ln = arr.reduce((ac,acc) => ac > acc.length ? ac : acc.length, 0);
    let result = arr.filter(most => most.length == ln);
    return Number(result[0])
  }


//BEST SOLUTIONS
// 1
const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);  
// 2
function findLongest(array){
    return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
}


//Issue 12 --------------------------------------------------------------------------

//Make a program that filters a list of strings and returns a list with only your friends name in it.
//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//Note: keep the original order of the names in the output.


const friend = (friends) => friends.filter(f => f.length == 4);




//Issue 13 --------------------------------------------------------------------------

//- Tribonacci with initial values.
//input ([1,1,1],10)
// output [1,1,1,3,5,9,17,31,57,105]

//mine
const tribonacci = (signature,n) => {
    let fib;
   if(n == 0){
       fib = []
   }
   else if(n == 1){
       fib = [1]
   }else{
        fib = signature
        for (var i = 3; i < n ;i++){
           fib[i] = fib[i - 3] + fib[i - 2] + fib[i - 1]
       }
   }
   return fib
}

//other solution
function tribonacci(signature,n) {
    const result = signature.slice(0, n);
    while (result.length < n) {
      result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
    }
    return result;
}



//Issue 14 --------------------------------------------------------------------------

/*
Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.
Give your answer in string format as 'odd' or 'even'.
If the input array is empty consider it as: [0] (array with a zero).

oddOrEven([0]) returns "even"
oddOrEven([2, 5, 34, 6]) returns "odd"
oddOrEven([0, -1, -5]) returns "even"
*/


const oddOrEven = (array) => {
    let num = array.reduce((ac, acc) => ac + acc,0) 
    
    if(num  == 0){
        return 'even'
    }else if(num % 2 == 0){
        return 'even'
    }else{
        return 'odd'
    }
}

//another solution
function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}





//Issue 15 --------------------------------------------------------------------------


/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
In honor of my grandfather's memory we will write a function using his formula!

- Take a list of ages when each of your great-grandparent died.
- Multiply each number by itself.
- Add them all together.
- Take the square root of the result.
- Divide by two.
*/


const predictAge = (age1,age2,age3,age4,age5,age6,age7,age8) => {
    let arr = [age1,age2,age3,age4,age5,age6,age7,age8].map((x)=>x*x)
    return  Math.round(Math.sqrt(arr.reduce((ac, acc) =>  ac + acc,0)) / 2)
}


//Issue 16 --------------------------------------------------------------------------

/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

const filter_list = (l) => l.filter((x) => (typeof x === 'number') ? Number(x >= 0):'') 

