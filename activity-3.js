// Start off by creating an array with three student names.
const studentList = ['arianne','chethan','jordan']

// Create a loop that will prompt the user for three more names.
for (let i=0;i<3;i++){
    const studentNames = prompt(`Please enter three more names ${i+1}:`)
    // After every user input, store the new name into the array.
    studentList.push(studentNames)
}
// Create a new loop that will iterate through the array and console log each element of the array.
for(let i=0; i<studentList.length;i++){
    console.log(studentList[i])
}