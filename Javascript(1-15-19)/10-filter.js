let arr = [25, 2, 15, 347, 81, 12, 88];

let filteredArr = arr.filter((element) => {
    return (element % 2) === 0;
})

console.log(filteredArr);