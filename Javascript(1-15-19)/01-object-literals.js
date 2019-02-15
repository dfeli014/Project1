let bike = {
    frontGears: 3,
    backGears: 7,
    material: 'aluminum'
}

console.log(bike);

// We can use dot notation to access fields
console.log(`the bike material is: ${bike.material}`);

// We can also use bracket notation
console.log(`bike number of front gears is ${bike["frontGears"]}`);

bike.height = 24;
console.log(`bike height: ${bike.height}`);