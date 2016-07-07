// every () 对数组中的每一项运给定函数，如果该函数对每一项都返回 ture，则返回 true

var numbers = [1,2,3,4,5,6,3,2,1];

var everyResult = numbers.every(function (item, index, array) {
	console.log(" item = " + item);
	console.log(" index = " + index);
	console.log("array = " + array);
	return (item > 2);
});

console.log("everyResult = " + everyResult);
console.log("-----------------------------");

var numbers2 = [3,4,5,6,3,2,1];

var everyResult2 = numbers2.every(function (item, index, array) {
	console.log(" item = " + item);
	console.log(" index = " + index);
	console.log("array = " + array);
	return (item > 2);
});
console.log("everyResult2 = " + everyResult2);

// some() 对数组中的每一项运行给定函数，如果该函数对任一项返回 true，则返回 true
console.log("----------------some-------------");
var numbers3 = [1,2,3,4,5,6,3,2,1];

var everyResult3 = numbers3.some(function (item, index, array) {
	// console.log(" item = " + item);
	console.log(" index = " + index);
	// console.log("array = " + array);
	return (item > 2);
});
console.log("everyResult3 = " + everyResult3);
