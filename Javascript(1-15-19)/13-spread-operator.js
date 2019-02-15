const obj = {
    a: 1,
    b: 'hello',
    c: 'c'
}

const obj2 = {
    ...obj,
    a: 55, 
    added: 'added'
}

console.log(obj2);

const arr = [1, 25, 2];
const arr2 = [13, ...arr, 4];

console.log(arr2);