//uses a function that takes 2 parameters and returns sum
function calculate(num1, num2) {
  let summedNumbers = (num1 + num2)
  return summedNumbers
  }

//get the parameters
let num1 = parseInt(prompt('Please enter a number: '))
let num2 = parseInt(prompt('Please enter a second number: '))
let summedAnswer = calculate(num1, num2)
console.log(`The sum of ${num1} and ${num2} is ${summedAnswer}.`)