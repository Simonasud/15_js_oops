"use strict";
console.log("Car.js file was loaded");

// 1. Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.

// 2. Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

class Car {
  constructor(brand, model, engine, basePrice) {
    this.carBrand = brand;
    this.carModel = model;
    this.carEngine = engine;
    this.basePrice = basePrice;
    // this.finalPrice = this.basePrice;
  }

  turnOn() {
    alert("vroom");
  }

  getPrice() {
    if (this.carEngine === "electric") {
      this.basePrice += 10000;
    } else if (this.carEngine === "diesel") {
      this.basePrice += 5000;
    }
    return this.basePrice;
    // Jei variklis yra "petrol", nereikia nieko keisti
  }
}

const car1 = new Car("Audi", "A4", "electric", 6000);
console.log(car1);
car1.turnOn();
car1.getPrice();
console.log("Final Price for car1:", car1.basePrice);

const car2 = new Car("BMW", "X6", "diesel", 5030);
console.log(car2);
car2.turnOn();
car2.getPrice();
console.log("Final Price for car2:", car2.basePrice);
