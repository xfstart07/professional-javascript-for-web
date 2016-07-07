// 递归

function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * factorial(num-1);
	}
}
console.log(factorial(4));

// var anotherFactorial = factorial;
// factorial = null;
// console.log(factorial(4)); // 报错


// return num * arguments.callee(num-1);
// 使用 arguments.callee 代替函数名，确保无论怎么调用函数都不会出问题
// 在严格模式下，不能通过脚本访问 arguments.callee

