var cars = [
    {
      model:'Suran',
      brand: 'volkswagen',
      year: 2015
    },
    {
      model:`Audi TT`,
      brand:'Audi',
      year: 2017
    },
    {
      model:`Gran turismo`,
      brand:'Maserati',
      year: 2018
    }
  ];

  function Car (model,brand,year) {
    var id = Math.random()

      this.model = model
      this.brand = brand
      this.year = year

      this.getCarName = function () {
        var textCarData = this.model + ', ' + this.brand + ', ' + this.year
        return textCarData
  }

}

  var car = new Car('Suran', 'Volkswagen', 2015)

  console.log(car.getCarName())

  var car = new Car('Audi TT', 'Audi', 2017)

  console.log(car.getCarName())

  var car = new Car('Gran Turismo', 'Maserati', 2018)

  console.log(car.getCarName())

  



  



