// A function is a reusable block of code:

// Declarative function
function helloOne (number) {
    console.log('hello function ' + number + '!');
}

// Anonymous function
var helloTwo = function () {
    console.log('hello function two!');
}

// ES6 or arrow function
var helloThree = (firstName, lastName) => {
    console.log(`my name is ${firstName} ${lastName}`);
}


helloOne('one');
helloTwo();
helloThree('john', 'smith');


// function with return keyword
function multiplyByTwo (nr) {
    var result = nr * 2;
    return result;
}

var myResult = multiplyByTwo(20)
console.log(myResult);

// import functions:
import { printAge } from '../helpers/printHelper.js';
printAge(24);


// import everything
import * as helper from '../helpers/printHelper.js';
console.log(helper.displayInfo);