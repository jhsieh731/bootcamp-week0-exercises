// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
const reverse = (str) => {
  return str.split("").reverse().join("");
}

// TODO - write a function which returns the factorial of a positive integer
const factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
  
}

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return -1;
  }
  const zipped = []
  for (let i = 0; i < arr1.length; i++) {
    zipped.push([arr1[i], arr2[i]])
  }
  return zipped;
}

// TODO - Write a function which does the opposite of `zip()`
const unzip = (arr) => {
  const unzipped = [[], []];
  for (let i = 0; i < arr.length; i++) {
    unzipped[0].push(arr[i][0]);
    unzipped[1].push(arr[i][1]);
  }
  return unzipped;
}

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftRight("Hello", 3) === "lloHe"
const shiftRight = (str, num) => {
  const shiftedNum = str.length - (num % str.length)
  return str.substring(shiftedNum) + str.substring(0, shiftedNum)
}

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."
const announceDate = () => {
  const table = {
    0: 'January',
    1: 'February',
    2: 'March', 
    3: 'April', 
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }

  const date = new Date();
  const day = (value) => {
    if (value % 10 === 1) {
      return value + 'st';
    }
    else if (value === 2) {
      return value + 'nd';
    }
    else if (value === 3) {
      return value + 'rd';
    }
    else {
      return value + 'th';
    }
  }

  const timeOfDay = (hours) => {
    return hours < 12 ? 'morning' : 'afternoon'
  }
  const month = table[date.getMonth()];
  const printDay = day(date.getDate());
  const printYear = date.getFullYear();
  const printHours = date.getHours() % 12;
  const printMinutes = date.getMinutes();
  const printTOD = timeOfDay(date.getHours());
  
  return `Today's date is ${month} ${printDay}, ${printYear}. It is ${printHours}:${printMinutes} in the ${printTOD}.`;
}

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}

announceDate();