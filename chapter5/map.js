// map() 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组

var numbers = [1,2,3,4,5,6,3,2,1];

var everyResult = numbers.map(function (item, index, array) {
	// console.log(" item = " + item);
	console.log(" index = " + index);
	// console.log("array = " + array);
	return (item * 2);
});
console.log(everyResult);