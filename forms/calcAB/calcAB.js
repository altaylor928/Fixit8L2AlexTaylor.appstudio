//uses a function that takes 2 parameters and returns product
function calculate(n1,n2) {
  return n1 * n2
  }

//
let myNumbers = [10,20,30,40]
let runningTotal = 1           
for (i = 0; i < myNumbers.length; i++){
  runningTotal = calculate(myNumbers[i],runningTotal)
}
console.log(`The sum of those numbers is ${runningTotal}.`)

/*
form ‘calcAB’
uses array ‘myNumbers’ of numbers provided
uses loop in main program
uses a function named ‘Calculate’ that takes 2 parameters and returns product
loop goes through array, calls the function each iteration and passes 2 numbers from the array.
running total of products of pairs of numbers as loop iterates
final sum of product of pairs of numbers output to console.

eg. Given array of numbers: [10,20,30,40]
the calculation would go like this:
(10 * 20) + (30 * 40) = 1400

When the loop is done, output the answer to the console.
*/