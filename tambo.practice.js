//Excersise 1
//-------------------------------------------------------------------
let dayArr = [ "Monday", "Tuesday", "Wedsnday", "Thuesday", "Friday", "Satuday", "Monday" ]
let $date = new Date();
let h  = ($date.getHours() < 10 ) ? '0'+Math.abs($date.getHours() - 12) : $date.getHours()
let m  = ($date.getMinutes() < 9) ? '0'+$date.getMinutes() : $date.getMinutes()
let s  = $date.getSeconds()
let pm = (h >= 12) ? 'pm':'am'

const day_name =  (dt) => dayArr[dt.getDay() -1];

let result = `today is ${day_name(new Date())}, Current time is: ${h}:${m}:${s}, ${pm}`
console.log(result)


//Excersise 2
//-------------------------------------------------------------------




//Excersise 3
//-------------------------------------------------------------------
let areaTr = (a, b, c) => {
    let s = (a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2);
}

//Excersise 4
//-------------------------------------------------------------------

function reverseStr(str) {

    let r = ['']
    let res = str.split('')
    let arr = str.split('').reverse()
    for(var i = 0; i <= arr.length-1; i++){
        r.push(arr[i])
        res.push(r.pop())
        res.shift()
	let pro = res.join('')
	setTimeout(console.log(pro), 1200);
       
    }
    return res.join('')

}

//Excersise 5
/*----------------html
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
     <h1>Multiply and divive me</h1>
      Value 1: 
      <input id="valueOne" type="text" name="fname" value=""/> 
      Value 2:
      <input id="valueTwo" type="text" name="fname" value="" /><br>
      <input type="submit" onclick="divide()" value="Divide" />
      <input type="submit" onclick="multiply()" value="Multiply" />
    
    <div id="result"></div>

    <script src="./index.js"></script>
  </body>
</html>
*/
/*----------------js */

const divide = () => { 
    let valueOne =  Number(document.getElementById("valueOne").value);
    let valueTwo = Number(document.getElementById("valueTwo").value);
    document.getElementById("result").innerHTML = (valueOne && valueTwo !== null) ? valueOne / valueTwo : 'Give me a number'
}


const multiply = () =>{
    let valueOne =  Number(document.getElementById("valueOne").value);
    let valueTwo = Number(document.getElementById("valueTwo").value);
    document.getElementById("result").innerHTML = (valueOne && valueTwo !== null) ? valueOne * valueTwo : 'Give me a number'
}

//Excersise 6 -----------------------------------------

let hoy = new Date();
let navidad = new Date(hoy.getFullYear(), 11, 25);
let dia = 1000 * 60 * 60 * 24;
hoy.getMonth() == 11 && hoy.getDate() > 25
  ? navidad.setFullYear(navidad.getFullYear() + 1)
  : "";
console.log(
  Math.ceil((navidad.getTime() - hoy.getTime()) / dia) +
    "para la maldita y plastica Navidad"
);
