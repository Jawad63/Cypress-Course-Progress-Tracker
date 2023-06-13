// concatination and interpolation
var price = 20;
var itemName = 'cup';
var messageToPrint1 = 'The price for your ' + itemName + ' is ' + price + ' euros '; // concatination.
var messageToPrint2 = `The price for your ${itemName} is ${price} euros`; // interpolation - ES6
console.log(messageToPrint2);