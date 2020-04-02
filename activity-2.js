// Activity 2: JavaScript Variables, Alerts, Prompts, and Conditionals:

// Grab a user input using a prompt() and store it in a variable.

const varName = prompt('Please enter a variable name: ')

// Add a conditional statement where if the variable's length is greater than 4,
if(varName.length > 4)

// we alert the user that their name is greater than four characters.
alert(`your name is greater than 4`);

// Otherwise, alert that their name is less than four characters.
else if(varName.length < 4){
    alert(`your name is less than 4`)
}