// Math

console.log(Math.PI);

console.log(Math.max(3, 54, 43, 15));
console.log(Math.min(3, 54, 43, 15));

// 数组中的最大或最小值
var values = [1,2,3,4,5,6,7,8];
var max = Math.max.apply(Math, values);
console.log(max);
// 这个技巧的关键是把 Math 对象作为 apply() 的第一个参数，从而正确地设置 this 值。然后，可以将任何数组作为第二个参数。

// 舍入方法
// Math.ceil() 执行向上舍入
// Math.floor() 执行向下舍入
// Math.round() 执行标准舍入，四舍五入

console.log("ceil(25.9) ~= " + Math.ceil(25.9));
console.log("ceil(25.5) ~= " + Math.ceil(25.5));
console.log("ceil(25.1) ~= " + Math.ceil(25.1));

console.log("round(25.9) ~= " + Math.round(25.9));
console.log("round(25.5) ~= " + Math.round(25.5));
console.log("round(25.1) ~= " + Math.round(25.1));

console.log("floor(25.9) ~= " + Math.floor(25.9));
console.log("floor(25.5) ~= " + Math.floor(25.5));
console.log("floor(25.1) ~= " + Math.floor(25.1));

console.log("-----------random---------");
// Math.random() 方法返回介于 0 和 1 之间一个随机数

console.log("生成1到10之间的数值");
var num = Math.floor(Math.random() * 10 + 1);
console.log(num);

function selectFrom(lowerValue, upperValue) {
	var choices = upperValue-lowerValue+1;
	return Math.floor(Math.random() * choices + lowerValue);
}

var colors = ["red","green", "blue", "yellow", "black", "purple", "brown"];
console.log(colors);
var color = colors[selectFrom(0, colors.length-1)];
console.log(color);