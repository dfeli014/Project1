/**
 * In ES6, Javascript introduced Classes
 */

 class Bike {
     constructor(frontGears, backGears, material) {
         this.frontGears = frontGears;
         this.backGears = backGears;
         this.material = material;
     }

     ride() {
        console.log('you ride the bike');
     }
 }

 let myBike = new Bike(3,7,'carbon');
 console.log(myBike);
 myBike.ride();