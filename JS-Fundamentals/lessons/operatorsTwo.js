// Logical "AND"
console.log(true && false) // all values have to be TRUE for expression to be TRUE

// Logical "OR"
console.log(true || false) // any value should be TRUE for expression to be TRUE

var ageIsMoreThanTwentyOne = true;
var isUSCitizen = false;

var eligibilityForDrivingLisence = ageIsMoreThanTwentyOne || isUSCitizen;
console.log(`This customer is eligible for DL : ${eligibilityForDrivingLisence}`);

// Logical "NOT"
console.log(!true);
console.log(6 !== 10);
