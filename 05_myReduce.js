/**
  Implement your own version of Array.reduce()
  The function should take:
    an array: arr
    a function: f
    an initial value: init
  Example:
    myReduce([12, -3, 6], (accumulator, current) => accumulator + current, 0)
    -> 15
    myReduce([12, -3, 6], (accumulator, current) => accumulator + current, 5)
    -> 20
*/

const myReduce = (arr, f, init) => {
  let sum = init;
  console.log(typeof f);
  arr.forEach( (value) => {
    sum = f(sum, value);
  })
  return sum;
}

module.exports = myReduce
