"use strict";
// 1- Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var person = " Hello Gulab Ahmad,";
console.log(person, "would you like to learn some python today");
// 2- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person1 = "1-Gulab Ahmad , 2-Qamar Sultan , 3-Muhammad Abdul Ahad";
console.log(person1.toUpperCase());
console.log(person1.toLowerCase());
//  3- Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
var quote = "Jalal al-Din Muḥammad Rumi once said,";
console.log(quote, `"Do not be satisfied with the stories that come before you. Unfold your own myth."`);
// 4- Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
const author = "Jalal al-Din Muḥammad Rumi";
const quote1 = `"Do not be satisfied with the stories that come before you. Unfold your own myth."`;
console.log(`${author} once said, ${quote1}`);
//  5- Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
const nameWithwhitespace = "\tGulab Ahmad\t\n";
console.log("nameWithWhitespace:");
console.log(nameWithwhitespace);
const strippedName = nameWithwhitespace.trim();
console.log("\nstrippedName:");
console.log(strippedName);
// 6- Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
var usernum = 5;
var usernum2 = 3;
console.log(usernum + usernum2);
console.log(16 - 8);
console.log(2 * 4);
console.log(32 / 4);
// 7- Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favnum = 2210;
console.log("Favorite Number is:", favnum);
// 8- Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Declare a variable 'favnum' of type 'number' and assign it the value 2210
var favnum = 2210;
// Print a message to the console, including the value of 'favnum'.
console.log("Favorite Number is:", favnum);
// 9- Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let frndNames = ["Gulab Ahmad", "Qamar Sultan", "Muhammad Abdul Ahad", "Ghulam Ali", "Umar", "Asfandyar"];
for (let i = 0; i < frndNames.length; i++) {
    console.log("Friend", (i + 1), ":" + frndNames[i]);
}
// 10- Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let Greetings = ["Gulab Ahmad", "Qamar Sultan", "Muhammad Abdul Ahad", "Ghulam Ali", "Umar", "Asfandyar"];
for (let i = 0; i < Greetings.length; i++) {
    console.log("Hello,", Greetings[i], "Have a great Day");
}
// Define an array of friends' names
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Create a personalized greeting for each person
for (let i = 0; i < names.length; i++) {
    let greeting = `Hello, ${names[i]}! Have a great day`;
    console.log(greeting);
}
// 11- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ["Hayabusa", "Shikra", "Suzuki RX1000", "Audi ER Tron GT"];
for (let i = 0; i < transportation.length; i++) {
    let mode = transportation;
    console.log(`I would like to own a ${mode}.`);
}
// 12- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let inviteGuest = ["Gulab Ahmad", "Qamar Sultan", "Muhammad Abdul Ahad", "Ghulam Ali", "Umar", "Asfandyar"];
for (let i = 0; i < inviteGuest.length; i++) {
    let Guest = inviteGuest[i];
    console.log(`Dear ${Guest},  You are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.`);
}
// 13- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invites
/*let guestList: string[] = ["Gulab Ahmad","Qamar Sultan","Muhammad Abdul Ahad"];

//  print the original list
console.log("Original Guest List");
for (let i = 0; i < guestList.length; i++) {
   console.log(guestList[i]);
   
}

// 14- Update guest list
let guestUnableToAttend = "Qamar Sultan";
let newGuest = "Umar";

//  find and replace the guest who can't make it

let index = guestList.indexOf(guestUnableToAttend);
if (index!== -1) {
   guestList[index] = newGuest;
}

//  print the update list
console.log("\n Update Guest list:");
for (let i = 0; i < guestList.length; i++) {
   console.log(guestList[i]);
}*/
//  ----------------------------------
// 18 - Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
const placeToVisit = ["Lahore", "Karachi", "Islamabad", "Peshwar", "Muree", "Sakrdo"];
console.log(placeToVisit);
// • Print your array in its original order.
console.log("Original order:");
console.log(placeToVisit);
// • Print your array in alphabetical order without modifying the actual list.
const sortedalphabetical = [...placeToVisit].sort();
console.log("Alphabetical Order:");
console.log(sortedalphabetical);
// • Show that your array is still in its original order by printing it.
console.log("Original order after Alphabetical sort:");
console.log(placeToVisit);
// • Print your array in reverse alphabetical order without changing the order of the original list.
const sortedreverseAlphabetical = [...placeToVisit].sort().reverse();
console.log("Reverse Aplhabetical order:");
console.log(sortedreverseAlphabetical);
// • Show that your array is still in its original order by printing it again.
console.log("Original order after reverse alphabetical order:");
console.log(placeToVisit);
// • Reverse the order of your list. Print the array to show that its order has changed.
const reverseArray = [...placeToVisit].reverse();
console.log("Reverse Order:");
console.log(reverseArray);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
const originalOrderArray = [...reverseArray].reverse();
console.log("Back to Original order:");
console.log(originalOrderArray);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
const sortedArray = [...placeToVisit].sort();
console.log("sorted in Alphabetical order:");
console.log(sortedArray);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
const sortedReverseArray = [...sortedArray].reverse();
console.log("Sort in reverse Aplhabetical order:");
console.log(sortedReverseArray);
// 19- Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
const countries = ["Pakistan",
    "United States", "France",
    "Germany", "Australia",
    "Japan", "South Africa"];
