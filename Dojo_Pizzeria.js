var pizza = {
    crust:    "deep dish",
    sauce:  "traditional",
    cheese:   "mozzarella",
    toppings: ["pepperoni", "sausage"]
};
    
console.log(pizza);



function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);


var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("stuffed crust","marinara","kolby jack", ["canadian bacon", "pineapple"]);
console.log(pizza3);

var pizza4 = pizzaOven("pan","traditional","cheddar", ["diced tomatoes", "olives", "bell peppers"]);



var crustTypes = ["deep dish", "hand tossed", "pan", "stuffed crust"];

var sauceTypes = ["traditional", "marinara", "bbq", "alfredo"];

var cheeses = ["mozzarella", "cheddar", "feta", "kolby jack","provolone","parmesan"];

var toppings = ["pepperoni", "sausage", "canadian bacon", "chicken", "pinapple", "diced tomatoes", "olives", "bell peppers", "onions", "mushrooms"];

function randomAmount(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomItem(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomItem(crustTypes);
    pizza.sauceType = randomItem(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomAmount(5, 1); i++) {
        pizza.cheeses.push(randomItem(cheeses));
    }
    for(var i=0; i<randomAmount(4, 0); i++) {
        pizza.toppings.push(randomItem(toppings));
    }
    return pizza;
}

console.log(randomPizza());