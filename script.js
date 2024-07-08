/*
This block of global variables sets some conditions for the pyramid.
Also initializes the array in which the pyramid rows will be stored.

const: for variables that won't be reassigned for the duration of code 
count: how many rows for the pyramid
rows: empty array to store line by line strings of pyramid. will be populated for loop
*/
const character = "#"; 
const count = 8;
const rows = [];
let inverted = true; // alternately set to false 

/*
This function block produces a given line of the pyramid. 
(Repetitions of each character are determined by formulas relating the row position 
and total size of the pyramid.)

padRow: function returns a concatenated string of whitespace + character + whitespace  
repeat: method repeats the string a specified number of times 
rowNumber: current row
rowCount: total number of rows
*/
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber)
        + character.repeat(2 * rowNumber - 1)
        + " ".repeat(rowCount - rowNumber);
}

/*
This loop block populates the array with the strings returned by padRow.
(Adds at start or end of array depending on condition of inverted.)

let i: need to initialize the counter variable
unshift: method to add item to start of array
push: method to add item to end of array 
padRow returns the string to be added to rows 
*/
for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

/*
This block translates the array into a string which gets printed to console. 
(We need to print a formatted string, not the array.)

result: string to hold total contents of rows array
for of: iterates on each item of the rows array, concatenating each item with a new line 
const: each item of the array is accessed as read-only 
*/
let result = ""; 

for (const row of rows) { 
    result = result + "\n" + row;
}

console.log(result); 