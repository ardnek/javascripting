var total = 0;
var limit = 10;
for (var i = 0; i < 10; i++) {
  total += i;
}
console.log(total);




// # FOR LOOPS
//
// For loops look like this:
//
// for (var i = 0; i < 10; i++) {
//   // log the numbers 0 through 9
//   console.log(i)
// }
//
// The variable i is used to track how many times the loop has run.
//
// The statement i < 10; indicates the limit of the loop.
// It will continue to loop if i is less than 10.
//
// The statement i++ increases the variable i by 1 each loop.
//
// ## The challenge:
//
// Create a file named for-loop.js.
//
// In that file define a variable named total and make it equal the number 0.
//
// Define a second variable named limit and make it equal the number 10.
//
// Create a for loop in 10 iterations. On each loop, add the number i to the total variable.
//
// You can use a statement like this one:
//
// total += i;
//
// After the for loop, use console.log() to print the total variable to the terminal.
//
// Check to see if your program is correct by running this command:
//
// javascripting verify for-loop.js




// ******* Other Notes: *******
//
// The for loop that you defined:
//
// for (var i = 0; i < 1; i++) {
//
//   does the following things:
//
//   var i = 0 ... start condition
//   i < 1 ... do as long as i is smaller than 1
//   i++ .... add 1 to the number stored in i
//
//   If you follow this logic then it will do the operation only once because after the first time i will be set to 1 and the condition will not pass anymore.
//
//   This means you only operate on pets[0]!!!
//
//   To operate on all values you need to change the condition to
//   i < pets.length
