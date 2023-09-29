// 1. Converting Radian to Degree
function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return "Please Enter The Valid Input";
    }

    return radian * (180 / 3.14);
}

const degree = radianToDegree(5);
console.log(degree); 

// This will print "Please Enter The Valid Input"
const invalidInputForDegree = radianToDegree("5");
console.log(invalidInputForDegree);


// 2. Checking whether the given File Name is a JavaScript File or not using "endswith" method
function isJavaScriptFile(fileName) {
    return fileName.endsWith(".js");
}

const file = isJavaScriptFile("assignment.js");
const file2 = isJavaScriptFile("assignment.html");
const file3 = isJavaScriptFile("assignment.css");
const file4 = isJavaScriptFile("assignment.pdf");

console.log(file);  // true
console.log(file2); // false
console.log(file3); // false
console.log(file4); // false

// 3. Calculate the Total Oil Price that I have to pay
/*
Diesel ----> 114
Petrol ----> 130
Octane ----> 135
*/
function oilPrice (dieselLitre, petrolLitre, octaneLitre){
    if (typeof dieselLitre !== 'number' || typeof petrolLitre !== 'number' || typeof octaneLitre !== 'number') {
        return "Please Enter Valid Number Inputs for Liters";
    }

    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    const totalCost = (dieselLitre * dieselPrice) + (petrolLitre * petrolPrice) + (octaneLitre * octanePrice);
    return totalCost;
}

const totalPrice = oilPrice (2, 5, 10);

console.log (totalPrice);

// This will print "Please Enter Valid Number Inputs for Liters"
const invalidTotalPrice = oilPrice(2, "5", 10);
console.log(invalidTotalPrice); 


// 4. Public Bus Fair Calculate
/*
Reserved Bus --->
Microbus --->
Rest People Will Go by Public Bus
People : 65
Bus Remaining ---> 15
Microbus ---> 4
Public Bus ---> 4
Public Bus Fare ---> 250
*/
function publicBusFare(reservedBus, microbus, remainingPeople, publicBusFarePerPerson) {
    const totalPeople = 65; // Total number of people
    const remainingBus = 15; // Number of remaining public buses

    // The number of people going by public bus
    const peopleGoingByPublicBus = totalPeople - reservedBus - microbus;

    if (peopleGoingByPublicBus <= 0) {
        return 0; // No one is taking the public bus
    }

    const publicBusesNeeded = (remainingPeople + remainingBus - 1) / remainingBus;

    const totalFare = publicBusesNeeded * publicBusFarePerPerson;

    return totalFare;
}

const reservedBus = 4; // Number of reserved buses
const microbus = 4; // Number of microbuses
const remainingPeople = 65 - reservedBus - microbus; // Number of people going by public bus
const publicBusFarePerPerson = 250; // Public bus fare per person

const totalPublicBusFare = publicBusFare(reservedBus, microbus, remainingPeople, publicBusFarePerPerson);
console.log(totalPublicBusFare);


// 5. First object's friend is Second Object and vice versa. If then it is TRUE and both them are Friend, if not then False and they aren't friends.
/*
{name : "Tom", friend : "Rock"}
{name : "Rock, friend : "Tom"}
true

{name : "Chris, friend : "John"}
{name : "Raz, friend : "Johnny"}
false
*/
function isBestFriends(person1, person2) {
    // 
    return person1.friend === person2.name && person2.friend === person1.name;
}

// Case 1 | They are Friends
const tom = { name: "Tom", friend: "Rock" };
const rock = { name: "Rock", friend: "Tom" };

const areTheyFriends = isBestFriends(tom, rock)
console.log(areTheyFriends); // true

// Case 2 | They are not Friends
const chris = { name: "Chris", friend: "John" };
const raz = { name: "Raz", friend: "Johnny" };

const areTheyFriends2 = isBestFriends(chris, raz);
console.log(areTheyFriends2); // false