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
