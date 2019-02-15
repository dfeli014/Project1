let string = 'hello'; // you can use single quotes (typically the most used)
let str = "world"; // you can use double quotes
let num = 45

let templateLiteral = `template literals allow for multi line strings and were introduced w/ ES6
they also allow for string interpolation
for instance
string = ${string}
str = ${str}
num = ${num}
25 * 3241234 = ${25 * 32412324}
basically inside of the dollar brackets you can put any JS expression`

console.log(templateLiteral);