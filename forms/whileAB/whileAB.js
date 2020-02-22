//gets user's first and last name
let firstName = prompt('Please enter your first name.')
let lastName = prompt('Please enter your last name.')
let name = firstName.concat(lastName)

//outputs each letter
for (i = 0; i < name.length; i++) {
  console.log(`Letter ${i + 1} is ${name[i]}.`)
  }
  