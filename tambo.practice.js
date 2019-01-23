//Excersise 1
//-------------------------------------------------------------------
let dayArr = [ "Monday", "Tuesday", "Wedsnday", "Thuesday", "Friday", "Satuday", "Monday" ]
let $date = new Date();
let h  = ($date.getHours() > 12 ) ? Math.abs($date.getHours() - 12) : $date.getHours();
let m  = $date.getMinutes()
let s  = $date.getSeconds()
let pm = (h >= 12 ||  h <= 24) ? 'pm':'am'

const day_name =  (dt) => dayArr[dt.getDay()];

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
        console.log(res)
    }
    return res.join('')

}
