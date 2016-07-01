var s = "Nicholas";
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();

console.log(typeof s);
console.log(typeof b);
console.log(typeof i);
console.log(typeof u);
console.log(typeof n);  // object
console.log(typeof o);  // object

console.log('------------instanceof----------');

// ES 提供了 instanceof 操作符，语法如下:
// result = variable instanceof constructor

var person = Object()
console.log(person instanceof Object);

var colors = "red";
console.log("colors = " + colors);
console.log(colors instanceof Array);
