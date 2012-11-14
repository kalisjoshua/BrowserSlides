/*jshint strict:false laxcomma:true*/
/*globals console require*/

var data = require("./data.json")
  , result = "no answer calculated";

// Very Imperative
function countBlue () {
  // 1. using variables outside it's scope
  // 2. tightly coupled to accomplishing one task
  var counter = 0, i = 0, len = data.length;

  for (i; i < len; i++) {
    if(data[i].Color === "blue") {
      counter++;
    }
  }

  return counter;
}

// Imperative
function countColor (data, color) {
  // 1. tightly coupled to counting based on a specific attribute
  var counter = 0, i = 0, len = data.length;

  for (i; i < len; i++) {
    if(data[i].Color === color) {
      counter++;
    }
  }

  return counter;
}

// Absctracted
function countAttributeWithValue (data, attr, test) {
  // 1. restricted to only one conditional
  var counter = 0, i = 0, len = data.length;

  for (i; i < len; i++) {
    if(data[i][attr] === test) {
      counter++;
    }
  }

  return counter;
}

// Further
function countBasedOnTest (data, fn) {
  // 1. better but still only a 'counter' function
  var counter = 0, i = 0, len = data.length;

  for (i; i < len; i++) {
    if(fn(data[i])) {
      counter++;
    }
  }

  return counter;
}

// Recursive
function countRecursive (data, fn, acc) {
  // 1. recursion isn't always the best choice
  if (!data[0]) {
    return acc;
  }

  if (fn(data[0])) {
    acc++;
  }

  return countRecursive(data.slice(1), fn, acc);
}


function complexCondition (item) {
  return item.Color === "green" && /a/.test(item.Author);
}

// result = countBlue();
// result = countColor(data, "green");
// result = countAttributeWithValue(data, "Color", "green");
// result = countBasedOnTest(data, complexCondition);
// result = countRecursive(data, complexCondition, 0);
// result = data.filter(complexCondition).length;

console.log(result);
