/**
Question 1
Declare a function called printNumbers(n)
INPUT -> integers > 0
VALIDATION -> check the data type 
            -> return error msg if needed
            -> use for loop to iterate over the numbers
etOUTPUT-> print the first 10 integers starting from 1 
TEST - use multiple case           
 */

const printNumbers = n => {
  if (Number.isNaN(n) || typeof n !== 'number' || n < 0) {
    return 'Please enter number'
  }
  let num
  for (let i = 1; i <= n; i++) {
    console.log(i)
    num = i
  }
  return num
}

console.log(printNumbers(10))
/*
console.log(printNumbers(NaN));//err
console.log(printNumbers(false));//err
console.log(printNumbers('loop'));//err
console.log(printNumbers(undefined));//err
console.log(printNumbers({name:'Amele'}));//err
console.log(printNumbers(-10));//err
*/

/*
Question 2
Declare a function called printSequentialNumbers(n)
INPUT -> integers > 0
VALIDATION -> argument must be a number 
            -> return error msg when n is not a number
            -> use while loop to iterate over & print the numbers
OUTPUT-> starting from n + 1, Print 5 consecutive numbers 
         call function with actual value printSequentialNumbers(7)//8, 9, 10, 11, 12
TEST - use multiple test cases           
 */

const printSequentialNumbers = num => {
  if (!Number.isInteger(num)) {
    return 'Enter a number'
  } else {
    let start = num + 1
    let end = num + 5
    let i = start // to count start to end
    let result = []
    while (i <= end) {
      console.log(i)
      result.push(i)
      i++
    }

    console.log(result)
    return result
  }
}
console.log(printSequentialNumbers(7))
console.log(printSequentialNumbers(true))
//console.log(printSequentialNumbers(100));
console.log(printSequentialNumbers(NaN))

/*
Question 3
Declare a function called sumOfSequentialNumbers(n)
INPUT -> integers > 0
VALIDATION -> argument must be a number 
            -> return error msg when n is not a number
            -> use for loop to iterate over, add each value & print;
OUTPUT-> starting from n + 1, Print the sum of 10 consecutive numbers 
         call function with actual value sumOfSequentialNumbers(7)//8+9+10+11+12+13+14+15+16+17=125
TEST - use multiple test cases           
 */
let sumOfSequentialNumbers = num1 => {
  if (!Number.isInteger(num1) || num1 < 0) {
    return 'Please enter number'
  } else {
    let sum = 0
    let loopStart = num1 + 1
    let loopEnd = num1 + 2
    for (let i = loopStart; i <= loopEnd; i++) {
      sum += i //125
      //sum =+ i// assigns the current value of i (sum = (+i))
      console.log(sum)

      console.log(i)
    }
    return sum
  }
}
console.log(sumOfSequentialNumbers(7))
console.log(sumOfSequentialNumbers(-2))
console.log(sumOfSequentialNumbers(Infinity))

/*
Question 4
Declare a function called printEachArrayValues(arr)
INPUT -> Non empty array 
VALIDATION -> an array must have a values 
            -> return error msg when array is empty
            -> use for loop  through the array, add each value & print;
OUTPUT-> print all values listed in the array; arr[i]
         call function with actual value printEachArrayValues([1, "Hello", 8, 44])
TEST - use multiple test cases           
 */

const printEachArrayValues = arr => {
  if (arr.length == 0 || !Array.isArray(arr)) {
    return 'Empty or non Array  '
  }
  let elements = []
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    elements.push(arr[i])
  }
  return elements
}
console.log(printEachArrayValues([1, 'Hello', 8, 44]))
console.log(printEachArrayValues([]))

/*
Question 5
Declare a function called countArrayLength(arr)
INPUT -> it takes non empty array 
VALIDATION -> an array must have a values 
            -> return error msg when array is empty
            -> use array "length" property & get number of values;
            -> The length property sets or returns the number of elements in an array.
OUTPUT-> Print how many number of array values; console.log(arr.length)// 4
         call function with actual value countArrayLength([1, "Hello", 8, 44])
TEST - use multiple test cases           
 */
let arr1 = ['Amele']
arr1.length = 5
console.log('Length with empty value : =>', arr1.length) //5
console.log(arr1) //[ 'Amele', undefined, undefined, undefined, undefined ]

const countArrayLength = arr => {
  if (!Array.isArray(arr) || arr.length == 0) {
    return 'Empty or non Array value'
  }
  return arr.length
}

console.log(countArrayLength([1, 'Hello', 8, 44])) //4
console.log(countArrayLength(NaN))
console.log(countArrayLength([]))
console.log(countArrayLength(['world', 12, true, NaN, undefined])) //
console.log(countArrayLength(5))

/*
Question 6
Declare a function called sumAllArrayElement(arr)
INPUT -> it takes non empty array 
VALIDATION -> an array must have a values 
            -> return error msg when array is empty || other data types
         SOLUTION 1 -> use for loop to access each array element ||check type & calculate;
         SOLUTION 2 -> use builtin array methods or callback  or higher order func like reducer
            -> select numbers from array & calculate the total value;
OUTPUT-> Print sum of array elements;
         call function with actual value sumAllArrayElement([1, "Hello", 8, 44])
TEST - use multiple test cases           
 */

let sumAllArrayElement = arr => {
  if (!Array.isArray(arr) || arr.length == 0) {
    return 'Empty or non Array value'
  }
  let sum = 0

  //========== SOLUTION 1 =========
  /* for (let i = 0; i < arr.length; i++) {
    if (Number.isFinite(arr[i])) {
      sum += arr[i];
    }
  }
  return sum;  */
  //===========  SOLUTION 2 Reducer combine aa element into a single value ==========
  let reducedVal = arr.reduce((cumulative, value) => {
    if (Number.isFinite(value)) {
      console.log('Total:', cumulative, 'value:', value)
      return (cumulative += value)
    }
    return cumulative;
  }, 0)
  console.log(reducedVal)
  return reducedVal
}
console.log(sumAllArrayElement([5, 6, 99, 8, 76, 4, 68, 44])) //310
console.log(sumAllArrayElement([true, 16, 'Amele', NaN, 5])) //21
console.log(sumAllArrayElement([3, 0])) //3
console.log(sumAllArrayElement(true)) //3

/*
for (const value of values) {
    if (typeof value === "string") {
      continue; // Skip this item
    }

    if (typeof value === "number") {
      sum += value;*/

//Count
function count (num) {
  if (typeof num !== 'number' || !Number.isFinite(num)) {
    return 'valid number' // NaN = true typeof !== 'number'
  }
  return num + 1
}

console.log(count(2)) //3

/*console.log(count('num'));//error 
console.log(count(NaN));//error
console.log(count(true));//error
console.log(count(Infinity));//error
console.log(count(Math.sqrt(2)));//2.414213
console.log(Number.isFinite(1));//true
console.log(Number.isFinite(NaN));//false
console.log(!Number.isFinite(NaN));//true
*/
