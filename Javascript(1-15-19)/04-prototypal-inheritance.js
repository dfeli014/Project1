let one = {
    a: 5, 
    b: 10
}

let two = {
    b: 'parent',
    c: 'c'
}

let three = {}
three.__proto__.potato = 'mashed';

// Make one inherit from two
one.__proto__ = two;
console.log(one.c);
console.log(two.potato);