console.log("List of Countries:");
console.log(countries);
const Countries = [
    {
        name: "Pakistan",
        capital: "Islamabad",
        population: 364364364364
    },
    {
        name: "Canada",
        capital: "Ottawa",
        population: 3643643644464
    },
    {
        name: "United Kingdom",
        capital: "London",
        population: 364364364364
    }
];
console.log("Countries Information");
for (let i = 0; i < Countries.length; i++) {
    console.log(Countries[i]);
}
;
// 21 - Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
const myArray = [1, 2, 3, 4, 5, 9, 8, 7, 6];
// intentional error
const indexWithError = 10;
const valueWithError = myArray[indexWithError];
// attempt to print the value that cause "undefined"...
console.log(`Value at index ${indexWithError}: ${valueWithError}`);
// correction:
if (indexWithError >= 0 && indexWithError < myArray.length) {
    const corrctedValue = myArray[indexWithError];
    console.log(`corrcted value at ${indexWithError}: ${corrctedValue}`);
}
else {
    console.log("inex is out of bounds. please provide a valid index");
}
// 22 - Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
let a = 5;
let b = 10;
//  Test 1: Is `a` equal to 5? I predict true.
console.log("Is a == 5? I predict True.");
console.log(a == 5);
// Test 2 : Is `b` equal to 5? I predict false.
console.log("Is b == 5? I predict False.");
console.log(b == 5);
//Test 3 : Is `a` is not equal to `b`? I predict true.
console.log("Is a != b? I predict True.");
console.log(a != b);
//  Test 4: Is `a` is less than `b`? I predict true
console.log("Is a < b? I predict true");
console.log(a < b);
// Test 5 : Is `a` is greater than or equal to `b`? I predict false
console.log("Is a >= b ? I predict False.");
console.log(a >= b);
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let x = true;
let y = false;
// Test 6: Is x AND y both true? I predict False.
console.log("Is x && y? I predict False.");
console.log(x && y);
// Test 7: Is x OR y true? I predict True.
console.log("Is x || y? I predict True.");
console.log(x || y);
// Test 8: Is NOT x true? I predict False.
console.log("Is !x? I predict False.");
console.log(!x);
// Test 9: Is NOT y true? I predict True.
console.log("Is !y? I predict True.");
console.log(!y);
// Test 10: Is a equal to '5'? I predict False (due to type mismatch).
console.log("Is a == '5'? I predict False.");
console.log(a == 5);
// 23 - More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let str1 = "apple";
let str2 = "banana";
let num1 = 10;
let num2 = 20;
let array1 = [32, 56, 36, 90, 76, 56, 45];
let array2 = [77, 99, 55, 44, 33, 22, 11, 20];
// Tests for equality and inequality with strings
console.log("Equality test with string: Is str1 is equal to Apple? I predict true.");
console.log(str1 === 'apple');
console.log("Inequality test with string: Is str1 is  equal to str2? I predict false.");
console.log(str1 !== str2);
// • Tests using the lower case function
console.log("Lowercase Test: Is str1 is lowercase ? I predict true.");
console.log(str1.toLowerCase() === 'apple');
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Equality test 
console.log("equality test: Is num1 equal to  num2? I predict false");
console.log(num1 === num2);
// Inequality test:
console.log("Inequality test: Is num1 is equal to num2? I predict false");
console.log(num1 !== 10);
// Greater than test:
console.log("Greater than test: Is num2 greater num1 ? I predict true");
console.log(num2 > num1);
// Less than Test:
console.log("Less Than test: Is num1 is less than num2? I predict true");
console.log(num1 < num2);
// Greater than or equal test:
console.log("Greater than or equal test:  Is num1 grater than or equal num2 ? I predict false");
console.log(num1 >= num2);
// less than or equal:
console.log("Less than or equal: Is num2 is less thn or equal to num1? I predict false");
console.log(num2 <= num1);
//  AND  OR Test:
console.log("Logical AND test: Is num1 less than 15 AND num2 greater than 15? I predict False.");
console.log(num1 < 15 && num2 > 15);
console.log("Logical OR test: Is num1 less than 5 OR num2 greater than 15? I predict True.");
console.log(num1 < 5 || num2 > 15);
// Test whether an item is in an array
console.log("Array inclusion test: Is 3 in array1? I predict True.");
console.log(array1.includes(32));
// Test whether an item is not in an array
console.log("Array exclusion test: Is 6 not in array1? I predict True.");
console.log(!array1.includes(56));
// 24-  Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
var alien_color = "green, yellow, red";
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
const alien_color1 = "green";
if (alien_color1 === 'green') {
    console.log("Congraulation! You have earned 5 points.");
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
const alien_color2 = 'red';
if (alien_color2 === 'green') {
    console.log("Congraulation! You have earned 5 points.");
}
// 25 - Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
const alien_color3 = "green";
if (alien_color3 === 'green') {
    console.log('Congratulations! You just earned 5 points for shooting the green alien.');
}
else {
    console.log('Congratulations! You just earned 10 points for shooting an alien that is not green.');
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
const alien_color4 = "red";
if (alien_color4 === 'green') {
    console.log('Congratulations! You just earned 5 points for shooting the green alien.');
}
else {
    console.log('Congratulations! You just earned 10 points for shooting an alien that is not green.');
}
// 26- Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
const alien_color5 = "red";
if (alien_color5 === 'green') {
    console.log('Congratulations! You just earned 5 points for shooting the green alien.');
}
// • If the alien is red, print a message that the player earned 15 points.
else if (alien_color5 === 'yellow') {
    console.log('Congratulations! You just earned 10 points for shooting the yellow alien.');
}
// • If the alien is red, print a message that the player earned 15 points.
else if (alien_color5 === 'red') {
    console.log('Congratulations! You just earned 15 points for shooting the red alien');
}
//  27 - Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
const person_age = 19;
// • If the person is less than 2 years old, print a message that the person is a baby.
if (person_age < 2) {
    console.log("the person is a baby");
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (person_age >= 2 && person_age < 4) {
    console.log("the person is a toddler");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (person_age >= 4 && person_age < 13) {
    console.log("the person is a kid");
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (person_age >= 13 && person_age < 20) {
    console.log("the person is a teenager");
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (person_age >= 20 && person_age < 65) {
    console.log("the person is an adult");
}
// • If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("the person is an elder");
}
// 28 - Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
const favorite_fruits = ["Apple", "Banana", "Oranges"];
//   • Make a array of your three favorite fruits and call it favorite_fruits.
if (favorite_fruits.includes("Apple")) {
    console.log("You really like Apple!");
}
if (favorite_fruits.includes("Banana")) {
    console.log("You really like Banana!");
}
if (favorite_fruits.includes("Orange")) {
    console.log("You really like Orange!");
}
if (favorite_fruits.includes("Mango")) {
    console.log("You really like Mango!");
}
else {
    console.log("Mango is not your favrt fruits");
}
if (favorite_fruits.includes("Kiwi")) {
    console.log("Yoy really like Kiwi!");
}
else {
    console.log("Kiwi is not your favrt fruits");
}
// 29 - Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
const usernames = ["admin", "Gulab Ahmad", "Qamar", "Umar", "Mukhtar Ahmad", "Ali", "Muhammad Abdul Ahad"];
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
for (const username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in agains`);
    }
}
// 30 - T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`You have ordered a ${size} - sized shirt with the message : ${message}`);
}
make_shirt("medium", "Asia Cup Pakistan 2023");
// 31 - Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt1(size = "Large", message = "I Love Typescript") {
    console.log(`Yoy have 0rdered a ${size} - sized shirt with the message : ${message}`);
}
make_shirt1();
make_shirt1("Medium");
make_shirt1("Small", "Typescript awesome!");
// 32 -  Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "unkown") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi", "Pakistan");
describe_city("Abu Dhabi");
describe_city("Peris", "France");
// 33 -  City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city, country) {
    return `${city} , ${country}`;
}
// Call your function with at least three city-country pairs, and print the value that’s returned. 
const location1 = city_country("Lahore", "Pakistan");
const location2 = city_country("Lodon", "New York");
const location3 = city_country("paris", "France");
console.log(location1);
console.log(location2);
console.log(location3);
// 34 -  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magician) {
    console.log(magician);
}
const magicianNames = ["David Copperfield", "Houdini", "Penn Jillette", "Teller"];
// Call the function to show the magicians' names
console.log("Magician Names:");
show_magicians(magicianNames);
// 35 - Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians1(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        const greatMagician = `the Great ${magician}`;
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
// Create an array of magician's names
const magicianNames1 = ["David Copperfield", "Houdini", "Penn Jillette", "Teller"];
// Call make_great() to modify the magician names and store the result in a new array
const greatMagicianNames = make_great(magicianNames);
// Call show_magicians() to see the modified list
console.log("Original Magician Names:");
show_magicians1(magicianNames1);
console.log("\nModified Magician Names with 'the Great':");
show_magicians1(greatMagicianNames);
// 36 -  Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function order_sandwich(items) {
    console.log("Sandwich Order Summary:");
    console.log("Items on the sandwich:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
}
// Call the function with different numbers of arguments
order_sandwich(["Turkey", "Lettuce", "Tomato", "Mayo"]);
order_sandwich(["Ham", "Swiss Cheese", "Pickles"]);
order_sandwich(["Peanut Butter", "Jelly"]);
// 37 - Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly
function createCar(manufacturer, model, ...options) {
    const carInfo = {
        manufacturer,
        model,
    };
    for (const [key, value] of options) {
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with required information and additional options
const carInfo = createCar("Toyota", "Camry", ["color", "Blue"], ["year", 2022]);
console.log(carInfo);
//   38 - Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create album objects with and without the number of tracks
const album1 = make_album("Artist 1", "Album 1", 12);
const album2 = make_album("Artist 2", "Album 2");
const album3 = make_album("Artist 3", "Album 3", 15);
// Print each album object
console.log(album1);
console.log(album2);
console.log(album3);
//   39 - Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of current usernames
const current_users = ["Ali", "Bilal", "Ch Asad", "Dawood", "Ehtisham"];
// Make a list of new usernames
const new_users = ["Ali", "dawood", "Gulab", "Jabbar", "Dastageer"];
// Loop through new_users to check for uniqueness
for (const new_user of new_users) {
    // Check if the lowercase version of the new username is in the lowercase version of current_users
    const isUsernameTaken = current_users.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase());
    if (isUsernameTaken) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please choose a different username.`);
    }
    else {
        console.log(`The username "${new_user}" is available.`);
    }
}
