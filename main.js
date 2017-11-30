
var FoodItem = function (name, calories, vegan, glutenFree) {
  this.name = name,
  this.calories = calories,
  this.vegan = vegan,
  this.glutenFree = glutenFree
}

var textVegan;
var textGluten;
var bacon = new FoodItem('bacon', 100, false, true)
var orange = new FoodItem('orange', 120, true, true)
var macCheese = new FoodItem('macCheese', 350, false, false)
var bread = new FoodItem('bread', 90, true, false)

console.log(bacon);

FoodItem.prototype.stringify = function(){
    if (this.glutenFree) {
      textGluten = 'is gluten free'
    }
    if (!this.glutenFree) {
      textGluten = 'has gluten'
    }
    if (this.vegan) {
      textVegan = 'is vegan'
    }
    if (!this.vegan) {
      textVegan = 'is not vegan'
    }
    return this.name + " has " + this.calories + " calories, " + textVegan + ", and " + textGluten
}

console.log(bacon.stringify())
console.log(orange.stringify())
console.log(macCheese.stringify())
console.log(bread.stringify())


var Plate = function (name, description, price, ingredients) {
  this.name = name,
  this.description = description,
  this.price = price,
  this.ingredients = ingredients
}

var saladPlate = new Plate('saladPlate', 'vegetarian', 9.95, 'lettuce, tomatoes, cukes, dressing')

Plate.prototype.stringify = function(){
    return this.name + " is " + this.description + ", costs " + this.price + ", and is made of " + this.ingredients
}
console.log(saladPlate.stringify())
