// objects:
var customer = {
    firstName : 'John',
    lastName : 'Smith'
}

// Two ways to get the value of the key from an object:
// bracket notation:
console.log(customer['firstName']);
// console.log(customer.lastName);

// these key values can also be changed:
// dot notation:
customer.lastName = "Parker";
console.log(customer.lastName);

// arrays:
var cars = ["volva", "toyota", "tesla"];
cars[1] = "BMW";
console.log(cars[1]);