/*
    var supports global and function scopes
    let and const support "global", function, and block scopes
*/

// If a variable is declared outside all functions, it is then "global"
var g = 10;
let h = 'hello';
const c = 'world'; // same scoping as let but cannot be reassigned. 
// c = 5; this would give an error

function scopes() {
    console.log(g);
    // the declaration of a will be hoisted to the top of it's 
    // envision var a; right here.
    if (true) {
        var a = 5;
        let b = 10;
    }

    console.log(a);
    // following would give a reference error because let is block scoped.
    // console.log('b =' + b);
}

scopes();