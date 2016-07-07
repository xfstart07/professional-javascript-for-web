// Array

var colors = Array("red", "blue", "green");

console.log(colors);

// 字面量

var colors2 = ["red", "blue", "green"];
console.log(colors2);

// 检测数组

// if (value instanceof Array) {

// }

// ES5 新增 Array.isArray()
// if (Array.isArray(value)) {

// }

if (Array.isArray(colors)) {
  console.log("true");
} else {
  console.log("false");
}

