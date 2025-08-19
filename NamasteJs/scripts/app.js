const users = [
  { id: 1, name: "Alice", age: 25, isActive: true, marks: 82 },
  { id: 2, name: "Bob", age: 30, isActive: false, marks: 55 },
  { id: 3, name: "Charlie", age: 22, isActive: true, marks: 91 },
  { id: 4, name: "David", age: 28, isActive: false, marks: 47 },
  { id: 5, name: "Eva", age: 35, isActive: true, marks: 76 },
];

// // COMBINED (map + filter + reduce)

// // Get the names of users who passed (marks >= 50).
// const nameOfUsersScoring50OrMore = users
//   .filter((user) => user.marks >= 50)
//   .map((user) => user.name);
// console.log(nameOfUsersScoring50OrMore);

// // Find the average marks of only active users.
// const averageMarksOfActiveUsers = users
//   .filter((user) => user.isActive === true)
//   .reduce((acc, user) => acc + user.marks, 0);
// console.log(averageMarksOfActiveUsers);

// // Get a comma-separated string of all users older than 25.
// const userData = users
//   .filter((user) => user.age > 25)
//   .map((user) => user.name)
//   .join(", ");
// console.log(userData);

// // Find the total marks of users whose names are longer than 3 letters.
// const totalMarksOfUserWhoseNameIsLongerThan3Letter = users
//   .filter((user) => user.name.length > 3)
//   .map((user) => user.marks);
// console.log(totalMarksOfUserWhoseNameIsLongerThan3Letter);

// // Return an array of names of top 2 scoring users.
// const top2Scorer = users
//   .sort((a, b) => b.marks - a.marks)
//   .slice(0, 2)
//   .map((user) => user.name);
// console.log(top2Scorer);

//MAP
// //Get an array of all user names
// const userNames = users.map((user) => user.name);
// console.log(userNames);

// // Create an array of objects with only name and age.
// const nameAndAge = users.map((user) => user.name + " " + user.age);
// console.log(nameAndAge);

// // Add 5 bonus marks to each user’s marks and return the updated array.
// const bonusMarks = users.map((user) => user.marks + 5);
// console.log(bonusMarks);

// // Convert user objects into strings like "Alice (25 years old)".
// const stringNameAndAge = users.map(
//   (user) => `${user.name} (${user.age} years old)`
// );
// console.log(stringNameAndAge);

// // Create a new array of users but replace isActive with "Active" or "Inactive".
// const replaceValue = users.map((user) => (user.isActive = !user.isActive));
// console.log(replaceValue);

//FILTER
// // Get all users who are active.
// const userIsActive = users.filter((user) => user.isActive == true);
// console.log(userIsActive);

// // Find users who are older than 25.
// const olderThan25 = users.filter((user) => user.age > 25);
// console.log(olderThan25);

// // Get users with marks greater than or equal to 80.
// const marksGreaterThanOrEqualTo80 = users.filter((user) => user.marks >= 80);
// console.log(marksGreaterThanOrEqualTo80);

// // Filter out users whose names start with "A".
// const usersWhoseNamesStartWithA = users.filter((user) => user.name[0] === "A");
// console.log(usersWhoseNamesStartWithA);

// // Get all users who failed (marks < 50).
// const marksLowerThan50 = users.filter((user) => user.marks < 50);
// console.log(marksLowerThan50);

//REDUCE
// // Find the total age of all users.
// const totalAgeOfAllUsers = users.reduce((acc, user) => acc + user.age, 0);
// console.log(totalAgeOfAllUsers);

// // Get the average marks of all users.
// const averageMarks =
//   users.reduce((acc, user) => acc + user.marks, 0) / users.length;
// console.log(averageMarks);

// // Count how many users are active vs inactive (return an object like { active: 3, inactive: 2 }).
// const activeNotActiveUsers = users.reduce(
//   (acc, user) => {
//     user.isActive === true ? acc.active++ : acc.inActive++;
//     return acc;
//   },
//   { active: 0, inActive: 0 }
// );

// console.log(activeNotActiveUsers);

// // Find the user with the highest marks.
// const highestMarks = users.reduce((highest, user) => {
//   return user.marks > highest.marks ? user : highest;
// });
// console.log(highestMarks);

// // Create an object with names as keys and ages as values.
// const dataObject = users.reduce((acc, user) => {
//   acc[user.name] = user.age;
//   return acc;
// }, {});
// console.log(dataObject);

///////
//Higher Order Function
// const arrRadius = [2, 3, 4, 5];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };
// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// function calculate(radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// }
// console.log(calculate(arrRadius, area));
// console.log(calculate(arrRadius, circumference));

//Trust Issues with setTimeout()
// console.log("---START---");

// setTimeout(function a() {
//   console.log("Call Back");
// }, 5000);

// console.log("---END---");

// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }
// console.log("While END");

//Callback Function Example
// setTimeout(function () {
//   console.log("Timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

//This code runs fine, but what if we print num and getName before initialzing
// var num = 6;

// function getName() {
//   console.log("Hello There, this is getName function");
// }

// getName();
// console.log(num);

// This will still print the function console log but num is undefined
// getName();
// console.log(num);

// var num = 6;

// function getName() {
//   console.log("Hello There, this is getName function");
// }
