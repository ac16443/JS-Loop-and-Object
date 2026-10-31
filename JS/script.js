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

const printNumbers = (n) => {
  if (Number.isNaN(n) || typeof n !== "number" || n < 0) {
    return "Please enter number";
  }
  let num;
  for (let i = 1; i <= n; i++) {
    console.log(i);
    num = i;
  }
  return num;
};

console.log(printNumbers(10));
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

const printSequentialNumbers = (num) => {
  if (!Number.isInteger(num)) {
    return "Enter a number";
  }
  // for(let i = n+1; i<= n +5; i++){}
  let start = num + 1;
  let end = num + 5;
  let i = start; // to count start to end
  let result = [];
  while (i <= end) {
    console.log(i);
    result.push(i);
    i++;
  }

  console.log(result);
  return result;
};
console.log(printSequentialNumbers(7));
console.log(printSequentialNumbers(true));
//console.log(printSequentialNumbers(100));
console.log(printSequentialNumbers(NaN));

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
let sumOfSequentialNumbers = (num1) => {
  if (!Number.isInteger(num1) || num1 < 0) {
    return "Please enter number";
  } else {
    let sum = 0;
    let loopStart = num1 + 1;
    let loopEnd = num1 + 2;
    for (let i = loopStart; i <= loopEnd; i++) {
      sum += i; //125
      //sum =+ i// assigns the current value of i (sum = (+i))
      console.log(sum);

      console.log(i);
    }
    return sum;
  }
};
console.log(sumOfSequentialNumbers(7));
console.log(sumOfSequentialNumbers(-2));
console.log(sumOfSequentialNumbers(Infinity));

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

const printEachArrayValues = (arr) => {
  if (arr.length == 0 || !Array.isArray(arr)) {
    return "Empty or non Array  ";
  }
  let elements = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    elements.push(arr[i]);
  }
  return elements;
};
console.log(printEachArrayValues([1, "Hello", 8, 44]));
console.log(printEachArrayValues([]));

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
let arr1 = ["Amele"];
arr1.length = 5;
console.log("Length with empty value : =>", arr1.length); //5
console.log(arr1); //[ 'Amele', undefined, undefined, undefined, undefined ]

const countArrayLength = (arr) => {
  if (!Array.isArray(arr) || arr.length == 0) {
    return "Empty or non Array value";
  }
  return arr.length;
};

console.log(countArrayLength([1, "Hello", 8, 44])); //4
console.log(countArrayLength(NaN));
console.log(countArrayLength([]));
console.log(countArrayLength(["world", 12, true, NaN, undefined])); //
console.log(countArrayLength(5));

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

let sumAllArrayElement = (arr) => {
  if (!Array.isArray(arr) || arr.length == 0) {
    return "Empty or non Array value";
  }
  let sum = 0;

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
      console.log("Total:", cumulative, "value:", value);
      return (cumulative += value);
    }
    return cumulative;
  }, 0);
  console.log(reducedVal);
  return reducedVal;
};
console.log(sumAllArrayElement([5, 6, 99, 8, 76, 4, 68, 44, 0.5])); //310
console.log(sumAllArrayElement([true, 16, "Amele", NaN, 5])); //21
console.log(sumAllArrayElement([-1, 2])); //3
console.log(sumAllArrayElement(true)); //3

/*
Question 7
Declare a function called subtractSumOddFromSumEven(arr)
INPUT -> it takes non empty array 
VALIDATION -> an array must have a all type of numbers 
            -> return error msg when array is empty || other data types other than numbers
         SOLUTION 1 -> for ..of Vs Ternary operation  ;
         SOLUTION 2 -> use builtin array methods or callback  or higher order func like  reducer
         SOLUTION 3 -> use for loop to access each array element ||check if the number is Even Odd;
            -> select numbers from array, add all even and Odd separately hold the total in the variables;
            -> subtract sum of odd num from sum of evens (evenSum - oddSum )
OUTPUT-> Print the result subtraction value of even odd numbers;
         call function with actual value subtractSumOddFromSumEven([5, 6, 99, 8, 76, 4, 68, 44]) 
TEST - use multiple test cases           
 */

