// Loops

// for loop (for i loop)
for (let i = 0; i < 5; i++) {
    // console.log('hello world' + i);
} 

// for of loop:
var cars = ["volvo", "toyota", "tesla"];
for (let car of cars) {
    // console.log(car);
 
    if (car === "toyota") {
        break;
    }
}

// for each loop:
cars.forEach(car => {
    console.log(car);
})
