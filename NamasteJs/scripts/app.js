//Higher Order Function
const arrRadius = [2, 3, 4, 5];

const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

function calculate(radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
}
console.log(calculate(arrRadius, area));
console.log(calculate(arrRadius, circumference));

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
