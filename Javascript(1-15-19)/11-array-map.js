let arr1 = [
    {"first:name": 'here', "last:name": 'disney', role : "trainer", location: "tampa"},
    {"first:name": 'here', "last:name": 'disney', role : "trainer", location: "tampa"},
    {"first:name": 'here', "last:name": 'disney', role : "trainer", location: "tampa"},
    {"first:name": 'here', "last:name": 'disney', role : "trainer", location: "tampa"}
]

let converedArr = arr.map(ele => {
    return {
        fullName: `${ele["first:name"]} ${ele["last:name"]}`,
        trainingLocation: ele.location
    }
})

console.log(converedArr);