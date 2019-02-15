const a =  false; 
const b = 'hello';
const c = a && b;

console.log(c);

function printName(obj) {
    console.log(obj && obj.name);

}

printName({name: 'mohamed'});
printName(null);