const subtractSumOddFromSumEven = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    return "Empty or non Array value";
  }
  let evenSum = 0;
  let oddSum = 0;
  let total = 0;

  //SOLUTION 1 Ternary operation
  /*for(let item of array){
  if(typeof item === 'number' && Number.isFinite(item)){

    total += item % 2=== 0 ? item : -item;
}

}
return total; */
  //SOLUTION 3
  for (const arr of array) {
    if (typeof arr === "number" && Number.isInteger(arr)) {
      if (arr % 2 === 0) {
        evenSum += arr;
      } else {
        oddSum += arr;
      }
    }
  }
  total = evenSum - oddSum;
  console.log(evenSum - oddSum);
  return total;
};
console.log(subtractSumOddFromSumEven([5, 6, 99, 8, 76, 4, 68, 44]));
console.log(
  subtractSumOddFromSumEven([1, 2, 3, "Amele", 4, 5, true, 6, 7, 8, 9, 10]),
); //5= even=30 - odd=25

/*
Question 8
Write a function that takes an array as a parameter and logs in the console the elements that have
even indexes only. Notice: this question is not asking you to log elements with even value, but
elements that are located on even indexes)
○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
should be:5 99 76 68
○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
be: 11 3 car          
 */
const evenIndex = (arr) => {
  let valuesatEvenIndex = [];
  // validation should be here
  for (let i = 0; i < arr.length; i += 2) {
    console.log(i); //0,2,4,6
    console.log(arr[i]);
    valuesatEvenIndex.push(arr[i]);
  }
  return valuesatEvenIndex;
};
console.log(evenIndex([5, 6, 99, 8, 76, 4, 68, 44])); //[5,99,76,68]
//Question 9
let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
let modifiedArray = [...sampleArray.slice(0, -1), 32];
console.log(modifiedArray);
//Question 10
let sortedValue = modifiedArray.sort((a, b) => a - b);
let sortedValue2 = modifiedArray.sort((a, b) => b - a);
console.log(sortedValue);
let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};
//Question 11
//Question 12
//Question 13
const findAverageAge = (obj) => {
  let countAgeTotal = 0;
  for (let student of obj.students) {
    console.log(student);

    countAgeTotal += student["age"];
    console.log(countAgeTotal);
  }
  let average = countAgeTotal / obj.students.length;
  console.log(average); //29.2

  return average;
};
console.log(findAverageAge(evangadiClass)); //29.2
//Question 14
const findAverageMaleStudents = (obj) => {
  let countMale = 0;
  for (let student of obj.students) {
    if (student["sex"] === "M") {
      countMale++;
      console.log(countMale);
    }
  }

  let average = (countMale / obj.students.length) * 100;
  console.log(average); //60

  return average;
};
console.log(findAverageMaleStudents(evangadiClass)); //60

//Question 15
function divideByThree(low, high) {
  for (let number = low; number <= high; number++) {
    if (number % 3 === 0) {
      console.log(number + " :Div3");
    } else {
      console.log(number);
    }
  }
}
console.log(divideByThree(1, 10));

//Question 16
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz :", i);
    } else if (i % 3 === 0) {
      console.log("Fizz: ", i);
    } else {
      console.log("Buzz: ", i);
    }
  }
};

console.log(fizzBuzz(15));

//Question 17
function isEvensNums(num) {
  let digits = Math.abs(num);
  /*evenDigit = 0;
  for (let digit of digits) {
    if (digit % 10 === 0) {
      evenDigit = digit;
      console.log(evenDigit);
    }
  }
  console.log(digits);
  return evenDigit;*/

  let stringNum = String(num);
  console.log(stringNum);
  for (let n of stringNum) {
    console.log(n);
    if (Number(n) % 2 === 0) {
      return true;
    } else {
      return false;
    }
  } 
}

console.log(isEvensNums(2426));
console.log(isEvensNums(3224));

function removeDuplicates(arr) {
  let newArr = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let singleId = arr[i].id;
    if (!newArr.includes(singleId)) {
      console.log(newArr.push(arr[i].id));
      console.log(result.push(arr[i]));
    }
  }
  return result;
}
//let arrList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 2 }];
console.log(removeDuplicates([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 2 }]));

//Count
function count(num) {
  if (typeof num !== "number" || !Number.isFinite(num)) {
    return "valid number"; // NaN = true typeof !== 'number'
  }
  return num + 1;
}

console.log(count(2)); //3

/*console.log(count('num'));//error 
console.log(count(NaN));//error
console.log(count(true));//error
console.log(count(Infinity));//error
console.log(count(Math.sqrt(2)));//2.414213
console.log(Number.isFinite(1));//true
console.log(Number.isFinite(NaN));//false
console.log(!Number.isFinite(NaN));//true
*/
