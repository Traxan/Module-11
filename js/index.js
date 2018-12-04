function Phone(brand, price, color, memory, weight) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.memory = memory;
    this.weight = weight;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". " + "Memory: " + this.memory + " and weight: " + this.weight + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "64GB", "170 grams");
var samsungGalaxyS6 = new Phone("Samsung", 1200, "black", "64GB", "200 grams");
var onePlusOne = new Phone("OnePlus", 1000, "white", "32GB", "210 grams");

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();