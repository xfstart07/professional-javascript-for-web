// 闭包

// 闭包是指有权访问另一个函数作用域中的变量的函数

function createFunctions() {
	var result = new Array();
	for (var i = 0; i < 10; i++) {
		result[i] = function() {
			console.log(i);
			return i;
		};
	}
	return result;
}

var result = createFunctions();
console.log(result[1]);
function createFunctions2() {
	var result = new Array();
	for (var i = 0; i < 10; i++) {
		result[i] = function(num) {
			return function (num) {
				return num;
			};
		}(i);
	}

	return result;
}

var result2 = createFunctions2();
console.log(result2[2]);

// 由于闭包会携带包含它的函数的作用域，因此会比其他函数占用更多的内存。
// 过度使用闭包可能导致内存占用过多，建议只在绝对必要时再考虑使用闭包。
