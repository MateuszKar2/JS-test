const numbers = [23, 324, 1, 902, 32];

const message = "It" + "is" + "treu";

console.log(message);

// const guestName = "Mango";
// const roomNumber = 207;
// const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting);

const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting);

console.log(guestName.toLocaleLowerCase());
console.log(guestName.toLocaleUpperCase());

console.log(guestName.indexOf("r"));

console.log(guestName.includes("r"));

console.log(guestName.endsWith("r"));

console.log(guestName.slice(1, 5));

const age = 26;

console.log(age > 18 && age < 30);
console.log(age > 18 && age < 20);
console.log(age > 18 || age < 20);
console.log(!age)