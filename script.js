class Transport {
   constructor(type, price, brand) {
      this.type = type;
      this.price = price;
      this.brand = brand;
   }
   getInfo() {
      return `тип ${this.type}, бренд ${this.brand}`
   }
   getPrice() {
      return `цена: ${this.price}`
   }
}

class Car extends Transport {
   constructor(type, price, brand, doors) {
      super(type, price, brand);
      this.doors = doors;
   }
   getDoorsCount() {
      return `количество дверей: ${this.doors}`
   }
}

class Bike extends Transport {
   constructor(type, price, brand, maxSpeed) {
      super(type, price, brand);
      this.maxSpeed = maxSpeed;
   }
   getMaxSpeed() {
      return `максимальная скорость: ${this.maxSpeed}`
   }
}


// выводим информацию на страницу
const transportOut = document.querySelector('.transport__out')
data.forEach((item) => {
   const transportItem = document.createElement('div');
   transportItem.classList.add('transport-card');

   // информация для типа "машина"
   if (item.type === "car") {
      const car = new Car(item.type, item.price, item.brand, item.doors);
      const carInfo = document.createElement('p');
      carInfo.textContent = car.getInfo();
      transportItem.append(carInfo);

      const carPrice = document.createElement('p');
      carPrice.textContent = car.getPrice();
      transportItem.append(carPrice);

      const carDoors = document.createElement('p');
      carDoors.textContent = car.getDoorsCount();
      transportItem.append(carDoors);

   }
   // информация для типа "велосипед"
   else if (item.type === "bike") {
      const bike = new Bike(item.type, item.price, item.brand, item.maxSpeed);

      const bikeInfo = document.createElement('p');
      bikeInfo.textContent = bike.getInfo();
      transportItem.append(bikeInfo);

      const bikePrice = document.createElement('p');
      bikePrice.textContent = bike.getPrice();
      transportItem.append(bikePrice);

      const bikeMaxSpeed = document.createElement('p');
      bikeMaxSpeed.textContent = bike.getMaxSpeed();
      transportItem.append(bikeMaxSpeed);
   }
   const transportImage = document.createElement("img");
   transportImage.classList.add("transport-image");
   transportImage.src = item.image;
   transportItem.append(transportImage);


   transportOut.append(transportItem)
})