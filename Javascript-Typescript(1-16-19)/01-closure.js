
function outer() {
    let a = 5;
    return (newVal) => {
        if (newVal) {
            a = newVal;
        }
        return a;
    }
}

let inner = outer();
console.log(inner());
console.log(inner('hello'));
console.log(inner());

