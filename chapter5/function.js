// Function
// 函数实际上是对象。每个函数都是 Function 类型的实例。

// function sum(num1, num2) {
// 	return num1+num2;
// }
// var sum = function(num1, num2) {
// 	return num1+num2;
// }

// 没有重载

// 函数声明与函数表达式

// 执行
// 代码开始执行之前，解析器就已经通过一个名为函数声明提升的过程，读取并将函数声明添加到执行环境中。

console.log(sum(10, 10));
function sum(num1, num2) {
	return num1 + num2;
}

// ＊ 报错
// console.log(sum2(10, 10)); // TypeError: sum2 is not a function
// var sum2 = function(num1, num2) {
// 	return num1+num2;
// }

// 除了什么时候可以通过变量访问函数这一点区别之外，函数声明与函数表达式的语法其实是等价的。

// 函数内容属性

// arguments 和 this

// 函数属性和方法

// length 和 prototype

// 对于 ES 中的引用类型而言，prototype 是保存它们所有实例方法的真正所在。

// 每个函数都包含两个非继承而来的方法：apply() 和 call(). 作用相同，变化的是在使用 call() 方法时，传递给函数的参数必须逐个列举出来。

function callSum(num1, num2) {
	return sum.call(this, num1, num2);
	// return sum.apply(this, [num1, num2]);
	// return sum.apply(this, arguments);
}
