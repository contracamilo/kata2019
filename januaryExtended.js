//Extra Issue 1 --------------------
//remove duplicates from an array or string provided as a param.

const uniqueInOrder = (iterable)=> return (typeof iterable == 'string')  ?  [...new Set( iterable.split('') )] : [...new Set(iterable)];



/*Extra Issue 2 --------------------
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

const uniqueInOrder = (iterable) => [].filter.call(iterable, ((a, i) => iterable[i - 1] !== a ));



/*Extra Issue 3 --------------------
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once ( ignore duplicates).

Notes :
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
1- minValue ({1, 3, 1})  ==> return (13)
*/


const minValue = (values) => Number([...new Set(values)].sort((a,b) => a - b ).join(''))



/*Extra Issue 4 --------------------
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
If you want to know more http://en.wikipedia.org/wiki/DNA
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
*/

//mine
function DNAStrand(dna){
    let complementDna = dna.split('').map((x) => {
        switch (x) {
          case 'A':
               return 'T'
          case 'T':
               return 'A'
          case 'C':
               return 'G'
          case 'G':
               return 'C'
          break;
       }	
    })
    
    return  `${dna}, String ${complementDna.join('')} is`
  
  }

  //other solution

  function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }

/*Extra Issue 4 --------------------
Count the same number used in all number generated in the series.

function nbDig(n, d) {
    let arr = []
	  
    for(let i = 0; i <= n; i++){
         var k = i*i
         arr.push(k)
    }

    return arr.map((x)=> String(x).match(/[0-9]/gi)).flat().filter((x) => x == d).length
}
