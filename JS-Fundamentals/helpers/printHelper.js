// import functions
export function printAge (age) {
    console.log(age);
}

export function everythingFunction(allInfo) {
    return allInfo;
}

export var displayInfo = everythingFunction('all information...');


// classes:
class CustomerDetails {

    printFirstName(firstName) {
        return console.log(firstName);
    }


    /**
     * This method will print the last name.
     * @param {string} lastName 
     * @returns Ballskie // or whatever the name is.
     */
    printLastName(lastName) {
        return console.log(lastName);
    }
}

export const customerDetails = new CustomerDetails;