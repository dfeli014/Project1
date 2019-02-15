function Bike(frontGears, rearGears, material) {
    this.frontGears = frontGears;
    this.rearGears = rearGears;
    this.material = material;
}

let myBike = new Bike(3, 7, "carbon");
let otherBike = new Bike(1, 7, 'steel');
console.log(myBike);
console.log('otherBike: ', otherBike);