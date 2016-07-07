// forEach() 对数组中的每一项运行给定函数。这个方法没有返回值

var numbers = [1,2,3,4,5,6,3,2,1];

numbers.forEach(function (item, index, array) {
	// console.log(" item = " + item);
	console.log(" index = " + index);
	// console.log("array = " + array);
});
