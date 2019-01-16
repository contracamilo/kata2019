Extra Issue 1 --------------------

//remove duplicates from an array or string provided as a param.

const uniqueInOrder = (iterable)=> return (typeof iterable == 'string')  ?  [...new Set( iterable.split('') )] : [...new Set(iterable)];



Extra Issue 2 --------------------

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/


var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}
