interface Plant {
    color: string;
    grow: (resource: any) => void
}

class VenusFlyTrap implements Plant {
    color = '';
    grow = (resource) => {
        console.log('plant grows and color is: ' + this.color);
    }

    constructor(color: string) {
        this.color = color;
    }
}

let myPlant: Plant = new VenusFlyTrap('green');
console.log(myPlant);
myPlant.grow('');

myPlant = {
    color: 'blue',
    grow: (resource) => {

    }
}