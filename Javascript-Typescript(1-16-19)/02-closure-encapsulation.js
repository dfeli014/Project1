function bike(numSpeed, material) {
    let numberSpeeds = numSpeed;
    let bikeMaterial = material;
    this.getNumberSpeeds = () => {
        return numberSpeeds;
    }

    this.setNumberSpeeds = (numberSpeed) => {
        numberSpeeds = numberSpeed;
    }

    this.getBikeMaterial = () => {
        return bikeMaterial;
    }

    this.setBikeMaterial = (material) => {
        bikeMaterial = material;
    }
}

let myBike = new bike(21, 'titanium');
console.log(myBike.getNumberSpeeds());
myBike.setNumberSpeeds(17);
console.log(myBike.getNumberSpeeds());