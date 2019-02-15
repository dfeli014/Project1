// We can use if statements
let a = true;
let b = false;

// if a and b are both true
if (a && b) {
    console.log('a & b are both true')
} else if (a && !b) {
    console.log('a is true and b is false');
} else {
    console.log('none of these are true');
}

// We can use while loops to continously execute something
let w = true;
while (w) {
    console.log(w);
    const random = Math.floor(Math.random() * 5);

    if (random === 3) {
        w = false;
    }
}

console.log('while loop over');

let doW = false;

do {
    console.log('do while');
    const random = Math.floor(Math.random() * 5);

    if (random === 3) {
        doW = false;
    } else {
        doW = true;
    }
} while (doW);

console.log('do while loop over');

for(let i = 0; i < 5; i++) {
    console.log(`for loop i = ${i}`);
}
console.log('for loop over');

let switchCase = 'hello';

switch (switchCase) {
    case 'hello':
        console.log('world');
        break;

    case 5:
        console.log('number');
        break;

    default:
        break;
}

// ternary is basically an if-else statement
let result = ( 50 < 25) ? 't' : false;
console.log(result);