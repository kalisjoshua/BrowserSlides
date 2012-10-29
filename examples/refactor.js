/*jshint strict:false laxcomma:true*/
/*globals console require*/

var data = require("./data.json");

// Very Imperative - goBlue - bad, don't ever do this!
function goBlue () {
  // 1. using variables outside it's scope
  // 2. tightly coupled to accomplishing one task
  var counter = 0, i = 0, len = data.length;

  for (i; i < len; i++) {
    if(data[i].Color === "blue") {
      counter++;
    }
  }

  console.log(counter);
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

  console.log(counter);
}

// Absctracted
function count (data, attr, test) {
  // 1. restricted to only one conditional
  var counter = 0, i = 0, len = data.length;

  for (i; i < len; i++) {
    if(data[i][attr] === test) {
      counter++;
    }
  }

  console.log(counter);
}

// Further
function test (data, fn) {
  // 1. restricted to only one conditional
  var counter = 0, i = 0, len = data.length;

  for (i; i < len; i++) {
    if(fn(data[i])) {
      counter++;
    }
  }

  console.log(counter);
}

/// Recursive
function recursive (data, fn, acc) {
  if (!data[0]) {
    return acc;
  }

  if (fn(data[0])) {
    acc++;
  }

  return recursive(data.slice(1), fn, acc);
}


function condition (item) {
  return item.Color === "green" && /a/.test(item.Author);
}

// goBlue();
// countColor(data, "green");
// count(data, "Color", "green");
// test(data, condition);
console.log(recursive(data, condition, 0));
